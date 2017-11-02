const express = require('express');
const models = require('../models');
const passport = require('../authentication/authentication');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/profile');
});

router.get('/profile',
  passport.redirectIfNotLoggedIn('/register'),
  (req, res) => {
    res.send('The secret stash');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
  models.Client.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password_hash: req.body.password,
  }).then((user) => {
    req.login(user, () => {
      res.redirect('/profile');
    })
  })
});

router.get('/login',
  passport.redirectIfLoggedIn('/profile'),
  (req, res) => {
    res.render('login')
  }
)

router.post('/login', (req, res) => {
  passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/login',
  })(req, res);
})

router.get('/clients', (req,res) => {
	models.Client.findAll({
		}).then((allClients) => {
			res.json({allClients});
		});
})



module.exports = router;


/*
const Controller = {
	registerRouter() {
		const router = express.Router();

		router.get('/', this.index);
		router.post('/', this.create);
		router.get('/login', this.login);
		router.post('/login', this.loginPost);
		router.get('/profile', this.profile);
		router.get('/register', this.register);
		router.post('/register', this.registerPost);
		router.get('/clients', this.clients);

		return router;
	},
	index(req,res) {
  		console.log("We're in index.");
  		res.redirect('/profile');
	},
	create(req, res) {
		res.send('Good putt.')
	},
	login(req, res) {
		passport.redirectIfLoggedIn('/profile'),
  		(req, res) => {
    		res.render('login', { error: req.flash('error') });
  		}
	},
	loginPost(req, res) {
		passport.authenticate('local', {
      		successRedirect: '/profile',
      		failureRedirect: '/login',
  		})(req, res);
	},
	profile(req, res) {
		console.log("We're in profile.")
		passport.redirectIfNotLoggedIn('/register'),
  		(req, res) => {
    		res.send('The secret stash');
    	}
	},
	register(req, res) {
		console.log("We're in register.")
		res.render('register');
	},
	registerPost(req, res) {
		models.Client.create({
    		firstName: req.body.firstName,
    		lastName: req.body.lastName,
    		email: req.body.email,
    		password_hash: req.body.password,
  		}).then((user) => {
    		req.login(user, () => {
      			res.redirect('/profile');
    		})
  		})
	},
	clients(req, res) {
		models.Client.findAll({
		}).then((allClients) => {
			res.json({allClients});
		});
	},
};

module.exports = Controller.registerRouter();
*/