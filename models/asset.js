var mongoose = require('mongoose');

var assetSchema = new mongoose.Schema({
    name: String,
    filename: {
        type: String,
        required: true
    },
    size: Number,
    tags: Array,
    date_uploaded: {
        type: Date,
        default: Date.now()
    }
});

// assetSchema.index({ name: 1, transactionId: 1 }, { unique: true });

module.exports = mongoose.model('Asset', assetSchema);
