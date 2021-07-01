const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model { }

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tag_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'recipe',
                key: 'id',
                unique: false
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag'
    }
);

module.exports = Tag;