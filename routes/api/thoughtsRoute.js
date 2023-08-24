// thoughts route
const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(createThought)
  .delete(deleteThought)
  .addReaction(addReaction)
  .removeReaction(removeReaction);

// /api/thoughts/:thoughtId/reactions

module.exports = router;


