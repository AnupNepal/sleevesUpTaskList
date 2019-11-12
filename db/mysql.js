/**
 * MySQL
 */

const mysqlConnection = require('mysql');

var db;

class MySQL {

    constructor(dbHost, dbPort, dbUser, dbPassword, dbName) {

        db = mysqlConnection.createConnection({
            host: dbHost,
            port: dbPort,
            user: dbUser,
            password: dbPassword,
            database: dbName
        });
    }

    mysql() {
        db.connect((err) => {
            if (err) {
                throw err;
            }
            console.log('Connected to database');
        });

        return db;
    }
}

module.exports = { MySQL };