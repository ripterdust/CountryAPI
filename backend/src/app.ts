import express, { Application, Request, Response } from 'express';
import { router } from './routers/cityRouter';
import { countryRouter } from './routers/countryRoutes';
const cors = require('cors');

// Initializatin express
export const app: Application = express();

// Settings
app.set('port', process.env.PORT || 8080); 

// Middlewares
app.use(express.urlencoded({extended:false}));
app.use(cors());


// Routes

// City routes
app.use('/', router);

// Coutnry routes
app.use('/country', countryRouter);
// Languages routes


app.use('*', (req: Request, res: Response) => {
    res.send({error: 'Page not found'}).status(200);
})