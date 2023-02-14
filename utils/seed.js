// Requires Connection, Seed Data, and Models
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeeds, thoughtSeeds } = require('./data');

// Seed Connection
connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected!');

    // Stores seeded data
    const users = userSeeds;
    const thoughts = thoughtSeeds;

    // Pushes data
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.log('===== Seeding Done =====');
    process.exit(0);
})