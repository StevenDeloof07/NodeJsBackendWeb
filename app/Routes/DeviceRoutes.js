import express from 'express'
import {body} from 'express-validator';

import deviceController from '../Controllers/DeviceController.js'

const router = express.Router()

router.get('/', deviceController.get_all)

router.post('/', [
    body('name').notEmpty().withMessage("Please give the new device a name."),
    body('release_data').notEmpty().withMessage('Please give a release_date')
    .isDate().withMessage('The release_data isn\'t a correct date'),
    body('description').notEmpty().withMessage('Please give a description for the device')
], deviceController.create)

router.get('/:id', deviceController.get_device)

export default router;