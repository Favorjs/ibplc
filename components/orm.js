const appConst = require("./active_dir");
// const appConst = require("../users");
//sequelize module

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  appConst.DB_NAME,
  appConst.DB_USERNAME,
  appConst.DB_PASSWORD,
  {
    dialect: appConst.DB_TYPE,
    host: "localhost",
    port: appConst.DB_PORT,
    define: {
      freezeTableName: true,
    },

    query: { raw: true },
    dialectOptions: {
      options: { encrypt: false },
    },
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
