import "dotenv/config.js"   //configuracion del archivo .env
import express from "express"
import path from "path" 
import cookieParser from "cookie-parser" 
import logger from "morgan" 
import { __dirname } from "./utils.js"
import indexRouter from './routes/index.js'                             
                                            
import cors from 'cors'

// import {errorHandler, errorNotFound} from './middlewares/error.js'

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter);

// app.use(errorNotFound)
// app.use(errorHandler)

export default app
