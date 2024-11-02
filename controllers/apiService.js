
const axiosInstance = require('../api/axiosInstance');

const fetchExternalData = async (endpoint) => {
    try {
        const response = await axiosInstance.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch external data');
    }
};

module.exports = {
    fetchExternalData,
};