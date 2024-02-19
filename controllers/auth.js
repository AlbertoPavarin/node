const conn = require('../config/db');

const createUser = (req, res, next) => {
    console.log(req.body.username);

    if (req.body.username === "")
        return res.json({"message": "Inserisci uno username", "response": false});

    conn.query("INSERT INTO `user`(username)" +
                `VALUES ('${req.body.username}')`, (err, rows, fields) => {
                    if (err)
                        return res.json({"message": "Errore nella creazione", "response": false, "err": err});
                    else
                        res.redirect('/');
                });
};

module.exports = {
    createUser
}