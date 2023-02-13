// Requires User and Thought Model
const { User, Thought } = require('../models');

// Exports Each Route Function
module.exports = {

    // Get all Thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    // Get one Thought by ID
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought was found with that ID!' })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Create Thought
    createThought(req, res) {
        Thought.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username
        })
        .then((dbThoughtData) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: dbThoughtData._id } },
                { new: true }
            );
        })
        .then(response => {
            if (!response) {
                res.status(404).json({ message: 'Error' });
                return;
            }
            res.json(response)
        })
        .catch(err => res.json(err));
    },

    // Update Thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body }
        )
        .then((thought) =>
            !course
                ? res.status(404).json({ message: 'No thought was found!' })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Delete Thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought was found!' })
                : res.json({ message: 'Thought was deleted!' }))
        .catch((err) => res.status(500).json(err));
    },

    // Add Reaction
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true },
        )
        .then((thought) =>
            !thought
                ? res
                    .status(404)
                    .json({ message: 'No thought was found!' })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Delete Reaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.body.reactionId } } },
        )
        .then((user) =>
            !user
                ? res
                    .status(404)
                    .json({ message: 'No user was found!' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
}