import * as url from "url";

const url1 = 'some url'
const url2 = 'some url'
const url3 = 'some url'

const loadImage = (ulr) => {
    return new Promise((resolve => {
        const image = new Image()
        img.height = 200
        img.src = url
        document.body.append(img)
        img.addEventListener('load', ()=>{
            resolve
        })
    }))
}
//Чейнинг
loadImage(url1)
    .then(()=>{
        console.log('Картинка 1 загружена')
        return loadImage(url2)
    })
    .then(()=>{
        console.log('Картинка 2 загружена')
        return loadImage(url3)
    })
    .then(()=>{
        console.log('Картинка 3 загружена')
    })

//Сокращенно
loadImage(url1)
    .then(()=>loadImage(url2))
    .then(()=>loadImage(url3))
    .then(()=>console.log('Все картинки загружены'))






//Последовательно
loadImage(url1)
    .then(() => {
        console.log('Картинка 1 готова')
        loadImage(url2)
            .then(() => {
                console.log('Картинка 2 готова')
                loadImage(url3)
                    .then(() => {
                        console.log('Картинка 3 готова')
                    })
            })

    })

const img = new Image()
img.height = 200
img.src = url1
document.body.append(img)

img.addEventListener('load', ()=>{
    const img = new Image()
    img.height = 200
    img.src = url2
    document.body.append(img)
    img.addEventListener('load', ()=>{
        const img = new Image()
        img.height = 200
        img.src = url3
        document.body.append(img)
        img.addEventListener('load', ()=>{
            const img = new Image()
            img.height = 200
            img.src = url4
            document.body.append(img)
        })
    })
})


