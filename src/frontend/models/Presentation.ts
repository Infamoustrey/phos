import {remote} from 'electron'

const {Model, DataTypes} = remote.require('sequelize');

import {v4 as uuid} from 'uuid';

import {sequelize} from "../db";

export class PresentationModel extends Model {
    public id!: number;
    public name!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

PresentationModel.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuid()
    },
    name: {
        type: new DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'presentations',
    sequelize: sequelize,
});