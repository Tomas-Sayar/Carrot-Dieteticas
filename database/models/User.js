module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        username: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        adress: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        dateOfBirth: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(255)
        },
        typeOfUser_id: dataTypes.INTEGER,
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {

        User.belongsTo(models.TypeOfUser, {

            as: "typesOfUsers",

            foreignKey: "typeOfUser_id",

        })

    }

    return User;
};