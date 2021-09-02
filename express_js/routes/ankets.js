const {Router} = require('express')
//Название Ankets некорректное, приводит к путаннице, т.к. по факту файл называется Anket
// Не стал переименовывать потому что нужно переписать все названия в данном файле, а времени разбираться нет
const Ankets = require('../models/Anket')
const router = Router()

// Общая страница анкет
router.get('/', async (req, res) => {
    const ankets = await Ankets.getAll()
    res.render('ankets', {

        title: 'Анкеты юзерсонов',
        isankets: true,
        ankets
    })
})

// Гет для страницы редактирования
router.get('/:id/edit', async (req, res) => {
    //
    if(!req.query.allow){
        return res.redirect('/')
    }

    const ankets = await Ankets.getById(req.params.id)

    res.render('anket_edit', {
        title: `Редактировать ${ankets.email}`,
        ankets
    })
})


//Пост запрос для обработки обновления пользователя
router.post('/edit', async(req, res) =>{
    await Ankets.update(req.body)
    res.redirect('/ankets')
})


//Страница конкретного курса
router.get('/:id', async(req, res) =>{
    //Уточнения для следующей записи: anket это название переменной, а Ankets - это ссылка на Anket.js, т.к.
    // импортирована она в данный файл именно как Ankets
    const anket = await Ankets.getById(req.params.id)
    //На самом деле черт ногу сломит, если называть переменные похожим образом.
    //На начальных этапах лучше помечать их дополнительными постфиксими, _template _route _html
    res.render('anket', {
        //Чтобы сделать для страниц этого типа отдельный hbs шаблон - зададим параметр layout
        title: `Анкета пользователя ${anket.firstName} ${anket.secondName}`,
        layout: 'user_page',
        anket
    })
})


module.exports = router