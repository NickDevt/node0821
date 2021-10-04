// Документация experess https://expressjs.com/ru/guide/routing.html
// Хорошее видео на тему быстрого старта https://www.youtube.com/watch?v=p3RFMEixUOE
const express = require('express')
const contactsRouter = require('./routes/contacts.routes')


const PORT = process.env.PORT || 3000


const app = express()

// app.use(express.json)  Вызов этой конструкции приводит к бесконечной загрузке. Потерял часа полтора
app.use('/', contactsRouter)


// app.use()




app.listen(PORT, ()=>{
    console.log(`Сервер запущен на порту ${PORT}`)})
