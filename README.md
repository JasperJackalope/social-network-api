# Homework 18 - Social Network API

## Description

For this assignment, I was tasked with creating an API for a social media startup that uses a NoSQL database, specifically MongoDB, to handle large amounts of unstructured data. This API allows users to create, read, update, and delete users, thoughts, and reactions. Users can also add and remove friends to their friend list.

I chose to turn this assignment in late as I would rather have functioning code than a rushed project.

## Table of Contents

- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## License

    This project has no license.

## Installation

Make sure you have MongoDB installed by visting : https://www.mongodb.com/docs/manual/installation/

You will need to install the correct dependencies by running the following command:  ```npm install```

Next, seed the database by running the following command:  ```npm run seed```

Finally, run the following command to start the server: ```npm start```

## Usage

This API can be used to manage users, thoughts, and reactions for a social network. Insomina is the recommended software to run the API routes.

### Routes
The following routes are available in this API:

### User Routes
- GET /api/users: get all users
- GET /api/users/:id: get a user by ID
- POST /api/users: create a new user
- PUT /api/users/:id: update a user by ID
- DELETE /api/users/:id: delete a user by ID
- POST /api/users/:id/friends/:friendId: add a friend to a user's friend list by ID
- DELETE /api/users/:id/friends/:friendId: remove a friend from a user's friend list by ID 

### Thought Routes
- GET /api/thoughts: get all thoughts
- GET /api/thoughts/:id: get a thought by ID
- POST /api/thoughts: create a new thought
- PUT /api/thoughts/:id: update a thought by ID
- DELETE /api/thoughts/:id: delete a thought by ID
- POST /api/thoughts/:thoughtId/reactions: add a reaction to a thought by ID
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId: delete a reaction from a thought by ID

## Contributing

I pulled code from various lessons in unit 18 to build my project, including the models, controllers, and routes. I pulled the dateFormat util from GitHub user Morganbb and learned about the Faker seeding from Mozilla Developmer Network. Finally, I used Chat GBT to explain errors in my testing along with finding pesky punctuation errors.

## Additional Information

Link to the GitHub repository: https://github.com/JasperJackalope/social-network-api

Link to the walk-through video: https://drive.google.com/file/d/1GikP84DGduNQpY5J549SprIHlFMy-bDf/view?usp=share_link 
