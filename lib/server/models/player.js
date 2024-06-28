const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    nickname: {
        type: String,
        trim: true,
    },
    socketID: {
        type: String,
    },
    points: {
        type: Number,
        default: 0,
    },
    // X OR O
    playerType: {
        required: true,
        type: String,
    }
});

module.exports = playerSchema;