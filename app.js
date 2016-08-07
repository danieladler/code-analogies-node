var express = require('express'),
    exphbs  = require('express-handlebars'),
    app     = express();
    Backbone = require('backbone'),


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var stories = []
app.locals.stories = stories;

var storyModel = Backbone.Model.extend({
  defaults: {
    user_id: 0,
    tech: "",
    comp: "",
    story: ""
  }
});

var story1 = new storyModel({
  tech: "Ruby",
  comp: "English",
  story: "It's easy to understand."
})

var story2 = new storyModel({
  tech: "JS lexical scoping",
  comp: "Continent -> Country -> City",
  story: "Two people in Paris & Berlin live in the same continent but different countries & cities"
})

stories.push(story1, story2);

app.get('/', function(req, res){
  res.render('index');
});

app.get('/other', function(req, res){
  res.render('other');
});

app.listen(3000, function() {
  console.log("Express running on port 3000");
})
