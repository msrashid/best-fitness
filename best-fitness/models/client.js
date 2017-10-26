module.exports = (sequelize, DataTypes) => {
	const Client = sequelize.define('Client', {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		password_hash: DataTypes.STRING,
	});

	Client.hasMany(Appointment);

	return Client;
}