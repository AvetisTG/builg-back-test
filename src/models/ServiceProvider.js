'use strict';

module.exports = (sequelize, DataTypes) => {

	const ServiceProvider = sequelize.define('ServiceProvider', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		latitude: {
			type: DataTypes.DECIMAL(10, 8),
			allowNull: false,
		},
		longitude: {
			type: DataTypes.DECIMAL(11, 8),
			allowNull: false,
		},
	});

	ServiceProvider.findByDistance = (latitude, longitude) => {
		return ServiceProvider.findAll({
			attributes: [
				'id',
				'name',
				'latitude',
				'longitude',
				[sequelize.literal(`6371 * 2 * ASIN(SQRT(POWER(SIN((${latitude} - latitude) * PI() / 180 / 2), 2) + COS(${latitude} * PI() / 180) * COS(latitude * PI() / 180) * POWER(SIN((${longitude} - longitude) * PI() / 180 / 2), 2)))`), 'distance']
			],
			order: [
				[sequelize.literal('distance'), 'ASC']
			]
		});
	};

	return ServiceProvider;

};
