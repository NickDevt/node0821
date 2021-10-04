//  https://habr.com/ru/post/565062/
//  https://www.youtube.com/results?search_query=sequilize
// https://www.youtube.com/watch?v=dHoWlAiA8CY
// https://www.youtube.com/watch?v=mqgJeBoVlw8
// https://www.youtube.com/watch?v=PS_vWDxwATM




const {Sequelize, DataTypes, Model} = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', 'root', {
    host: '127.0.0.1',
    dialect: 'postgres'
})

// console.log(sequelize)


class Contact extends Model{}

Contact.init(
    {
        id: {type: DataTypes.INTEGER , autoIncrement: true, primaryKey: true, allowNull: false, unique:true },
        name: {type: DataTypes.STRING, allowNull: false}
    },
    {
        sequelize,
        modelName: 'contacts',
        timestamps:false}
)



// По какой-то причине стандартный способ с define не работает
// const Contact = sequelize.define('contact',
//     {
//         id:{
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//             allowNull: false,
//             unique:true
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//
//     }
//
// )
//



async function test(){
    const d = await Contact.findAll()
    console.log(d)
}

test()




module.exports = sequelize