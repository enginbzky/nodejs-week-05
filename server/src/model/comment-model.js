import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Comment = sequelize.define(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    isEdited: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "comments",
  }
);
export default Comment;
