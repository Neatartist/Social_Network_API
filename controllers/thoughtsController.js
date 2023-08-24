const thoughts = require('../models/thoughts');

module.exports = {
  // get all thoughts
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await thoughts.find().populate('reactions');
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
  // get one thought by id
  getThoughtById: async ({ params }, res) => {
    try {
      // populate thought and friend data
      const thought = await thoughts.findOne({ _id: params.id }).populate('reactions');
      if (!thought) {
        // if no thought is found, send 404
        res.status(404).json({ message: 'No thought found with this id!' });
        return res.status(404).json({ message: 'No thought found with this id!' })  ;
      }
      // if thought is found, send json response
      res.json(thought);
      // error catch
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
  // export the controller
  createThought: async ({ body }, res) => {
    try {
      const { thoughtText, username } = req.body;
      const thought = await thoughts.create({ thoughtText, username });
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
  // delete thought
  deleteThought: async ({ params }, res) => {
    try {
      const thought = await thought.findOneandRemove({ _id: params.thoughtId });
      if (!thought) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
  // add reaction
  addReaction: async ({ params, body }, res) => {
    try {
      const thought = await thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: body } },
        { new: true, runValidators: true }
      );
      if (!thought) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
  // delete reaction
  deleteReaction: async ({ params }, res) => {
    try {
      const thought = await thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { new: true }
      );
      if (!thought) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
};


// export the controller
module.exports = thoughtController;