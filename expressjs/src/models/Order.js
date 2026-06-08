import { DataTypes, Model } from "sequelize";
import sequelize from "../common/squelize/connect.sequelize.js";

class orders extends Model {}

orders.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    food_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    code: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
    },
    arr_sub_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "orders",
    tableName: "orders",
    timestamps: false,
  }
);

export default orders;
