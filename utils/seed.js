const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { getRandomUser, getRandomThought, getRandomReaction } = require('./data');

// TODO: Update below:

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('MongoDB connected successfully');

  // Delete existing data
  await User.deleteMany({});
  await Thought.deleteMany({});
  await Reaction.deleteMany({});

  // Create users
  const users = [];
  for (let i = 0; i < 20; i++) {
    const user = getRandomUser();
    users.push(user);
  }

  // Create thoughts and reactions for each user
  const thoughts = [];
  const reactions = [];
  users.forEach((user) => {
    const thought = getRandomThought(user._id);
    thoughts.push(thought);
    const reaction = getRandomReaction(user._id, thought._id);
    reactions.push(reaction);
  });

  // Insert data into database
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
  await Reaction.collection.insertMany(reactions);

  console.log('Seeding completed successfully!');
  process.exit(0);
});
