// Requirement for Schema and Model
const { Schema, model } = require('mongoose');

// User Schema
const userSchema = new Schema({

    // Sets username
    username: {
        type: String,
        unique: true,
        required: [true, 'Enter a username!'],
        trim: true
    },

    // Sets email
    email: {
        type: String,
        required: true,
        unique: true,
        // Use REGEX to validate correct email
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },

    // References the Thought Key
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [this]
}, 
    {
        toJSON: {
            getters: true,
        },
    }
);

// Create User Model
const User = model('user', userSchema);

module.exports = User;