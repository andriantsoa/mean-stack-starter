var express = require('express');
var apiRouter = express.Router();
var Article = require('../models/Article');
var articlesController = require('../controllers/articles-controller'); // bring in controllers

apiRouter.param('article_id', articlesController.articleById);

// configure router middleware
apiRouter.route('/articles')

  .post(articlesController.create)

  .get(articlesController.index);

apiRouter.route('/articles/:article_id')

  .get(articlesController.show)

  .patch(articlesController.update)

  .delete(articlesController.destroy);

module.exports = apiRouter;