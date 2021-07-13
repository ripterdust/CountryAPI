import { Router } from 'express';
import {  getCitiesByCountryCode, getCity, mainPage, pagination } from '../controllers/cityController';

// Inicializating router
export const router = Router();

// Routes
router
    // Get
    .get('/', mainPage)
    .get('/city/', (req, res) => {
        res.send('city')
    })
    .get('/page/:number?', pagination)
    .get('/city/:id', getCity)
    .get('/cities/:code', getCitiesByCountryCode)


