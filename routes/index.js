import express from 'express'
import contactRouter from './contacts.js'

const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {res.render('index', { title: 'Express' });});
router.use('/contacts',contactRouter)

export default router;
