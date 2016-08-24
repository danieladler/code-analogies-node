// dependencies
var express    = require('express'),
    exphbs     = require('express-handlebars'),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser'),
    app        = express(),
    routes     = require('./routes/index');

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

// routes
app.get('/',        routes.index);
app.get('/library', routes.library);
app.get('/new',     routes.new);
app.post('/create', routes.create);

app.listen(3000, function() {
  console.log("Express running on port 3000");
})
