const mongoose = require('mongoose');
const { User, Thought, Reaction } = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetwork_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    // Create users
    const users = await User.create([
      { username: 'Bob', email: 'bob@email.com' },
      { username: 'Carol', email: 'carol@email.com' },
      { username: 'Ted', email: 'ted@email.com' },
      { username: 'Alice', email: 'alice@email.com' },
    ]);

    // Create thoughts
    const thoughts = await Thought.create([
      {
        thoughtText: 'I want to dance!',
        username: users[0].username,
      },
      {
        thoughtText: 'What ever happened to Ecto Cooler?',
        username: users[1].username,
      },
      {
        thoughtText: 'Can a woodchuck chuck too much wood if it could chuck wood?',
        username: users[2].username,
      },
      {
        thoughtText: 'My foot hurts.',
        username: users[3].username,
      },
    ]);

    // Create reactions
    const reactions = await Reaction.create([
      {
        reactionBody: 'Nice thought!',
        username: users[0].username,
        thoughtId: thoughts[1]._id,
      },
      {
        reactionBody: 'I disagree',
        username: users[1].username,
        thoughtId: thoughts[2]._id,
      },
      {
        reactionBody: 'Same here.',
        username: users[2].username,
        thoughtId: thoughts[3]._id,
      },
      {
        reactionBody: 'You idiot!',
        username: users[3].username,
        thoughtId: thoughts[0]._id,
      },
    ]);

    console.log('Seed data created successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
