// Importing required packages and files
const express = require('express');
const connectDB = require('./config/connection');
const routes = require('./routes');

// Assigning the current working directory to a variable
const cwd = process.cwd();

// Assigning the port number to a variable
const PORT = process.env.PORT || 3001;

// Creating an Express app
const app = express();

// Configuring the app to parse incoming JSON data and url-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Adding the routes to the app
app.use(routes);

// Connecting to the database and starting the server
connectDB().then(() => {
app.listen(PORT, () => {
console.log(`API server running on port ${PORT}!`);
});
});