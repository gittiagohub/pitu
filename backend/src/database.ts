import { Sequelize } from 'sequelize'

// const sequelize = new Sequelize('postgres://postgres:masterkey:5432/pitu')

const sequelize = new Sequelize('pitu', 'postgres', 'masterkey',
    { host: 'localhost', dialect: 'postgres' })



export default sequelize


