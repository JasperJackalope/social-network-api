  // Importing the Router class from the express package
const router = require("express").Router();

// Importing the user controller methods for handling the requests
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');  

 // Defining the routes and methods for the users
  // GET all users and POST a new user
router.route('/').get(getAllUsers).post(createUser); 

 // Defining the routes and methods for a specific user
  // GET a user by ID, PUT (update) a user and DELETE a user
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser); 

  // Defining the routes and methods for handling a user's friends
  // POST (add) a friend and DELETE a friend
router.route('/:id/friends/:friendsId').post(addFriend).delete(removeFriend);

// Exporting the router object to be used by other parts of the application
module.exports = router;  
