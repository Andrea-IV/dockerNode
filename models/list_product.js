module.exports = function (sequelize, DataTypes) {
	const ListProduct = sequelize.define('List_Product', {
		id_product: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		id_menu: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		position: {
			type: DataTypes.BIGINT,
			allowNull: false
		}
	}, {
		paranoid: false,
		underscored: true,
		freezeTableName: true,
		timestamps: false
	});
	return ListProduct;
}
