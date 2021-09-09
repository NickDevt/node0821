// Документация experess https://expressjs.com/ru/guide/routing.html
// Хорошее видео на тему быстрого старта https://www.youtube.com/watch?v=p3RFMEixUOE
const express = require('express')


const PORT = process.env.PORT || 3000


const app = express()


app.get('/', (req, res) =>{
    res.send('12345')
    // res.end('2')
})


app.listen(PORT, ()=>{
    console.log(`Сервер запущен на порту ${PORT}`)})
