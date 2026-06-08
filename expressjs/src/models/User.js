import { DataTypes, Model } from "sequelize";
import sequelize from "../common/squelize/connect.sequelize.js";

class Users extends Model {}

Users.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Users",
    tableName: "Users",
    timestamps: false,
  }
);

export default Users;
