const express = require('express');
const { User, Thought } = require('../models');

const router = express.Router();

// GET all thoughts
router.get('/thoughts', async (req, res) => {
  try {
    const thoughts = await Thought.find().populate('reactions').populate('username');
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single thought by its _id
router.get('/thoughts/:id', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id).populate('reactions').populate('username');
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new thought
router.post('/thoughts', async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    const user = await User.findByIdAndUpdate(req.body.username, { $addToSet: { thoughts: thought._id } }, { new: true });
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT to update a thought by its _id
router.put('/thoughts/:id', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE to remove thought by its _id
router.delete('/thoughts/:id', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if (thought) {
      const user = await User.findByIdAndUpdate(thought.username, { $pull: { thoughts: thought._id } }, { new: true });
      await Reaction.deleteMany({ thoughtId: thought._id });
      res.json({ message: 'Thought deleted' });
    } else {
      res.status(404).json({ message: 'Thought not found' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST to add a new reaction to a thought
router.post('/thoughts/:thoughtId/reactions', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $addToSet: { reactions: req.body } },
      { new: true }
    );
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE to remove a reaction from a thought
router.delete('/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
