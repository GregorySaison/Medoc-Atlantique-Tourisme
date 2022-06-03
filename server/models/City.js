const { DataTypes, Model } = require("sequelize");
const sequelize = require("./../sequelize");

class City extends Model {}

City.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "cities",
  }
);

module.exports = City;
