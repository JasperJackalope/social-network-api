// Require the express router
const router = require("express").Router();

// Require the necessary controllers for the thought routes
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// Define the routes with their corresponding HTTP methods
router.route('/').get(getAllThoughts).post(createThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
router.route('/:thoughtId/reactions').post(addReaction);

// Export the router object
module.exports = router;
