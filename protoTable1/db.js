const Pool = require('pg').Pool

const pool = new Pool({
        host: "127.0.0.1",
        port: 5432,
        user: "postgres",
        password: "root",
        database: "postgres"
    }
)






// pool.connect()
// pool.query('SELECT * FROM contacts', (err, data) => {
//         if (err)
//                 throw new Error(err);
//         console.log(data.rows, err);
//         // pool.end();
// });
// pool.connect()
module.exports = pool












// const Pool = require('pg').Pool
// const pool = new Pool()
// const connectionString = 'postgres://umbmvdqn:SFVCdUDKEIBtkWDPmTjar5PgHiK1SldU@hattie.db.elephantsql.com/umbmvdqn'
// const pool = new Pool({
//     connectionString,
// })
//
// pool.query('SELECT NOW()', (err, res)=>{
//     console.log(err, res)
//     pool.end()
// })



// module.exports = pool

