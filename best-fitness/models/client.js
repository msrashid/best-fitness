const bcrypt = require('bcrypt-nodejs')

module.exports = (sequelize, DataTypes) => {
	const Clients = sequelize.define('Clients', {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		password_hash: DataTypes.STRING,
		//never save plain text password
	});

	Clients.beforeCreate((user) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      user.password_hash = hashedPw;
    })
  );

	return Clients;
}