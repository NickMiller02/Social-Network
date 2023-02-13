// Requires Router and Thought Route functions
const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// Gets and Creates Thoughts - /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// Thought by ID for view, update, and delete - /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).post(updateThought).delete(deleteThought);

// Thought by ID for reaction creation and deletes - /api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(createReaction).delete(deleteReaction);

// Reaction by ID to delete - /api/thoughts/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);


module.exports = router;