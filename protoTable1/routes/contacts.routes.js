const Router = require('express')
const router = new Router()
const contactsModel = require('../models/contacts.model')
// const {json} = require("express");

// router.use(json)
router.get('/', contactsModel.getAll)

// router.post('/:id', contacts.getSome)

router.post('/add', contactsModel.uploadData)


module.exports = router