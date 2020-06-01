module.exports = (sequelize, DataTypes) => {
  const Troca = sequelize.define(
    "Troca", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_doador: {
        type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {tablename:"usuarios"},
                key: 'id'
            },
            onUpdate: 'CASCADE', // whenever there is an user id alteration, udpate the foreign key too
            onDelete: 'CASCADE' // if an user gets deleted, delete publications of this user
      },
      id_receptor: {
        type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {tablename:"usuarios"},
                key: 'id'
            },
            onUpdate: 'CASCADE', // whenever there is an user id alteration, udpate the foreign key too
            onDelete: 'CASCADE' // if an user gets deleted, delete publications of this user
      },
      status: {
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
      tablename: "trocas"
    }
  );

  Troca.associate = (models) => {
    Troca.belongsTo(models.Usuario, {
      foreignKey: 'id_doador',
      as: 'doador'
    })

    Troca.belongsTo(models.Usuario, {
      foreignKey: 'id_receptor',
      as: 'receptor'
    })

    Troca.hasMany(models.ItensTroca, {
      foreignKey: 'id_troca',
      as: 'troca'
    })
  }

  return Troca;
};
