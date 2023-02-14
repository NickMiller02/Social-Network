// Require Reaction Schema and Model
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Thought Schema
const thoughtSchema = new Schema({

    // Sets Thought Text
    thoughtText: {
        type: String,
        required: [true, 'Enter a Thought!'],
        minLength: 2,
        maxLength: 280
    },

    // Sets Date of Thought
    createdAt: {
        type: Date,
        default: Date.now()
    },

    // Sets Username
    username: {
        type: String,
        unique: true,
        required: [true, 'Enter a username!'],
    },
    reactions: [reactionSchema],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// Virtual to return reactions to thought
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});

// Create Thought model
const Thought = model('thought', thoughtSchema);


module.exports = Thought;