// dependencies for webpack
var url = require('url');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

// dependencies for express server
var express    = require('express'),
    exphbs     = require('express-handlebars'),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser'),
    app        = express(),
    routes     = require('./routes/index');

new WebpackDevServer(webpack(config), {
  contentBase: config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  quiet: false,
  // express app configuration
  setup: function(app) {
    // view engine
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // db-related
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    mongoose.connect('mongodb://localhost:27017/analogies');
    mongoose.connection.on('open', function() {
        console.log("Connected to Mongoose");
    });
    // routes
    app.get('/',            routes.index);
    app.get('/library',     routes.library);
    app.get('/new',         routes.new);
    app.post('/create',     routes.create);
    app.get('/stories/:id', routes.story);
  }
}).listen(3000, function(err) {
  console.log("Express running on port 3000");
  if (err) {
    console.log(err);
  }
});
