// Requirements
const router = require('express').Router();
const apiRoutes = require('./api');

// Routes
router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Error');
});


module.exports = router;