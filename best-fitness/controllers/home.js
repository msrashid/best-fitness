const express = require('express');
const models = require('../models');


//const passport = require('../middlewares/authentication');

const Controller = {
	registerRouter() {
		const router = express.Router();

		router.get('/', this.index);
		router.put('/', this.create);
		router.get('/register', this.register);
		router.post('/register', this.registerPost);
		router.get('/clients', this.clients);

		return router;
	},
	index(req,res) {
		res.send('The secret stash.')
	},
	create(req, res) {
		res.send('Good putt.')
	},
	register(req, res) {
		res.render('register');
	},
	registerPost(req, res) {
		models.Clients.create({
		    firstName: req.body.firstName,
		    lastName: req.body.lastName,
		    email: req.body.email,
		    password_hash: req.body.password,
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
