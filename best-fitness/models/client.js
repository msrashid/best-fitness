const bcrypt = require('bcrypt-nodejs')

module.exports = (sequelize, DataTypes) => {
	const Client = sequelize.define('Client', {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		password_hash: DataTypes.STRING,
		//never save plain text password
	});

	Client.associate = (models) => {
		models.Client.belongsTo(models.User);
	}

	Client.beforeCreate((user) =>
	    new sequelize.Promise((resolve) => {
	      bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
	        resolve(hashedPassword);
	      });
	    }).then((hashedPw) => {
	      user.password_hash = hashedPw;
	    })
    );

	return Client;
}