const { Sequelize } = require("sequelize");


//PUT PASSWORD BACK IN HERE WHEN YOU START WORKING AGAIN
const sequelize = new Sequelize('postgres', 'postgres', '!Jawn123!', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sq: sequelize, testDbConnection };