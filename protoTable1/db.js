const Pool = require('pg').Pool

const connectionString = 'postgres://umbmvdqn:SFVCdUDKEIBtkWDPmTjar5PgHiK1SldU@hattie.db.elephantsql.com/umbmvdqn'
const pool = new Pool({
    connectionString,
})

pool.query('SELECT NOW()', (err, res)=>{
    console.log(err, res)
    pool.end()
})



module.exports = pool

