const router = require('express').Router()
const {get_data , post_user} = require('../controller/users')


router.get('/' , get_data)

router.post('/' , post_user)


module.exports = router