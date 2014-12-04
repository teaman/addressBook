// create local variables
var config = require('./config'),
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', config.allowedDomains);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

// set the static folder
// add the body parser middleware
//app.use(express.static('../public'));
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// load the database config and models
app.set('models', require('./modules/database')(config.database));

// load the routes
app.use('/contact', require('./app/routes/contact').init(app, express));
app.use('/state', require('./app/routes/state').init(app, express));

// start listening on the server
app.listen(config.server.port);