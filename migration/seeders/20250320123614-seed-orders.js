"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Fetch customer IDs
    const customers = await queryInterface.sequelize.query(
      `SELECT id FROM Customers;`
    );
    const customerRows = customers[0];
    await queryInterface.bulkInsert("Orders", [
      {
        orderDate: new Date(),
        status: "Pending",
        customerId: customerRows[0].id, // Assign order to first customer
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderDate: new Date(),
        status: "Shipped",
        customerId: customerRows[1].id, // Assign order to second customer
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
