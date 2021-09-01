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
module.exports = router