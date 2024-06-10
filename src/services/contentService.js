const { contentQuery } = require("../queries/contentQuery");
const { keepLoginQuery } = require("../queries/userQuery");


const contentService = async (id) => {
  try {
    const resUser = await keepLoginQuery(id);
    if (!resUser) {
      throw new Error("User not found");
    }
    const membershipType = resUser.MembershipType;
    const res = await contentQuery(membershipType);
    return res;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  contentService,
};