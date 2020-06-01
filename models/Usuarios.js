module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario", {
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false
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
      tablename: "usuarios"
    }
  );

  Usuario.associate = (models) => {
    Usuario.hasMany(models.Troca, {
      foreignKey: 'id_doador',
      as: 'doador'
    })

    Usuario.hasMany(models.Troca, {
      foreignKey: 'id_receptor',
      as: 'receptor'
    })
  }

  return Usuario;
};
