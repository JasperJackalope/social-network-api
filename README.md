# Homework 18 - Social Network API

For this assignment, I was tasked with creating an API for a social media startup that uses a NoSQL database, specifically MongoDB, to handle large amounts of unstructured data. This API allows users to create, read, update, and delete users, thoughts, and reactions. Users can also add and remove friends to their friend list.

## Description

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## License

    This project has no license.

## Installation

## Usage

## Contributing

## Additional Information

Link to the GitHub repository:

Link to the walk-through video:

Table of Contents
Installation
Usage
Routes
Contributing
Tests
Questions
Installation
Clone the repository
Install the dependencies by running npm install
Create a .env file and add the following variables:
makefile
Copy code
MONGODB_URI=<your MongoDB URI>
JWT_SECRET=<your JWT secret>
Seed the database by running npm run seed
Start the server by running npm start
Usage
This API can be used to manage users, thoughts, and reactions for a social network. You can use software such as Insomnia or Postman to test the API endpoints.

Routes
The following routes are available in this API:

User Routes
GET /api/users: get all users
GET /api/users/:id: get a user by ID
POST /api/users: create a new user
PUT /api/users/:id: update a user by ID
DELETE /api/users/:id: delete a user by ID
POST /api/users/:id/friends/:friendId: add a friend to a user's friend list by ID
DELETE /api/users/:id/friends/:friendId: remove a friend from a user's friend list by ID
Thought Routes
GET /api/thoughts: get all thoughts
GET /api/thoughts/:id: get a thought by ID
POST /api/thoughts: create a new thought
PUT /api/thoughts/:id: update a thought by ID
DELETE /api/thoughts/:id: delete a thought by ID
POST /api/thoughts/:thoughtId/reactions: add a reaction to a thought by ID
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: delete a reaction from a thought by ID
Authentication Routes
POST /api/users/login: login a user
POST /api/users: create a new user
Contributing
Please refer to the Contributor Covenant for contribution guidelines.

Tests
This API can be tested using Jest by running npm test.

Questions
If you have any questions, please feel free to contact me on GitHub at username.