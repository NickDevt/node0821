const express = require('express')
const path = require('path')
//Подключение handlebars
const expshb = require('express-handlebars')


const homeRoutes = require('./routes/main')


const app = express()


//Подключение handlebars
const hbs = expshb.create({
    defaultLayout: 'main_page_layout',
    extname: 'hbs'
})
//Далее идёт непосредственно подключение handlebars к express
//Первая строка это сообщение о существовании движка
app.engine('hbs',  hbs.engine)
//Второе - это указание на выполнение движком части функций
app.set('view engine', 'hbs')
//Второй аргумент - это указание папки с html страницами
app.set('views', 'views')
app.use(express.static(path.join(__dirname,'custom')))
app.use(express.urlencoded({extended:true}))



app.use('/', homeRoutes)


//Если порт не определен - значение по умолчанию
const PORT = process.env.PORT || 3000


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})