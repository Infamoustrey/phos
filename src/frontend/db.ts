import {remote} from 'electron';

const {Sequelize} = remote.require("sequelize");
const {resolve} = remote.require('path')

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: resolve(remote.app.getAppPath(), 'app.sqlite')
});



