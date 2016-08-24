var Story   = require("../app/models/story"),
    _       = require('lodash');

exports.index = function(req, res) {
  Story.find().exec(function(err, stories) {
    var randomStory = _.sample(stories)
    if (err) { res.send(err) };
    res.render('index', {story: randomStory})
  });
},

exports.library = function(req, res) {
  Story.find().exec(function(err, stories) {
    if (err) { res.send(err) };
    res.render('library', {stories: stories});
  });
},

exports.new = function(req, res){
  res.render('new');
},

exports.create = function(req, res){
	var story = new Story();
	story.technology = req.body.technology;
	story.comparison = req.body.comparison;
	story.story      = req.body.story;
	story.save(function(err) {
		if (err) {
			res.send(err);
    } else {
      res.redirect('/');
    }
	});
};
