'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Airplanes','maintainanceDue',{
      type : Sequelize.DATE,
      defaultValue : Sequelize.NOW
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Airplanes','maintainanceDue');
  }
};
