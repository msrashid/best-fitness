const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {type: DataTypes.STRING, unique: true},
    password_hash: DataTypes.STRING,
  });
//make sure email does not already exist
  User.associate = (models) => {
    models.User.hasOne(models.Client);
    models.User.hasOne(models.Trainer);
  };

  User.beforeCreate((user) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      user.password_hash = hashedPw;
    }));

  return User;
};
