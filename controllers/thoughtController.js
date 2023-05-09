// Import the Thought and User models
const { Thought, User } = require("../models");

// Export an object containing various controller methods
module.exports = {

  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  // Create a new thought
  createThought(req, res) {
    // Create a new thought using the request body
    Thought.create(req.body)
      .then((dbThoughtData) => {
        // Find the user associated with the new thought and add the thought's ID to their "thoughts" array
        return User.findOneAndUpdate(
          { _id: req.body.userID },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        )
      })
      .then(userData => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },

  // Update a thought by ID
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) => {
        // If no thought is found with the given ID, return a 404 error
        !thought ? res.status(404).json({ message: 'No thought by ID' }) : res.json(thought);
      })
      .catch((err) => res.status(500).json(err));
  },

  // Get a thought by ID
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((dbThoughtData) => {
        // If no thought is found with the given ID, return a 404 error
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought with this ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Delete a thought by ID
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
      .then((thought) => {
        if (!thought) {
          // If no thought is found with the given ID, return a 404 error
          res.status(404).json({ message: 'No thought with that ID' })
        }

        // Find the user associated with the deleted thought and remove the thought's ID from their "thoughts" array
        return User.findOneAndUpdate(
          { _id: req.body.userID },
          { $pull: { thoughts: thought._id } },
          { new: true }
        )
      })
      .then(() => res.json({ message: 'User and associated apps deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

  // Add a reaction to a thought
  addReaction(req, res) {
    console.log('You are adding a reaction');
    console.log(req.body);

    // Find the thought by ID and add the reaction to its "reactions" array
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No friend found with that ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a reaction to a thought
deleteReaction(req, res) {
  console.log(req.params)

    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId} } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought found with that ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};