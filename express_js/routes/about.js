const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('about', {
        title: 'О нашей великой и могущественной орагнизации',
        isabout: true
    })
})

module.exports = router

