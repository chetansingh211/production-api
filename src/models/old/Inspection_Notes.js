/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Inspection_Notes', {
		Note_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Inspection_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Note_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Note_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Note: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Topic: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Inspection_Notes'
	});
};
