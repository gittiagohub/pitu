"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// const sequelize = new Sequelize('postgres://postgres:masterkey:5432/pitu')
const sequelize = new sequelize_1.Sequelize('pitu', 'postgres', 'masterkey', { host: 'localhost', dialect: 'postgres' });
exports.default = sequelize;
