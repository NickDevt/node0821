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
    //
    // В респонсе как всегда указываем страницу
    res.redirect('/cont_selection')
})

//Метод delete для выборки (в ajax режиме)
router.delete('/remove/:id', async (req, res) =>{
    console.log(req.params.id)
    const selection = await mSelection.remove(req.params.id)

    res.status(200).json(selection)
})


//Инициализируем саму страницу выборки (корзины)
router.get('/', async (req, res) =>{
    const selection = await mSelection.fetch()
    // console.log(selection)
    // console.log(selection.contacts)
    // selection.contacts.push('ew')
    // console.log(selection.contacts)
    // console.log(selection)
    // const test = selection
    // console.log(test)

    res.render('cont-selection', {
        title: 'Выборка',
        isSelection: true,
        ankets: selection.contacts,
        price: selection.price
    })
})

module.exports = router