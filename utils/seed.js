const faker = require('faker');
const connectDB = require('../config/connection');
const { User, Thought } = require('../models');

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear the database
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Create 5 users and 3 thoughts for each user
    for (let i = 0; i < 5; i++) {
      const user = await User.create({ username: faker.internet.userName(), email: faker.internet.email() });

      for (let j = 0; j < 3; j++) {
        await Thought.create({ thoughtText: faker.lorem.sentence(), username: user.username });
      }
    }

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();
