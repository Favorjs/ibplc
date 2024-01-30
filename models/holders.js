const orm = require("../components/orm");

const { Sequelize, DataTypes } = require("sequelize");

const model = orm.define("holders", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  acc_no: { type: DataTypes.STRING },
  Name: { type: DataTypes.STRING },
  Holding: { type: DataTypes.STRING },
  issue: { type: DataTypes.STRING},
  amount: { type: DataTypes.STRING},
createdAt:{ type:DataTypes.DATE},
updatedAt:{ type:DataTypes.DATE}
});

module.exports = model;
model.sync();
