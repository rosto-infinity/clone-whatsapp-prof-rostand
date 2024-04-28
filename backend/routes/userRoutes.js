import express from 'express';
import {auth} from '../controllers/userControllers.js';

const router = express.Router();

//pour axios
router.route('/').post(auth);


export default router;
