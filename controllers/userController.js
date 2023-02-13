// Requires User Model
const { User } = require('../models');

// Exports Each Route Function
module.exports = {

    // Gets all Users
    getUsers(req, res) {
        User.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    // Finds one User using ID
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user was found with that ID!'})
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Creates New User
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    // Updates User
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user was found!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Deletes a User
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user was found!' })
                    : res.json({ message: 'User was deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    // Add Friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            {new:true},
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

    // Delete Friend
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
        )
        .then((user) => 
            !user
                ? res
                    .status(404)
                    .json({ message: 'No user was found!'})
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

}