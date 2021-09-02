//Связка: models: mSelection, layout: cont-selection
//Выборка контактов (функционал корзины)
const {Router} = require('express')
const mSelection = require('../models/mSelection')
const Anket = require('../models/Anket')
const router = Router()

//Кнопка для добавления контакта в выборку
router.post('/add', async(req, res) =>{
    //Для начала мы должны получить объект для добавления
    const anket = await Anket.getById(req.body.id)
    await mSelection.add(anket)

    // В респонсе как всегда указываем страницу
    res.redirect('/cont-selection')
})


//Инициализируем саму страницу выборки (корзины)
router.get('/', async (req, res) =>{
    const selection = await mSelection.fetch()
    res.render('cont-selection', {
        title: 'Выборка',
        isSelection: true,
        ankets: selection.ankets,
        price: selection.price
    })
})

module.exports = router