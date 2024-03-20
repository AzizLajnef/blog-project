const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Followers = sequelize.define('Followers', {
        followerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        followedId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Followers;
};