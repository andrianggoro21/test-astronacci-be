
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MembershipType extends Model {
    static associate(models) {
      // Define associations here
      MembershipType.hasMany(models.User, {
        foreignKey: 'membershipTypeId',
      });
    }
  }
  MembershipType.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      membershipType: {
        type: DataTypes.ENUM('A', 'B', 'C'),
        allowNull: false,
        unique: true, 
      },
      maxArticles: {
        type: DataTypes.INTEGER,
        allowNull: true, 
      },
      maxVideos: {
        type: DataTypes.INTEGER,
        allowNull: true, 
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'MembershipType',
      tableName: 'MembershipTypes', 
    }
  );
  return MembershipType;
};
