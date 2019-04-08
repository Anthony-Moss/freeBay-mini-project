const pgp = require('pg-promise')({
    query: e => {
        console.log('QUERY: ', e.query);
    }  
});

const options = {
    host: process.env.BD_HOST,
    database: process.env.DB_NAME
};

const db = pgp(options);
module.exports = db;