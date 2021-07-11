import { City } from '../models/city';
import { Op } from 'sequelize'
import { error } from '../responses/responses';


const queryAtrributes = ['ID', 'Name', 'CountryCode', 'District', 'Population'];

// Main page 
export const mainPage = async (req, res) => {

    // Getting cities
    const cities = await City.findAll({
        attributes: queryAtrributes,
        limit : 10, 
        where: {
            CountryCode: {
                [Op.eq] : 'GTM'
            }
        }
    })

    // Sending data
    res.send([cities]).status(200)
}


// Obtaining city with optional limit
export const pagination = async (req, res) => {

    let { number } = req.params;
    try{
        let limit = 10
        let page = number ? parseInt(number) : 1;

        if(page <= 0 || page.typeOf != Number){
            page = 1
        }
        // Getting data
        const cities = await City.findAll({
            attributes: queryAtrributes,
            limit,
            where: {
                ID: {
                    [Op.gte] : page == 1 ? 1 : (page -1 <= 0 ? 1 : (page -1)) * 10,
                    [Op.lt] : page * 10
                }
            }
        });
        res.send(cities).status(200);
    }catch(err){
        error(res, 'Invalid page number');
    }
}


// Obtaining city

export const getCity = async (req, res) => {
    const param = req.params.id;
    try{
        const id = param ? parseInt(param) : 1;      
        const city = await City.findAll({
            attributes: queryAtrributes,
            where: {
                ID: {
                    [Op.eq] : id
                }
            }
        });
        res.send(city).status(200);
    }catch(err){
        error(res);
    }
}


// Getting cities by country code
export const getCitiesByCountryCode = async (req, res) => {
    try{
        const { code } = req.params;

        const cities = await City.findAll({
            attributes: queryAtrributes,
            where: {
                CountryCode:{
                    [Op.eq] : code
                }
            }

        });
        
        if(cities.length <= 0){
            error(res, 'No cities found');
        }else{
            res.send(cities);
        }

    }catch(err){
        error(res)
    }
}