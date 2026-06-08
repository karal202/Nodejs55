import { DataTypes, Model } from "sequelize";
import sequelize from "../common/squelize/connect.sequelize.js";

class sub_food extends Model {}

sub_food.init(
  {
    sub_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sub_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    sub_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "sub_food",
    tableName: "sub_food",
    timestamps: false,
  }
);

export default sub_food;
