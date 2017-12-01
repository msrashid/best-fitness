const bodyParser = require('body-parser');
const express = require('express');
const models = require('./models');
const http = require('http');


const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const expressSession = require('express-session');
const passport = require('./authentication/authentication.js');

app.use(expressSession(({ secret: 'keyboard cat'})));
app.use(passport.initialize());
app.use(passport.session());


const server = http.createServer(app);



// Uncomment the following if you want to serve up static assets.
// (You must create the public folder)
/*
app.use(express.static('./public'));
*/

// Uncomment the following if you want to use handlebars
// on the backend. (You must create the views folder)

const express_handlebars = require('express-handlebars');
app.engine('handlebars', express_handlebars({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);




// Load up all of the controllers
const controllers = require('./controllers');
app.use(controllers)


// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.
models.sequelize.sync({force: false})
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`)
    });
});