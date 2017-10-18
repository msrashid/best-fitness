module.exports = (sequelize, DataTypes) => {
	const Clients = sequelize.define('Clients', {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		password_hash: DataTypes.STRING,
	});

	return Clients;
}