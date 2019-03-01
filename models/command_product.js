module.exports = function(sequelize, DataTypes){
	const ProductCommand = sequelize.define("ProductCommand",{
		id:{
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		id_product: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		id_command: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		id_menu: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		underscored: true,
		timestamps: false,
		freezeTableName: true
	});
	return ProductCommand;
}
