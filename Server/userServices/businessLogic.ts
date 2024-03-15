import jwt, { Secret } from 'jsonwebtoken';
import { client } from "../DBConnection/mongoDB/mongoConnection";
import { User } from "../interfaces/userInterfaces/userInterface";
import { userSchema } from "../serializers/userSerializer";
require('dotenv').config();


export class UserBusinessLogic {
  private db: any;
  private JWT_SECRET = process.env.JWT_SECRET || 'default-secret'; 

  constructor() {
    this.initializeDB();
  }

  private async initializeDB() {
    try {
      await client.connect();
      console.log("Connected to MongoDB");
      this.db = client.db("julius");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }

  //REGISTRATION
  userRegister = async (user: User): Promise<string> => {
    const existingUser = await this.db.collection("users").findOne({ email: user.email });
    if (existingUser) {
      throw { message: "User already exists", status: 400 };
    }
    const validationResult = userSchema.validate(user);
    if (validationResult.error) {
      throw { message: validationResult.error.message, status: 400 };
    }
    await this.db.collection("users").insertOne(user);
    const token = this.generateToken(user.email);
    return token;
  };

  // LOGIN USER
  loginUser = async (email: string, password: string): Promise<string | null> => {
    const user = await this.db.collection("users").findOne({ email });
    if (!user || user.password !== password) {
      throw { message: "Invalid email or password", status: 401 };
    }
    const token = this.generateToken(email);
    return token;
  };

  // GET ALL USERS
  getAllUsers = async (): Promise<User[]> => {
    const users = await this.db.collection("users").find().toArray();
    return users;
  };

  // GET USER BY EMAIL
  private async getUserByEmail(email: string): Promise<User | null> {
    if (!this.db) {
      throw new Error("Database connection not established");
    }
    return await this.db.collection("users").findOne({ email });
  }

  // UPDATE USER
  updateUser = async (email: string, updatedUser: User): Promise<User | null> => {
    const existingUser = await this.getUserByEmail(email);
    if (!existingUser) {
      return null;
    }
    const validationResult = userSchema.validate(updatedUser);
    if (validationResult.error) {
      throw { message: validationResult.error.message, status: 400 };
    }
    await this.db.collection("users").updateOne({ email }, { $set: updatedUser });
    return updatedUser;
  };

  // DELETE USER
  deleteUser = async (email: string): Promise<void> => {
    const existingUser = await this.getUserByEmail(email);
    if (!existingUser) {
      throw { message: "User not found", status: 404 };
    }
    await this.db.collection("users").deleteOne({ email });
  };

  // Token generation
  private generateToken(email: string): string {
    if (!this.JWT_SECRET) {
        throw new Error('JWT secret key is not defined');
    }
    return jwt.sign({ email }, this.JWT_SECRET as Secret, { expiresIn: '5m' });
}
}
