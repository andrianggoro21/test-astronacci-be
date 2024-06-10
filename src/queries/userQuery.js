const { User } = require("../models");
const { MembershipType } = require("../models");
const bycrypt = require("bcrypt");

const findUserQuery = async (email) => {
  try {
    const res = await User.findOne({
      where: {
        email: email,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

const registerUserQuery = async (username, email, password) => {
  try {
    const res = await User.create({
      username: username,
      email: email,
      password: password,
      membershipTypeId: 1,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

const keepLoginQuery = async (id) => {
  try {
    const res = await User.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
      include: {
        model: MembershipType,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

const registerGoogleQuery = async (email, username) => {
  // Membuat transaksi Sequelize
  const t = await User.sequelize.transaction();
  try {
    // Membuat user baru dalam transaksi
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(email, salt);
    const res = await User.create(
      {
        username: username,
        email: email,
        password: hashedPassword,
        membershipTypeId: 1,
      },
      { transaction: t }
    );

    // Commit transaksi jika berhasil
    await t.commit();

    // Mengembalikan hasil pembuatan user
    return res;
  } catch (err) {
    // Rollback transaksi jika terjadi error
    await t.rollback();
    throw err;
  }
};

const registerFacebookQuery = async (email, username) => {
  // Membuat transaksi Sequelize
  const t = await User.sequelize.transaction();
  try {
    // Membuat user baru dalam transaksi
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(email, salt);
    const res = await User.create(
      {
        username: username,
        email: email,
        password: hashedPassword,
        membershipTypeId: 1,
      },
      { transaction: t }
    );

    // Commit transaksi jika berhasil
    await t.commit();

    // Mengembalikan hasil pembuatan user
    return res;
  } catch (err) {
    // Rollback transaksi jika terjadi error
    await t.rollback();
    throw err;
  }
};

module.exports = {
  registerUserQuery,
  findUserQuery,
  keepLoginQuery,
  registerGoogleQuery,
  registerFacebookQuery,
};
