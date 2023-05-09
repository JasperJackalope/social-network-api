
// Importing necessary packages
const router = require('express').Router();

// Importing routes for thoughts and users
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// Mounting routes for thoughts and users under their respective endpoints
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

// Exporting router
module.exports = router;