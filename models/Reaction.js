// Requirement for Schema and Model
const { Types } = require('mongoose');
const { Schema } = require('mongoose');

// Reaction Schema
const reactionSchema = new Schema({

    // Sets ID
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },

    // Sets Reaction Body
    reactionBody: {
        type: String,
        required: [true, 'Enter a reaction!'],
        minLength: 2,
        maxLength: 280
    },

    // Sets Reaction Username
    username: {
        type: String,
        required: [true, 'Enter a username!'],
    },

    // Sets Date of Reaction
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = reactionSchema;