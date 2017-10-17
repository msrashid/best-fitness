const express = require('express');
const models = require('../models');


//const passport = require('../middlewares/authentication');

const Controller = {
	registerRouter() {
		const router = express.Router();

		router.get('/', this.index);
		router.put('/', this.create);

		return router;
	},
	index(req,res) {
		res.send('The secret stash.')
	},
	create(req, res) {
		res.send('Good putt.')
	},
};

module.exports = Controller.registerRouter();
