// import express router
const router = require('express').Router();

// import API routes
const apiRoutes = require('./api');

// add API routes
router.use('/api', apiRoutes);

// send error message for wrong routes
router.use((req, res) => res.send('Wrong route!'));

// export router
module.exports = router;
