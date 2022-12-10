const router = require('express').Router()
const {get_data , post_user , delete_user , update_user , get_single_user} = require('../controller/users')
    
router.get('/' , get_data)
router.post('/' , post_user)
router.delete('/:id' , delete_user )
router.put('/:id' , update_user)
router.get('/:id' , get_single_user)
module.exports = router