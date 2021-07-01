const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class WeeklyMeal extends Model { }

WeeklyMeal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            }
        },
        sunday_meal: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'recipe',
                key: 'id',
                unique: false
            }
        },
        monday_meal: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'recipe',
                key: 'id',
                unique: false
            }
        },
        tuesday_meal: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'recipe',
                key: 'id',
                unique: false
            }
        },
        wednesday_meal: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'recipe',
                key: 'id',
                unique: false
            }
        },
        thursday_meal: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'recipe',
                key: 'id',
                unique: false
            }
        },
        friday_meal: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'recipe',
                key: 'id',
                unique: false
            }
        },
        saturday_meal: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
        modelName: 'weeklyMeal'
    }
);

module.exports = WeeklyMeal;