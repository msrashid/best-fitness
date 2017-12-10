const express = require('express');
const models = require('../models');
const passport = require('../authentication/authentication');

const {
  User, Client, Trainer, Appointment,
} = models;

const router = express.Router();


router.post('/register', (req, res) => {
  console.log('The first name from body is:');
  console.log(req.body.firstName);
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
      // send json with message and user data
      // catch failures
      res.json({ user, client });
      });
  	})
  }).catch((error) => {
    console.log('You done messed up.');
    res.json({ message: 'That email address is already in use.' });
  });
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

router.post('/login', passport.authenticate('local'), (req, res) => {
  User.findOne({
    where: [{
      email: req.body.email,
    }],
    include: [{
      model: Client,
    }],
  }).then((user) => {
    res.json({ user });
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/clients', (req, res) => {
  Client.findAll({
  	include: [{
  		model: User,
  	}],
  }).then((allClients) => {
    res.json({ allClients });
  });
});

router.get('/trainers', (req, res) => {
  Trainer.findAll({
    include: [{
      model: User,
    }]
  }).then((allTrainers) => {
    res.json({ allTrainers });
  });
});

router.get('/myAppointments/:ClientId', (req, res) => {
  Appointment.findAll({
    include: [{
      model: Trainer,
      include: [{
        model: User,
        attributes: ['firstName', 'lastName'],
      }]
    }],
    where: [{
      ClientId: req.params.ClientId,
    }],
  }).then((allAppointments) => {
    res.json({ allAppointments });
  });
});

router.post('/appointment/:ClientId', (req, res) => {
	Appointment.create({
		date: req.body.date,
		time: req.body.time,
		ClientId: req.params.ClientId,
		TrainerId: req.body.trainerId,
	}).then((appointment) => {
    res.json({ appointment });
  });
});

router.post('/appointmentsByDate', (req, res) => {
  Appointment.findAll({
    where: [{
      date: req.body.date,
    }],
    include: [
      {
        model: Trainer,
        include: [{
          model: User,
          attributes: ['firstName', 'lastName'],
        }],
      },
      {
        model: Client,
        include: [{
            model: User,
            attributes: ['firstName', 'lastName', 'email', 'createdAt'],
        }],
      },
    ],
  }).then((allAppointments) => {
    res.json({ allAppointments });
  });
});

module.exports = router;
