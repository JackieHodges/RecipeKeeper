const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model { }

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recipe_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recipe_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        servings: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ingredients: {
            type: DataTypes.JSON,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe'
    }
);

module.exports = Recipe;