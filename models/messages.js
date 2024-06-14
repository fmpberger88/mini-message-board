const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Message text is required'],
        trim: true,
        minlength: [1, 'Message text must be at least 1 character long']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        minlength: [1, 'Username must be at least 1 character long']
    },
    added: {
        type: Date,
        default: Date.now,
        required: [true, 'Date is required']
    }
});

module.exports = mongoose.model('Message', messageSchema);
