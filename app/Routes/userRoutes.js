import express from 'express'
import userController from "../Controllers/UserController.js"
//Validator used for validating incoming data
//https://betterstack.com/community/guides/scaling-nodejs/express-validator-nodejs/
import {body} from 'express-validator';

const router = express.Router();

router.get('/', userController.get_all);

router.get('/:id', userController.get_user)
router.post('/', [
    /*
        isAlpha used for checking if the firstname is only letters
        Sources:
        https://gemini.google.com/share/f2bf73b00975
        https://express-validator.github.io/docs/api/validation-chain/
    */
    body('first_name').notEmpty().withMessage("Give the user a first_name").
    isAlpha('fr-FR', {ignore: [' ', '-']}).withMessage("Give a first_name without numbers"),
    body("name").notEmpty().withMessage('Give the user a name'),
    body('email').notEmpty().withMessage("Give an email")
    .isEmail().withMessage('The email value isn\'t a correct mail'),
    body('birthday').notEmpty().withMessage('give a birthday')
    .isDate().withMessage('The birthday field isn\'t a date'),
    body("about_me").notEmpty().withMessage("give an about_me value")
    .isString().isLength({min: 1, max: 255})
    .withMessage('Give an about_me that\s shorter than 255 characters')
], userController.create)

router.patch('/', [
    body('id').exists().withMessage("Send an id with this request").
    isNumeric().withMessage("The id must be a number"),
    body('email').optional().isEmail().withMessage('The email value isn\'t a correct mail'),
    body('birthday').optional().isDate().withMessage('The birthday field isn\'t a date'),
    body('about_me').optional().isString().isLength({min: 1, max: 255})
    .withMessage('Give an about_me that\s shorter than 255 characters')
],userController.change);
router.delete("/:id", userController.delete)
export default router;