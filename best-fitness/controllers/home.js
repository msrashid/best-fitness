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
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password_hash: req.body.password,
  }).then((user) => {
  	models.Client.create({
  		UserId: user.id,
  	})
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
