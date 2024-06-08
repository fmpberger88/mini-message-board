const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Message = require('../models/messages');


/* GET home page. */
router.get('/', function(req, res, next) {
    const messages = Message.find({});
    if (err) {
        console.error(err);
    } else {
        res.render('index', { title: 'Message Board', messages: messages });
    }
});

// New message
router.post('/new', [
    body('username')
        .trim()
        .isLength({ min: 1 })
        .withMessage('Username is required')
        .escape(),
    body('text')
        .trim()
        .isLength({ min: 1 })
        .withMessage('Text is required')
        .escape()
], async function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const messages = await Message.find({});
        return res.render('index', {
            title: 'Mini Message Board',
            messages: messages,
            errors: errors.array()
        });
    }

    const { username, text } = req.body;
    const message = new Message({ username, text });
    await message.save();
    res.redircet('/')
    }
)

module.exports = router;
