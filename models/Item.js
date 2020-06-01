module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descricao: {
        type: DataTypes.STRING
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      timestamps: true,
      tablename: "itens"
    }
  );

  Item.associate = (models) => {
    Item.hasMany(models.ItensTroca, {
      foreignKey: 'id_item',
      as: 'item'
    })
  }

  return Item;
};
