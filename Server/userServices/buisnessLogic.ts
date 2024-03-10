import { client } from "../DBConnection/mongoDB/mongoConnection";
import { User } from "../interfaces/userInterfaces/userInterface";
import { userSchema } from "../serializers/userSerializer";

export class UserBusinessLogic {
  private db: any;

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
// CREATE USER
  addUser = async (user: User): Promise<User> => {
    const existingUser = await this.db
      .collection("users")
      .findOne({ email: user.email });
    if (existingUser) {
      throw { message: "User already exists", status: 400 };
    }
    const validationResult = userSchema.validate(user);
    if (validationResult.error) {
      throw { message: validationResult.error.message, status: 400 };
    }
    await this.db.collection("users").insertOne(user);
    return user;
  };

// GET ALL USERS
  getAllUsers = async (): Promise<User[]> => {
    const users = await this.db.collection("users").find().toArray();
    return users;
  };

// UPDATE USER
  updateUser = async (
    email: string,
    updatedUser: User
  ): Promise<User | null> => {
    const existingUser = await this.getUserByEmail(email);
    if (!existingUser) {
      return null;
    }
    const validationResult = userSchema.validate(updatedUser);
    if (validationResult.error) {
      throw { message: validationResult.error.message, status: 400 };
    }
    await this.db
      .collection("users")
      .updateOne({ email }, { $set: updatedUser });
    return updatedUser;
  };

//   DELETE USER
  deleteUser = async (email: string): Promise<void> => {
    const existingUser = await this.getUserByEmail(email);
    if (!existingUser) {
      throw { message: "User not found", status: 404 };
    }
    await this.db.collection("users").deleteOne({ email });
  };

  private async getUserByEmail(email: string): Promise<User | null> {
    if (!this.db) {
      throw new Error("Database connection not established");
    }
    return await this.db.collection("users").findOne({ email });
  }
}
