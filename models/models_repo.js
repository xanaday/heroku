const Article = require('./articles');

// Article.create({
//     title: 'yurio',
//     image: 'http://img05.deviantart.net/984e/i/2016/030/a/9/free_stock__2_months_old_hunter_by_oniendra_stocks-d926v7z.jpg',
//     description: 'text text text',
//     body: 'other text'
//   }).then(res => {
//     return Article.findAll();
//   }).then(function(rows){
//       console.log(`number of rows: ${rows.length}`)
//   });
      
  const get = function(callback) {
    Article.findAll().then(articles => {
      callback(null, articles);
    }, err => {
      callback(err);
    });
  }

  module.exports.get = get;