const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
    userid: {
        type: Number,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false 
    }
});