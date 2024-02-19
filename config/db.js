const mysql = require('mysql');
const dbConfig = require('./define');

const conn = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.username,
    password: dbConfig.psw,
    database: dbConfig.db,
    port: "3306"
})

conn.connect((err) => {
    if (err)
    {
        // console.log("Errore: " + err);
        throw new Error(err);
    }
    else
        console.log("connected");
});

module.exports = conn;