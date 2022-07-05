import {Router} from 'express';
import {getSpaceCoin, getFaqData}  from '../models/spaceCoinModels.js';

const spaceCoinRouter = Router();

spaceCoinRouter.get('/v1/spaceCoinDummyData', function(req, res){
res.json(getSpaceCoin());
})


spaceCoinRouter.get('/v1/faqData', function(req, res) {
    res.json(getFaqData())
})

export {spaceCoinRouter}