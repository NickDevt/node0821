//уроки 3_18, 3_19 -- 3_23

const express = require('express')
const path = require('path')
//Подключение handlebars
const expshb = require('express-handlebars')
// В экспрессе сервер создается так
const app = express()

//Передаем объект для handlebar
const hbs = expshb.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

//Далее идёт непосредственно подключение handlebars к express
//Первая строка это сообщение о существовании движка
app.engine('hbs',  hbs.engine)
//Второе - это указание на выполнение движком части функций
app.set('view engine', 'hbs')
//Второй аргумент - это указание папки с html страницами
app.set('views', 'views')

//Подключаем кастомный файл css стилей в handlebars
app.use(express.static('custom'))


// В отличии от базового http функционала - express делает много стандартных вещей из коробки
// Например он прописывает заголовки, контент тайп итд
// Вторым аргументом метод рендер принимает объект, где можно указывать свойства страницы, например тайтл итд
app.get('/', (req, res) => {
    // res.status(200)
    // res.sendFile(path.join(__dirname, 'views', 'index.html'))
    // Следующая запись является методом handlebars
    res.render('index',{
        title: 'Главная страница',
        ishome: true
    })
})

app.get('/about', (req, res) => {
    // res.status(200)
    // res.sendFile(path.join(__dirname, 'views ', 'about.html'))
    res.render('about', {
        title: 'О нашей великой и могущественной орагнизации',
        isabout: true
    })
})
app.get('/ankets', (req, res) => {
    res.render('ankets', {
        title: 'Анкеты юзерсонов',
        isankets: true
    })
})
app.get('/add', (req, res) => {
    res.render('add', {
        title: 'Добавить новую анкету',
        isadd:true
    })
})



//Если порт не определен - значение по умолчанию
const PORT = process.env.PORT || 3000


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})


