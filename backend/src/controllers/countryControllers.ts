import { Op } from 'sequelize';
import { Country } from '../models/country';
import { error } from '../responses/responses.ts';


// Query attributes
const queryAttributes = ['Code', 
'Name', 
'Continent', 
'Region', 
'SurfaceArea', 
'IndepYear', 
'Population',
'LifeExpectancy',
'GNP',
'GNPOld',
'LocalName',
'GovernmentForm',
'HeadOfState',
'Capital',
'Code2'
];

// Main page settings
export const mainPage = async (req, res) => {
    try{
        const country = await Country.findAll({
            attributes: queryAttributes
        });
        res.send([country]);
    }catch(err){
        error(res);
    }
}

// Get country
export const getCountryByName = async (req, res) => {
    const { name } = req.params;
    try{
        const country = await Country.findAll({
            attributes: queryAttributes,
            where: {
                name: {
                    [Op.eq] : name
                }
            }
        });

        res
            .send(country ? country : 'No country found')
            .status(200);


    }catch(err){
        error(res);
    }
}
