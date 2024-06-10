"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "MembershipTypes",
      [
        {
          membershipType: "A",
          maxArticles: 3,
          maxVideos: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          membershipType: "B",
          maxArticles: 10,
          maxVideos: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          membershipType: "C",
          maxArticles: null,
          maxVideos: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("MembershipTypes", null, {});
  },
};
