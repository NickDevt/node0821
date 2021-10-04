//  https://habr.com/ru/post/565062/
//  https://www.youtube.com/results?search_query=sequilize
// https://www.youtube.com/watch?v=dHoWlAiA8CY
// https://www.youtube.com/watch?v=mqgJeBoVlw8
// https://www.youtube.com/watch?v=PS_vWDxwATM


// Дальше я создаю модели всех таблиц
// Затем я экспортирую их
// В файле models я создаю класс, который производит с этими таблицами конкретные действия
// То есть модели у меня есть, а оперирую ими я уже в спец классе в models
// Таким образом будет несколько классов, которые будут делать несколько действий
// Что касается импорта - надо искать в документации

const {Sequelize, DataTypes, Model} = require('sequelize')

// const sequelize = new Sequelize('postgres', 'postgres', 'root', {
//     host: '127.0.0.1',
//     dialect: 'postgres'
// })

const sequelize = new Sequelize('umbmvdqn', 'umbmvdqn', 'SFVCdUDKEIBtkWDPmTjar5PgHiK1SldU', {
    host: 'hattie.db.elephantsql.com',
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
        modelName: 'contact',
        timestamps:false}
)


class Region extends Model{}

Region.init(
    {
        id: {type: DataTypes.INTEGER , autoIncrement: true, primaryKey: true, allowNull: false, unique:true },
        name: {type: DataTypes.STRING, allowNull: false}
    },
    {
        sequelize,
        modelName: 'Region',
        tableName: 'Region',
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


// Такой вариант работает:
//     class Contact extends Model{}
//
// Contact.init(
//     {
//         id: {type: DataTypes.INTEGER , autoIncrement: true, primaryKey: true, allowNull: false, unique:true },
//         name: {type: DataTypes.STRING, allowNull: false}
//     },
//     {
//         sequelize,
//         modelName: 'contacts',
//         timestamps:false}
// )


async function test(){
    const d = await Contact.findAll()
    const p = await Region.findAll()
    // console.dir(d)
    console.log(JSON.stringify(d, null, 2))
    console.log(JSON.stringify(p, null, 2))
}

test()




module.exports = sequelize