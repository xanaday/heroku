const util = require('util');
const articles = require('../models/models_repo');
const defaultMessage = 'Articles not found';
const defaultTitle = `blog blog blog`;
console.log(articles)
module.exports.notFound = function(request, response){
    return response.render('404', {message: defaultMessage});
}

// //Post article
// module.exports.post = function(request, response){
//     request
//         .checkBody('title', 'Invalid title')
//         .notEmpty()
//     request.checkBody('url', 'Invalid URL')
//         .notEmpty()
//     request.checkBody('body', 'Invalid article')
//         .notEmpty()
//     request.getValidation().then(function(result){
//         if(!result.isEmpty()){
//             return response.render('new', {title: 'Create new article', errors: result.array()});
//         }
//         request.sanitizeBody('title').escape();
//         request.sanitizeBody('url').escape();
//         request.sanitizeParams('body').escape();

//         const input = {
//             title: request.body.title,
//             url: request.body.url,
//             body: request.body.body
//         }
//         articles.save(input, (err) => {
//             if(err){
//                 return response.render('new', {
//                     title: 'Create new article',
//                     errors: [{msg: err.message}]
//                 })
//             response.redirect('/');
//             }
//         })
//     });
// }

// //Delete article
// module.exports.delete = function(request, response, callback){
//     const id = request.params.id;

//     articles.deleteArticleById(parseInt(id), function(err, list){
//         if(err) {
//             const message = err.errno = -2 ? defaultMessage : 'Call back later';
//             return response.render('404', {message: message});
//         }
//         callback();
//     });
// }

//Get article
module.exports.get = function(request, response) {
	articles.get(function(err, list) {
		if (err) {
			const message = err.errno === -2 ? defaultMessage : 'Try again later';
			return response.render('404', {message: message});
        }
		response.render('index', {articles: list, title: defaultTitle});
	})
};