const fs = require('fs')
const path = require('path')



class Pxpect {

constructor(headAche, numb, factors, additional) {
    this.headAche = headAche
    this.numb = numb
    this.factors = factors
    this.additional = additional
}
    getValuesFromJson(){
        return 1

    }

    static getAll(){
        return new Promise((resolve, reject) =>{
            fs.readFile(
                path.join(__dirname, '..', 'data', 'main.json'),
                'utf-8',
                (err, content) =>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(JSON.parse(content))

                    }
                }
            )
        })
    }



}

module.exports = Pxpect