import express from 'express'
import userController from "./Controllers/UserController.js"

const app = express();
const router = express.Router();

router.get('/users', userController.get_all);
router.get('/users/:id', userController.get_user)

export default router;