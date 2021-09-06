const {Router} = require('express')
const router = Router()
const mModel = require('../models/mModel')

router.get('/', async (req, res) => {

    jsona = await mModel.getAll()
    console.log(jsona)

    res.render('main_page', {
        title: 'Главная страница',
        ishome: true,
        jsona

    })
})
module.exports = router