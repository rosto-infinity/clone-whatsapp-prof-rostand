import express from 'express';
import {auth} from '../controllers/userControllers.js';

const router = express.Router();

router.route('/').post(auth);


export default router;
