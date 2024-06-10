"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Videos",
      [
        {
          title: "MANCHESTER UNITED JUARA FA CUP BERKAT KECERDASAN TEN HAG!",
          url: "https://youtu.be/hIiurU6HbBo?si=Qr4QDSDuG7CeYISi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terlanjur Ketipu Ratusan Juta Ganti Gelandang Sebelum Percaya Bakat Mainoo - Matangnya Kobbie Mainoo",
          url: "https://youtu.be/6bsNfP1GPGI?si=G3FC6otfNCKC27-D",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Manchester United Road To Emirates FA Cup Final | Emirates FA Cup 2023-24",
          url: "https://youtu.be/sDuL8gwzm6c?si=hC7LiJLkp4zMyaTj",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Belgium 3-0 Luxembourg | A #EURO2024 send-off in style | #REDDEVILS | Friendly",
          url: "https://youtu.be/FCS0Ktpfj1E?si=HRREALkALdPnFTCy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mexico vs. Brazil Highlights | International Friendly",
          url: "https://youtu.be/d89n5rTI-q4?si=4ZjF1IhC_22gDlxo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terlanjur Ketipu Ratusan Juta Ganti Gelandang Sebelum Percaya Bakat Mainoo - Matangnya Kobbie Mainoo",
          url: "https://youtu.be/sDuL8gwzm6c?si=hC7LiJLkp4zMyaTj",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terlanjur Ketipu Ratusan Juta Ganti Gelandang Sebelum Percaya Bakat Mainoo - Matangnya Kobbie Mainoo",
          url: "https://youtu.be/sDuL8gwzm6c?si=hC7LiJLkp4zMyaTj",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terlanjur Ketipu Ratusan Juta Ganti Gelandang Sebelum Percaya Bakat Mainoo - Matangnya Kobbie Mainoo",
          url: "https://youtu.be/sDuL8gwzm6c?si=hC7LiJLkp4zMyaTj",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terlanjur Ketipu Ratusan Juta Ganti Gelandang Sebelum Percaya Bakat Mainoo - Matangnya Kobbie Mainoo",
          url: "https://youtu.be/sDuL8gwzm6c?si=hC7LiJLkp4zMyaTj",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terlanjur Ketipu Ratusan Juta Ganti Gelandang Sebelum Percaya Bakat Mainoo - Matangnya Kobbie Mainoo",
          url: "https://youtu.be/sDuL8gwzm6c?si=hC7LiJLkp4zMyaTj",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terlanjur Ketipu Ratusan Juta Ganti Gelandang Sebelum Percaya Bakat Mainoo - Matangnya Kobbie Mainoo",
          url: "https://youtu.be/sDuL8gwzm6c?si=hC7LiJLkp4zMyaTj",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terlanjur Ketipu Ratusan Juta Ganti Gelandang Sebelum Percaya Bakat Mainoo - Matangnya Kobbie Mainoo",
          url: "https://youtu.be/sDuL8gwzm6c?si=hC7LiJLkp4zMyaTj",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terlanjur Ketipu Ratusan Juta Ganti Gelandang Sebelum Percaya Bakat Mainoo - Matangnya Kobbie Mainoo",
          url: "https://youtu.be/sDuL8gwzm6c?si=hC7LiJLkp4zMyaTj",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terlanjur Ketipu Ratusan Juta Ganti Gelandang Sebelum Percaya Bakat Mainoo - Matangnya Kobbie Mainoo",
          url: "https://youtu.be/sDuL8gwzm6c?si=hC7LiJLkp4zMyaTj",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Videos", null, {});
  },
};
