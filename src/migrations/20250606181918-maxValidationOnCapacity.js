'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Airplanes',{
      fields : ['capacity'],
      type : "check",
      name: 'capacity_max_1000_check',
      where : {
        capacity : {
          [Sequelize.Op.lte] : 1000,
        }
      }
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeConstraint("Airplanes","capacity_max_1000_check");
  }
};
