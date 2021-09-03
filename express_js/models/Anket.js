// const uuid = require('uuid/v4')
const { v4: uuid } = require('uuid');
const fs = require('fs')
const path = require('path')
const {response, json, static} = require("express");

class Anket {
    constructor(firstName, secondName, email, img, price) {
        this.firstName = firstName
        this.secondName = secondName
        this.email = email
        this.img = img
        this.price = price
        this.id = uuid()

    }

    toJSON() {
        return {
            firstName: this.firstName,
            secondName: this.secondName,
            email: this.email,
            img: this.img,
            price: this.price,
            id: this.id



        }
    }

    //Разобратся с обозначением static
    //Метод для обновления контакта
    static async update(anket) {
        const ankets = await Anket.getAll()

        const idx = ankets.findIndex(ank => ank.id === anket.id)
        ankets[idx] = anket
        return new Promise((resolve, reject) =>{
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'ankets.json'),
                JSON.stringify(ankets),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                        // console.log(this)
                    }
                }
            )
        })
    }


    // Метод для сохранения анкеты
    // Внутри класса для методов мы можем записывать функции в след виде
    // Про async/await  https://learn.javascript.ru/async-await
    async save() {
        const ankets = await Anket.getAll()
        ankets.push(this.toJSON())


        return new Promise((resolve, reject) =>{
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'ankets.json'),
                JSON.stringify(ankets),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                        // console.log(this)
                    }
            }
            )
        })



        // console.log('Anket', ankets)

    }
    // Про static https://learn.javascript.ru/static-properties-methods
    //Метод для получения всех свойств объекта
    static getAll(){
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'ankets.json' ),
                'utf-8',
                (err, content) =>{
                    if (err) {
                        reject(err)
                    } else{
                        resolve(JSON.parse(content))
                    }
                }
            )


        })


    }

    //Метод  ядл получения по id
    static async getById(id) {
        const ankets = await Anket.getAll()
        return ankets.find(c => c.id === id)
    }

}
module.exports = Anket