module.exports = (sequelize, DataTypes) => {
  const Trainer = sequelize.define('Trainer', {
    specialty: DataTypes.STRING,
  });

  Trainer.associate = (models) => {
    models.Trainer.belongsTo(models.User);
    models.Trainer.hasMany(models.Appointment);
  };

  return Trainer;
};
