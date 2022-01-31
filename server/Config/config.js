const Pool = require("pg").Pool;
const pool = new Pool({
    user:'postgres',
    host:'host.docker.internal',
    database:'jisc_demo',
    password:'postgres',
    port:'5432'
});

module.exports = pool;