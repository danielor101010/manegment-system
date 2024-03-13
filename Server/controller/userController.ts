import { Request, Response } from "express";
import { User } from "../interfaces/userInterfaces/userInterface";
import { UserBusinessLogic } from "../userServices/buisnessLogic";

const businessLogic = new UserBusinessLogic();

export const userController = {
    addUser: async (req: Request, res: Response): Promise<void> => {
        const user: User = req.body;
        user.isAdmin = false;
        try {
            const token: string = await businessLogic.registerUser(user);
            res.status(201).send({ token });
        } catch (error: any) {
            res.status(error.status || 500).send({ error: error.message || "Failed to add user" });
        }
    },

    loginUser: async (req: Request, res: Response): Promise<void> => {
        const { email, password } = req.body;
        try {
            const token: string | null = await businessLogic.loginUser(email, password);
            if (token) {
                res.status(200).send({ token });
            } else {
                res.status(401).send({ error: "Invalid email or password" });
            }
        } catch (error: any) {
            res.status(error.status || 500).send({ error: error.message || "Failed to login" });
        }
    },

    getUsers: async (req: Request, res: Response): Promise<void> => {
        try {            
            const users: User[] = await businessLogic.getAllUsers();
            res.status(200).send(users);
        } catch (error: any) {
            res.status(error.status || 500).send({ error: "Failed to fetch users" });
        }
    },

    updateUser: async (req: Request, res: Response): Promise<void> => {
        const { email } = req.params;
        const updatedUser: User = req.body;
        try {
            const user: User | null = await businessLogic.updateUser(email, updatedUser);
            if (user) {
                res.status(200).send(user);
            } else {
                res.status(404).send({ error: "User not found" });
            }
        } catch (error: any) {
            res.status(error.status || 500).send({ error: error.message || "Failed to update user" });
        }
    },

    deleteUser: async (req: Request, res: Response): Promise<void> => {
        const { email } = req.params;
        try {
            await businessLogic.deleteUser(email);
            res.status(200).send({ message: 'User deleted successfully' });
        } catch (error: any) {
            res.status(error.status || 500).send({ error: error.message || "Failed to delete user" });
        }
    }
};
