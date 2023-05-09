// Import the Thought and User models from "../models" directory
const { Thought, User } = require("../models");

module.exports = {
    // Retrieve all users from the User model and return as JSON
    getAllUsers(req, res) {
        User.find().then((users) => res.json(users)).catch((err) => res.status(500).json(err));
    },

    // Create a new user using the User model and return the new user as JSON
    createUser(req, res) {
        User.create(req.body).then((dbUserData) => res.json(dbUserData)).catch((err) => res.status(500).json(err));
    },

    // Find and update a user by ID with the request body data and return the updated user as JSON
    updateUser(req, res) {
        User.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            runValidators: true,
            new: true
        }).then((user) => {
            !user ? res.status(404).json({ message: 'No user' }) : res.json(user);
        }).catch((err) => res.status(500).json(err));
    },

    // Find and delete a user by ID and also delete all thoughts associated with that user and return a message as JSON
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id }).then((user) => !user ? res.status(404).json({ message: 'No user with that ID' }) : Thought.deleteMany({
            _id: {
                $in: user.thoughts
            }
        })).then(() => res.json({ message: 'User and associated apps deleted!' })).catch((err) => res.status(500).json(err));
    },

    // Find a user by ID and return that user as JSON
    getUserById(req, res) {
        User.findOne({ _id: req.params.id }).then((user) => !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user)).catch((err) => res.status(500).json(err));
    },

    // Add a friend to a user's friends list by finding the user by ID and updating the user with the new friend's ID
    addFriend(req, res) {
        console.log('You are adding a friend');
        console.log(req.body);
        User.findOneAndUpdate({
            _id: req.params.id
        }, {
            $addToSet: {
                friends: req.params.friendsId
            }
        }, {
            runValidators: true,
            new: true
        }).then((user) => !user ? res.status(404).json({ message: 'No friend found with that ID :(' }) : res.json(user)).catch((err) => res.status(500).json(err));
    },

    // Remove a friend from a user's friends list by finding the user by ID and updating the user by removing the friend's ID from the friends array
    removeFriend(req, res) {
        User.findOneAndUpdate({
            _id: req.params.id
        }, {
            $pull: {
                friends: req.params.friendsId
            }
        }, {
            runValidators: true,
            new: true
        }).then((user) => !user ? res.status(404).json({ message: 'No friend found with that ID :(' }) : res.json(user)).catch((err) => res.status(500).json(err));
    }
};
