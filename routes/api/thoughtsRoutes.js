const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  removeReaction
} = require('../../controllers/thoughtsController.js');

// GET all thoughts
router.route('/thoughts').get(getThoughts).post(createThought);

// GET a single thought by its _id
router.route('/thoughts/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST to create a reaction stored in a single thought's reactions array field
router.route('/thoughts/:thoughtId/reactions').post(createReaction);

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/thoughts/:thoughtId/reactions/:reactionId').delete(removeReaction);


module.exports = router;
