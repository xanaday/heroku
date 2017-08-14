const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:1234@localhost/blog');

sequelize
  .authenticate()
  .then(() => {
      console.log('Successful database connection');
  })
  .catch(err => {
      console.log('Unable to establish database connection');
  });

module.exports = sequelize;