import { Response } from 'express';


export const error = (res: Response, error: String = 'Internal server error') => {
    res.send({error}).status(500)
}