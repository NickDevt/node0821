//уроки 3_18, 3_19

const express = require('express')
const path = require('path')
// В экспрессе сервер создается так
const app = express()


//В отличии от базового http функционала - express делает много стандартных вещей из коробки
// Например он прописывает заголовки, контент тайп итд
app.get('/', (req, res) => {
    // res.status(200)
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about', (req, res) => {
    // res.status(200)
    res.sendFile(path.join(__dirname, 'views ', 'about.html'))
})



//Если порт не определен - значение по умолчанию
const PORT = process.env.PORT || 3000


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})


