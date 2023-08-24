const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoute');
const userRoutes = require('./userRoute');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', userRoutes);

module.exports = router;
