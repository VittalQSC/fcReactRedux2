var express = require('express');
var router = express.Router();
// var Article = require('./../models/ArticleSchema.js');
var Article = require('./../models/Article.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("articles/"); 
  Article.find({}, function (err, articles) {	
 	// console.log(articles)
 	// res.render('articles', {articles})
 	res.json(articles)
  });
  
  // res.json({success: true});	

});

router.post('/', function (req, res) {
	var body = req.body;
	console.log(body);


	var article = new Article(body);

	article.save(function (err) {
		if (err) {console.log(err);}
	});

	// res.send(req.body);
});

router.get('/remove/:id', function(req, res, next) {
  var id = req.params.id;
  
  Article.remove({_id: id}, function (err, article) {
    if (err) {console.log('ERR');}

    res.redirect('/articles');
  }); 

});

module.exports = router;
