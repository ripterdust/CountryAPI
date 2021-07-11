import { Router } from 'express';
import { countryPagination, getCountryByName, mainPage } from '../controllers/countryControllers';

export const countryRouter = Router();

countryRouter 
    // Get
    .get('/', mainPage)
    .get('/name/:name?', getCountryByName)