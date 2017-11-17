const express = require('express');
const models = require('../models');
const passport = require('../authentication/authentication');
const { User, Client, Appointment } = models;

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/profile');
});

router.get('/profile',
  passport.redirectIfNotLoggedIn('/register'),
  (req, res) => {
    res.send('The secret stash');
  }
);

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password_hash: req.body.password,
  }).then((user) => {
    Client.create({
      UserId: user.id,
    }).then((client) => {
    	req.login(user, () => {
    	//send json with message and user data
    	//catch failures
      	res.json({ user, client });
    	});
  	})
  })//.catch(//get errors, send back messages);
});

router.post('/trainer', (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password_hash: req.body.password,
  }).then((user) => {
    Trainer.create({
      UserId: user.id,
    }).then((trainer) => {
    	res.json({ user, trainer });
  	});
	})
});

router.get('/login',
  passport.redirectIfLoggedIn('/profile'),
  (req, res) => {
    res.render('login');
  }
);

router.post('/login', (req, res) => {
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
  })(req, res);
});

router.get('/clients', (req, res) => {
  Client.findAll({
  	include: [{
  		model: User,
  	}]
  }).then((allClients) => {
    res.json({ allClients });
  });
});

router.post('appointment', (req, res) => {
	Appointment.create({
		date: req.body.date,
		time: req.body.time,
		ClientId: req.body.clientId,
		TrainerId: req.body.trainerId,
	})
})

module.exports = router;
