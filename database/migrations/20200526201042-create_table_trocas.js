'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trocas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_doador: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'usuarios',
          },
          key: 'id'
        },
      },
      id_receptor: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'usuarios',
          },
          key: 'id'
        },
      },
      status: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trocas')
  }
}