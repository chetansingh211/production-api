/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Surrender', {
		Surernder_ref_no: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_Certificate_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Surrender_Category: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		EMD_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Reference_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Token_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Token_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EMD_to_be_debited: {
			type: "MONEY",
			allowNull: true
		},
		EMD_Type: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Surrender'
	});
};
