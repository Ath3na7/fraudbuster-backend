const mongoose = require("mongoose");

const scamCheckSchema = new mongoose.Schema({
  checkType: {
    type: String,
    enum: ["esewa", "phone", "banking", "telegram", "whatsapp", "facebook"],
    required: true
  },
  accountName: {
    type: String,
    trim: true
  },
  accountNumber: {
    type: String,
    match: /^[0-9]{10,20}$/, 
    trim: true,
    unique: true,
    index: true
  },
  bankName: {
    type: String,
    trim: true
  },
  facebookName: {
    type: String,
    trim: true
  },
  facebookUrl: {
    type: String,
    match: /https?:\/\/(www\.)?facebook\.com\/[A-Za-z0-9._%+-]+/,
    trim: true
  },
  esewaDetail: {
    type: String,
    match: /^[0-9]{10}$/,
    trim: true
  },
  telegramUsername: {
    type: String,
    trim: true
  },
  whatsappNumber: {
    type: String,
    match: /^[0-9]{10,15}$/,
    trim: true
  },
  checkedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  deleted: {
    type: Boolean,
    default: false
  }
});

// Middleware to update the `updatedAt` field on updates
scamCheckSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const ScamCheck = mongoose.model("ScamCheck", scamCheckSchema);

module.exports = ScamCheck;
