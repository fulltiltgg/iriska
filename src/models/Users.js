export default function defineUsers(sequelize, DataTypes) {
	return sequelize.define('Users', {
		userId: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
			languageCode: {
			type: DataTypes.STRING,
			defaultValue: 'ru',
		},
			balance: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
	}, {
		timestamps: false,
	});
};