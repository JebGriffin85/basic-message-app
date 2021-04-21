const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const postRouter = require('./post.js');

const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { route } = require('./session.js');


router.post('/test', function(req, res) {
    res.json({ requestBody: req.body })
})

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/posts', postRouter);


module.exports = router;