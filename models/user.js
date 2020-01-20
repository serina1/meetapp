"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.BLOB
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.meets);
  };
  return User;
};
