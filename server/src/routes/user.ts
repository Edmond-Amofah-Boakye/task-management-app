import * as UserController from '../controllers/user'
import express from 'express'

const router = express.Router()

router.route('/')
    .post(UserController.createUser)



router.route('/:id')
    .get(UserController.getUser)
    

export default  router