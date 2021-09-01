const {Router} = require('express')
const Ankets = require('../models/Anket')
const router = Router()

router.get('/', async (req, res) => {
    const ankets = await Ankets.getAll()
    res.render('ankets', {

        title: 'Анкеты юзерсонов',
        isankets: true,
        ankets
    })
})

router.get('/:id', async(req, res) =>{
    const anket = await Ankets.getById(req.params.id)

    //На самом деле черт ногу сломит, если называть переменные похожим образом.
    //На начальных этапах лучше помечать их дополнительными постфиксими, _template _route _html
    res.render('anket', {
        //Чтобы сделать для страниц этого типа отдельный hbs шаблон - зададим параметр layout
        title: `Анкета пользователя ${anket.name} ${anket.lastName}`,
        layout: 'user_page',
        anket
    })
})


module.exports = router