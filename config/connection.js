// Import the Mongoose library
const mongoose = require('mongoose');

// Get the MongoDB URI from the environment variables or use a default URI for a local MongoDB database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/socialnetwork_db';

// Disable strict mode for MongoDB queries
mongoose.set('strictQuery', false);

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the Mongoose library and the URI specified
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // If the connection is successful, log a message to the console indicating that MongoDB has been connected successfully
    console.log('MongoDB connected successfully');
  } catch (err) {
    // If the connection is unsuccessful, log an error message to the console and exit the Node.js process with a non-zero exit code
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

// Export the connectDB function for use in other files
module.exports = connectDB;
