// const uuid = require('uuid/v4')
const { v4: uuid } = require('uuid');
const fs = require('fs')
const path = require('path')
const {response, json, static} = require("express");

class Anket {
    constructor(firstName, secondName, email, img) {
        this.firstName = firstName
        this.secondName = secondName
        this.email = email
        this.img = img
        this.id = uuid()
    }

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.secondName,
            email: this.email,
            img: this.img,
            id: this.id

        }
    }

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

    static async getById(id) {
        const courses = await Anket.getAll()
        return courses.find(c => c.id === id)
    }

}
module.exports = Anket