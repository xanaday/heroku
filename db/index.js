const Sequelize = require('sequelize');
var sequelize;

if (process.env.DATABASE_URL) {
    //the application is executed on heroku, using the postgres database
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres'
    })
} else {
    //the application is executed on the local machine, using mysql
    sequelize = new Sequelize('postgres://postgres:1234@localhost/blog')
}

sequelize
  .authenticate()
  .then(() => {
      console.log('Successful database connection');
  })
  .catch(err => {
      console.log('Unable to establish database connection');
  });

module.exports = sequelize;