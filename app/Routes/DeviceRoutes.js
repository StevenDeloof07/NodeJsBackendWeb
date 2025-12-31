import express from 'express'
import {body} from 'express-validator';

import deviceController from '../Controllers/DeviceController.js'

const router = express.Router()

router.get('/', deviceController.get_all)

router.post('/', [
    body('name').notEmpty().withMessage("Please give the new device a name."),
    body('release_date').notEmpty().withMessage('Please give a release_date')
    
    .isDate().withMessage('The release_date isn\'t a correct date'),
    body('description').notEmpty().withMessage('Please give a description for the device')
], deviceController.create)

router.get('/:id', deviceController.get_device)
router.patch('/', [
    body('id').exists().withMessage("Send an ID with this request")
    .isNumeric().withMessage('The ID must be a number'),

    body('release_date').optional().isDate().withMessage('The release_date isn\'t a correct date'),
], deviceController.update)

router.delete('/:id', deviceController.delete)
export default router;