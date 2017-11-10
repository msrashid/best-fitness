module.exports = (sequelize, DataTypes) => {
	const Client = sequelize.define('Client', {
		dateofBirth: DataTypes.DATEONLY,
		lastPackage: DataTypes.INTEGER,
		sessionsLeft: DataTypes.INTEGER,
	});

	Client.associate = (models) => {
		models.Client.belongsTo(models.User);
		models.Client.hasMany(models.Appointment);
	}

	return Client;
}