const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..',  "static/html/login.html"));
})

router.post('/', (req, res, next) => {
    console.log(req.body.username);
    res.redirect('/');
})

module.exports = router;