import User from "../model/user-model.js";

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const createUser = async (pUser) => {
  const newUser = await User.create(pUser);
  return newUser;
};

async function deleteUserById(pUserId) {
  await User.destroy({
    where: {
      id: pUserId,
    },
  });
}

export default {
  getAllUsers,
  createUser,
  deleteUserById,
};
