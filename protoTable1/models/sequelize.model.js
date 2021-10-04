const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../db.orm')

// console.log(sequelize.define().options)
// fio, name, lastname, patronymic, sex, prof, city, birth, source, email, phone, place_of_work,
//     salary,region,edu_place,edu_degree,edu_year,edu_full



const Contact = sequelize.define('contact',
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }



)

async function test(){
    const d = await Contact.findAll()
    console.log(d)
}

test()