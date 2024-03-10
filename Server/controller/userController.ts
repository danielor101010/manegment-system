import { Request, Response } from "express";
import { User } from "../interfaces/userInterfaces/userInterface";
import { UserBusinessLogic } from "../userServices/buisnessLogic";
import { log } from "console";

const businessLogic = new UserBusinessLogic();

export const userController = {
    addUser: async (req: Request, res: Response): Promise<void> => {
        const user: User = req.body;
        user.isAdmin = false;
        try {
            const newUser: User = await businessLogic.addUser(user);
            res.status(201).send(newUser);
        } catch (error) {
            res.status(500).send({ error: "Failed to add user" });
        }
    },

    getUsers: async (req: Request, res: Response): Promise<void> => {
        try {            
            const users: User[] = await businessLogic.getAllUsers();
            res.status(200).send(users);
        } catch (error) {
            console.log(error);
            
            res.status(500).send({ error: "Failed to fetch users" });
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
        } catch (error) {
            res.status(500).send({ error: "Failed to update user" });
        }
    },

    deleteUser: async (req: Request, res: Response): Promise<void> => {
        const { email } = req.params;
        try {
            await businessLogic.deleteUser(email);
            res.status(204).send();
        } catch (error) {
            res.status(500).send({ error: "Failed to delete user" });
        }
    }
};

