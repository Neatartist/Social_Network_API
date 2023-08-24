const User = require('../models/user');

const thoughtSchema = require('../models/thought');

module.exports = {
    // get all users
    getAllUsers: async (req, res) => {
      try {
        const users = await User.find().populate('thoughts').populate('friends');
        res.json(users);
      } catch (err) {
        console.log(err);
        res.sendStatus(400);
      }
    },
    // get one user by id
    getUserById: async ({ params }, res) => {
      try {
        // populate thought and friend data
        const user = await User.findOne({ _id: params.id }).populate('thoughts').populate('friends');
        if (!user) {
          // if no user is found, send 404
          res.status(404).json({ message: 'No user found with this id!' });
          return res.status(404).json({ message: 'No user found with this id!' })  ;
        }
        // if user is found, send json response
        res.json(user);
        // error catch
      } catch (err) {
        console.log(err);
        res.sendStatus(400);
      }
    }
  },
  // export the controller
  createUser: async ({ body }, res) => {
    try {
      const { username, email } = req.body;
      const user = await User.create({ username, email });
      res.json(user);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  }, 
  // delete user  
  deleteUser: async ({ params }, res) => {
    try {
      const user = await user.findOneandRemove({ _id: params.userId });

      if (!user) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
};


