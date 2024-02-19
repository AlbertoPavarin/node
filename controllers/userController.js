const conn = require('../config/db');

const prettier = require('prettier');

const getUsers = (req, res, next) => {
    conn.query("SELECT * FROM user", (err, rows, fields) => {
        if (err)
            res.send(`Errore: ${err}`);
        else  
        {  
            console.log(JSON.stringify(rows,null,'\t'));
            if (rows.length > 0)
                return res.status(200).type('json').send(JSON.stringify(rows,null,'\t'));

                res.status(404).json("Nessun utente");
        }
    });
}


module.exports = {
    getUsers
}