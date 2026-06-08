import { DataTypes, Model } from "sequelize";
import sequelize from "../common/squelize/connect.sequelize.js";
import Users from "./User.js";
import restaurant from "./restaurant.js"  
class like_res extends Model {}

like_res.init(
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
    date_like: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "like_res",
    tableName: "like_res",
    timestamps: false,
  }
);
like_res.belongsTo(Users, { foreignKey: "user_id" });
like_res.belongsTo(restaurant, { foreignKey: "res_id" });

export default like_res;
