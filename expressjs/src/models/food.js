import { DataTypes, Model } from "sequelize";
import sequelize from "../common/squelize/connect.sequelize.js";

class food extends Model {}

food.init(
  {
    food_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    food_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "food",
    tableName: "food",
    timestamps: false,
  }
);

export default food;
