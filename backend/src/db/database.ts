import { Sequelize } from 'sequelize';

// Connecting to database
export const sequelize = new Sequelize('world', 'root', 'marlyn2010', {
    logging: false,
    host: 'localhost',
    dialect: 'mysql'
});

try{
    sequelize.authenticate()
    console.log('Db is connected')
}catch(err){
    console.log(`Error: ${err}`)
}