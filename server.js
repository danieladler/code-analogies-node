// dependencies
var express    = require('express'),
    exphbs     = require('express-handlebars'),
    mongoose   = require('mongoose'),
    _          = require('lodash'),
    bodyParser = require('body-parser'),
    app        = express();

// modules
var Story  = require("./app/models/story");

// view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('./public'));

// db-related
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/analogies');
mongoose.connection.on('open', function() {
    console.log("Connected to Mongoose");
});

var router = express.Router();
app.use(router);

router.get('/', function(req, res){
  Story.find().exec(function(err, stories) {
    var randomStory = _.sample(stories)
    if (err) { res.send(err) };
    res.render('index', {story: randomStory})
  });
});

router.get('/library', function(req, res){
  Story.find().exec(function(err, stories) {
    if (err) { res.send(err) };
    res.render('library', {stories: stories});
  });
});

router.get('/new', function(req, res){
  res.render('new');
});

router.post('/create', function(req, res){
		var story = new Story();
		story.technology = req.body.technology;
		story.comparison = req.body.comparison;
		story.story      = req.body.story;
		story.save(function(err) {
			if (err) {
				res.send(err);
      } else {
			  res.json({ message: 'Story created!' });
      }
		});
});

app.listen(3000, function() {
  console.log("Express running on port 3000");
})
