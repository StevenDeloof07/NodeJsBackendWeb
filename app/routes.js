import express from 'express'
import userController from "./Controllers/UserController.js"
//Validator used for validating incoming data
//https://betterstack.com/community/guides/scaling-nodejs/express-validator-nodejs/
import {body} from 'express-validator';

const router = express.Router();

router.get('/users', userController.get_all);
router.get('/users/:id', userController.get_user)
router.post('/users', [
    body("name").notEmpty().withMessage('Geef de gebruikersnaam mee'),
    body('email').notEmpty().withMessage("Geef een mail mee")
    .isEmail().withMessage('Mail adres is fout ingevuld'),
    body('birthday').notEmpty().withMessage('Geef een verjaardag mee')
    .isDate().withMessage('Verjaardag moet een datum zijn'),
    body("about_me").notEmpty().withMessage("geef een beschrijving mee")
    .isString().isLength({min: 1, max: 255})
    .withMessage('Geef een geldige beschrijving mee')
], userController.create)

router.delete("/users/:id", userController.delete)
export default router;