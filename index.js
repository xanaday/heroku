const express = require('express');
const parser = require('body-parser');
const expressValidator = require('express-validator');
const Sequelize = require('sequelize');
const sequelize = require('./db/index');

const articlesController = require('./controllers/articles');

const app = express();

const port = process.env.PORT || 8080;

app.use(parser.urlencoded({ extended: false}));
app.use(parser.json());

app.use(expressValidator());
app.use(express.static('public'));

app.set('view engine', 'ejs');

//homepage
app.get('/', articlesController.get);

const server = app.listen(port, () => {
    console.log(`started port ${port}`)
});

const Article = require('./models/articles');

// sequelize.sync({force: true}).then(function(){

// Article.create({
//     title: "yurio",
//     description: "text text text",
//     body: "other text"
//   })
// Article.create({
//     title: "otabek",
//     description: "text1 text1 text1",
//     body: "other other text"
// })
// }).then(function(){
//      return Article.findAll();
// }).then(function(rows){
//     console.log(`${rows.length}`);

//     if(rows.length > 0){
//         for(i = 0; i < rows.length; i++){
//             var blog = rows[i].dataValues;
//             console.log(`Row ${i} Title: ${blog.title}`);
//             console.log(`Row ${i} Description: ${blog.description}`);
//             console.log(`Row ${i} Body: ${blog.body}`);
//         }
//     }
// }).catch(function(err){
//     console.error(`${err}`)
// });
