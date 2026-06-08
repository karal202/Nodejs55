import { DataTypes, Model } from "sequelize";
import sequelize from "../common/squelize/connect.sequelize.js";

class restaurant extends Model {}

restaurant.init(
  {
    res_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    res_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "restaurant",
    tableName: "restaurant",
    timestamps: false,
  }
);

export default restaurant;
