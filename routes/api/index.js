const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/user', userRoutes);

module.exports = router;
