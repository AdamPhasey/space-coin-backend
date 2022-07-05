import express from 'express';
import spaceCoinRouter from './Routes/spaceCoinRouter.js';
import logger from 'morgan'
import cors from 'cors'


const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(cors())

app.use('/', spaceCoinRouter)


export default app;