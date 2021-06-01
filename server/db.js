const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "1Gr7412gr",
    host: "localhost",
    port: 5432,
    database: "sberbank"
})

module.exports = pool