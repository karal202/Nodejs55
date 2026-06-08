import { DataTypes, Model } from "sequelize";
import sequelize from "../common/squelize/connect.sequelize.js";
import Users from "./User.js";
import restaurant from "./restaurant.js"

class rate_res extends Model {}

rate_res.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    res_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    date_rate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "rate_res",
    tableName: "rate_res",
    timestamps: false,
  }
);
rate_res.belongsTo(Users, { foreignKey: "user_id" });
rate_res.belongsTo(restaurant, { foreignKey: "res_id" });

export default rate_res;
