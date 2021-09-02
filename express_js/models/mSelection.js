const path = require('path')
const fs = require('fs')
const {response} = require("express");


//Альтернативный способ прописать путь до файла
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'selection.json'
)

//Объявление модели страницы выборки
class mSelection {
    static async add(anket){
        const selection = await mSelection.fetch()
        // console.log(selection)

        const idx = selection.ankets.findIndex(ank => ank.id === anket.id)
        const candidate = selection.ankets[idx]
        if (candidate){
            candidate.count++
            selection.ankets[idx] = candidate
        } else{
            anket.count = 1
            selection.ankets.push(anket)

        }

        selection.price += +anket.price

        return new Promise((resolve, reject) =>{
            fs.writeFile(p, JSON.stringify(anket), err =>{
                if(err){
                    reject(err)
                }else {
                    resolve()
                }
            })
        })

    }
    //Метод доставания инфы из корзины выборки
    static async fetch() {
        return new Promise((resolve, reject) =>{
            fs.readFile(p, 'utf-8', (err, content)=>{
                if (err) {
                    reject(err)
                } else{
                    resolve(JSON.parse(content))
                }
            })
        })
    }

}

module.exports = mSelection