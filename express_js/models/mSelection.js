const path = require('path')
const fs = require('fs')



//Альтернативный способ прописать путь до файла
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'selection.json'
)
// const p = path.join(__dirname, '..', 'data', 'selection.json')

//Объявление модели страницы выборки
class MSelection {
    static async add(anket){
        //Этот метод достает данные из selection json
        const selection = await MSelection.fetch()
        // Находим индексы для объектов из массива contacts из selection JSON
        // Находит индекс того объекта из массива, который по id соответствует полученному ранее anket.id
        // Если id нет - findIndex должен вернуть -1, тогда candidate будет undefined и вернет false
        const idx = selection.contacts.findIndex(cont => cont.id === anket.id)
        //  ...тогда candidate будет undefined
        const candidate = selection.contacts[idx]
        // .. и вернет false
        if (candidate){
            candidate.count++
            selection.contacts[idx] = candidate
        } else{
            // anket.count - это количество таких добавленных товаров в список
            anket.count = 1
            selection.contacts.push(anket)

        }

        selection.price += +anket.price

        return new Promise((resolve, reject) =>{
            fs.writeFile(p, JSON.stringify(selection), err =>{
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

module.exports = MSelection