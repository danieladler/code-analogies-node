var express  = require('express'),
    exphbs   = require('express-handlebars'),
    mongoose = require('mongoose');
    _        = require('lodash')

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('./public'));

mongoose.connect('mongodb://localhost:27017/analogies');
mongoose.connection.on('open', function() {
    console.log("Connected to Mongoose");
});

var Story = require("./app/models/story")

app.get('/', function(req, res){
  Story.find().exec(function(err, stories) {
    var randomStory = _.sample(stories)
    if (err) { res.send(err) };
    res.render('index', {story: randomStory})
  });
});

app.get('/library', function(req, res){
  Story.find().exec(function(err, stories) {
    if (err) { res.send(err) };
    res.render('library', {stories: stories});
  });
});

app.listen(3000, function() {
  console.log("Express running on port 3000");
})
