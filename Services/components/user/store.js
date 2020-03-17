const Model = require("./model");

const AddUser = user => {
  const myUser = new Model(user);
  return myUser.save();
};

const GetListUser = async (filterUser) => {
  let filter = {};
  if (filterUser !== null) {
    filter = { name: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
};

module.exports = {
  add: AddUser,
  list: GetListUser,
};
