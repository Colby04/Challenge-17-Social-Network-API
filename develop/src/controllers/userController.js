const User = require('../models/User');

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getSingleUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }
      res.json(deletedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  addFriend: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  removeFriend: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};