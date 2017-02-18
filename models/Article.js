var mongoose = require('mongoose');
var articleSchema = require('./ArticleSchema.js');

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
