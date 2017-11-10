module.exports = (sequelize, DataTypes) => {
	const Appointment = sequelize.define('Appointment', {
		date: DataTypes.DATEONLY,
		time: DataTypes.TIME,
	});

	Appointment.associate = (models) => {
		models.Appointment.belongsTo(models.Client);
		models.Appointment.belongsTo(models.Trainer);
	}

	return Appointment;
}