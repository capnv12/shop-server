const express = require('express')
const router = express.Router()

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { create, categoryById, read, list, update, remove } = require('../controllers/category')
const { userById } = require('../controllers/user')

router.get('/categories', list)
router.get('/category/:categoryId', read)
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);


router.param('categoryId', categoryById)
router.param('userId', userById)

module.exports = router;