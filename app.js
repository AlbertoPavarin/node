const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

const auth = require('./routes/auth');
const home = require('./routes/home');


app.use('/create', auth);

app.use('/', home);

app.listen(2000, () => {
    console.log("Server is now listening on port 2000");
});

//evita che node si chiuda su un errore
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err);
});