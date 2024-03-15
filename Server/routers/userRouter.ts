import express from 'express';
import { userController } from '../controller/userController';

const router = express.Router();

router.post("/user", userController.addUser);
router.post("/login", userController.loginUser);
router.get("/users", userController.getUsers);
router.put("/users/:email", userController.updateUser);
router.delete("/users/:email", userController.deleteUser);

export default router;
