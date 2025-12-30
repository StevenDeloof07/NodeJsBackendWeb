import express from 'express'
import userController from "./Controllers/UserController.js"
//Validator used for validating incoming data
//https://betterstack.com/community/guides/scaling-nodejs/express-validator-nodejs/
import {body} from 'express-validator';

const router = express.Router();

router.get('/users', userController.get_all);
router.get('/users/:id', userController.get_user)
router.post('/users', [
    body("name").notEmpty().withMessage('Give a username'),
    body('email').notEmpty().withMessage("Give an email")
    .isEmail().withMessage('email isn\'t a correct mail'),
    body('birthday').notEmpty().withMessage('give a birthday')
    .isDate().withMessage('The birthday field must be a date'),
    body("about_me").notEmpty().withMessage("give an about_me value")
    .isString().isLength({min: 1, max: 255})
    .withMessage('Give an about_me that\s shorter than 255 characters')
], userController.create)

router.delete("/users/:id", userController.delete)
export default router;