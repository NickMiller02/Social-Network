// Requires Router and User Route functions
const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// Gets and Creates Users - /api/users
router.route('/').get(getUsers).post(createUser);

// User by ID for view, update, delete - /api/users/:userId
router.route('/:userId').get(getSingleUser).post(updateUser).delete(deleteUser);

// Friends by ID to add and delete - /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);


module.exports = router;