// src/services/apiService.js
const axios = require('axios');

// Create axios instance with default config
const apiClient = axios.create({
    timeout: 10000, // 10 seconds
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        // You can add auth tokens or other headers here
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        // Handle different error scenarios
        if (error.response) {
            // Server responded with error status
            console.error('API Error:', error.response.data);
            return Promise.reject(error.response.data);
        } else if (error.request) {
            // Request made but no response received
            console.error('Network Error:', error.request);
            return Promise.reject({ message: 'Network error occurred' });
        } else {
            // Error in request configuration
            console.error('Request Error:', error.message);
            return Promise.reject({ message: error.message });
        }
    }
);

const apiService = {
    // Generic request methods
    get: async (url, config = {}) => {
        return apiClient.get(url, config);
    },
    
    post: async (url, data = {}, config = {}) => {
        return apiClient.post(url, data, config);
    },
    
    put: async (url, data = {}, config = {}) => {
        return apiClient.put(url, data, config);
    },
    
    delete: async (url, config = {}) => {
        return apiClient.delete(url, config);
    }
    // ,
    // verifyBankAccount: async (data) => {
    //     const url = '/bank-verification';
    //     return apiClient.post(url, data);
    // }
};

module.exports = apiService;