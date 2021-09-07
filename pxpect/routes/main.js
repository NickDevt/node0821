const {Router} = require('express')
const router = Router()
const mModel = require('../models/mModel')

router.get('/', async (req, res) => {

    const jsona = await mModel.getAll()
    console.log(jsona)
    // console.dir(jsona)

    res.render('main_page', {
        title: 'Главная страница',
        ishome: true,
        jsona

    })
})
module.exports = router