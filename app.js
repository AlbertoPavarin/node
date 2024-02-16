const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }))

const auth = require('./routes/auth');

app.use('/login', auth);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "static/html/index.html"));
});

app.listen(2000, () => {
    console.log("Server is now listening on port 2000");
});