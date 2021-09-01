const {Router} = require('express')
const router = Router()
const Anket = require('../models/Anket')

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить новую анкету',
        isadd:true
    })
})


router.post('/', async (req, res) => {
    console.log(req.body)

    const course = new Anket(req.body.firstName, req.body.secondName, req.body.email, req.body.img)
    await course.save()

    res.redirect('/ankets')
})


module.exports = router