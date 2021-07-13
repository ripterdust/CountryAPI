import { Router, } from 'express';
import { getCountryByName, mainPage } from '../controllers/countryControllers';

export const countryRouter = Router();

countryRouter 
    // Get
    .get('/', mainPage)
    .get('/name/:name?', getCountryByName)