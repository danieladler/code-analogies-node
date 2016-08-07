var express = require('express'),
    exphbs  = require('express-handlebars'),
    app     = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000, function() {
  console.log("Express running on port 3000");
})
