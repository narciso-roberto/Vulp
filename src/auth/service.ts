import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserRepository } from "../users/repository.js";

class AuthService {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(email: string, password: string) {
    const existingUser = await this.userRepository.findByEmail(email);

    if (existingUser) {
      throw new Error("User already exists");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await this.userRepository.create({
      email,
      passwordHash,
    });

    return {
      id: user.id,
      email: user.email,
    };
  }

  async login(email: string, password: string) {
    // const user = await this.userRepository.findByEmail(email);
    // if (!user) {
    //   throw new Error("Invalid credentials");
    // }
    // const passwordValid = await bcrypt.compare(password, user.passwordHash);
    // if (!passwordValid) {
    //   throw new Error("Invalid credentials");
    // }
    // const token = jwt.sign(
    //   {
    //     sub: user.id,
    //   },
    //   process.env.JWT_SECRET!,
    //   {
    //     expiresIn: "15m",
    //   },
    // );
    // return {
    //   token,
    // };
  }
}

const authService = new AuthService();

export { authService };
