const db = require('../db')
// const {json} = require("express");

class Contacts{
    async getAll(req, res){

        const contact = await db.query('SELECT * FROM main')
        res.json(contact.rows)
    }

    // async getSome(req, res){
    //
    // }

    async uploadData(req, res) {
        
    }


}


module.exports = new Contacts()