const { Router } = require('express');
const router = Router();
const auth = require('./auth');
const docs = require('./docs');

router.use('/auth', auth);
router.use('/docs', docs);

module.exports = router