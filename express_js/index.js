//уроки 3_18, 3_19 -- 3_23

const express = require('express')
const path = require('path')
//Подключение handlebars
const expshb = require('express-handlebars')

//После удаления подключения внутри app.get() мы должны привязать файлы маршрутизации к основному файлу
//Это делается через импорт модулей + упоминание в app.use()
//ТУТ МЫ УКАЗЫВАЕМ ПУТЬ ДО МАРШРУТНОГО ФАЙЛА JS, А В app.use МЫ ССЫЛАЕМСЯ ИМЕННО НА ЭТОТ ОБЪЕКТ
// В ДАННОМ ФАЙЛЕ МЫ НЕ УКАЗЫВАЕМ .hbs ШАБЫ
const homeRoutes = require('./routes/home')
const anketsRoutes = require('./routes/ankets')
const addRoutes = require('./routes/add')
const aboutRoutes = require('./routes/about')
const contSelectionRoutes = require('./routes/cont_selection')


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
app.use(express.static(path.join(__dirname,'custom')))
app.use(express.urlencoded({extended:true}))


//Подключение файлов для маршрутизации
//Данный вид подключения подразумевает, что в файлахс маршрутами указан полный путь, типа router.get('/ankets'   итд
// app.use(homeRoutes)
// app.use(anketsRoutes)
// app.use(addRoutes)
// app.use(aboutRoutes)
//Но используется вариант с префиксами, прописанными в основном файле приложения (то есть тут)
// Это позволяет видеть управлять маршрутом из основногшо файла
app.use('/', homeRoutes)
app.use('/ankets', anketsRoutes)
app.use('/add', addRoutes)
app.use('/about', aboutRoutes)
app.use('/cont_selection', contSelectionRoutes)



//Если порт не определен - значение по умолчанию
const PORT = process.env.PORT || 3000


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})


