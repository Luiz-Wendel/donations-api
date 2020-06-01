module.exports = (sequelize, DataTypes) => {
  const ItensTroca = sequelize.define(
    "ItensTroca", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_troca: {
        type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {tablename:"trocas"},
                key: 'id'
            },
            onUpdate: 'CASCADE', // whenever there is an user id alteration, udpate the foreign key too
            onDelete: 'CASCADE' // if an user gets deleted, delete publications of this user
      },
      id_item: {
        type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {tablename:"itens"},
                key: 'id'
            },
            onUpdate: 'CASCADE', // whenever there is an user id alteration, udpate the foreign key too
            onDelete: 'CASCADE' // if an user gets deleted, delete publications of this user
      }
    }, {
      timestamps: true,
      tablename: "itens_trocas"
    }
  );

  ItensTroca.associate = (models) => {
    ItensTroca.belongsTo(models.Troca, {
      foreignKey: 'id_troca',
      as: 'troca'
    })

    ItensTroca.belongsTo(models.Item, {
      foreignKey: 'id_item',
      as: 'item'
    })
  }

  return ItensTroca;
};
