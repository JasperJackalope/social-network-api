const express = require('express');
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

const router = express.Router();

// GET all thoughts
router.get('/thoughts', getThoughts);

// GET a single thought by its _id
router.get('/thoughts/:id', getThoughtById);

// POST a new thought
router.post('/thoughts', createThought);

// PUT to update a thought by its _id
router.put('/thoughts/:id', updateThought);

// DELETE to remove thought by its _id
router.delete('/thoughts/:id', deleteThought);

// POST to add a new reaction to a thought
router.post('/thoughts/:thoughtId/reactions', createReaction);

// DELETE to remove a reaction from a thought
router.delete('/thoughts/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;
