const express = require('express');
const router = express.Router();
const path = require('path');

const { createUser } = require('../controllers/auth');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..',  "static/html/login.html"));
})

router.post('/', createUser);

module.exports = router;