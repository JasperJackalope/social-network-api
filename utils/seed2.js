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
      { username: 'user1', email: 'user1@test.com' },
      { username: 'user2', email: 'user2@test.com' },
    ]);

    // Create thoughts
    const thoughts = await Thought.create([
      {
        thoughtText: 'This is a test thought from user1',
        username: users[0].username,
      },
      {
        thoughtText: 'This is a test thought from user2',
        username: users[1].username,
      },
    ]);

    // Create reactions
    const reactions = await Reaction.create([
      {
        reactionBody: 'Nice thought!',
        username: users[0].username,
        thoughtId: thoughts[0]._id,
      },
      {
        reactionBody: 'I disagree',
        username: users[1].username,
        thoughtId: thoughts[1]._id,
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
