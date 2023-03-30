import express from "express";
import userRepository from "../repository/user-repository.js";

const router = express.Router();

// Get all users
router.get("/", async (req, res, next) => {
  try {
    let users = await userRepository.getAllUsers();
    return res.status(200).send(users);
  } catch (error) {
    return next({ status: 404, message: error });
  }
});

// Create a new user
router.post("/", async (req, res, next) => {
  try {
    const { body } = req;
    const newUser = await userRepository.createUser(body);
    return res.send(newUser);
  } catch (error) {
    return next({ status: 500, message: error });
  }
});

// delete a single user by id
router.delete("/users/:id", async (request, response) => {
  const userId = request.params.id;
  await deleteUserById(userId);
  response.status(200).json();
});

export default router;
