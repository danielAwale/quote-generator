const Pool = require("pg").Pool;

const pool = new Pool({
    user: "danielawale",
    password: "2393",
    host: "localhost",
    port: 5433,
    database: "quote_generator"
})

module.exports = pool;