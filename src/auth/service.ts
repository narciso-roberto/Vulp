import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserRepository } from "../users/repository.js";
import { AppError } from "../errors/Errors.ts";
import { RegisterUserDTO } from "./dto/registerUserDTO.ts";
import { LoginUserDTO } from "./dto/loginUserDTO.ts";

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async register(registerUserDTO: RegisterUserDTO) {
    const { password } = registerUserDTO;

    const passwordHash = await bcrypt.hash(password, 10);

    registerUserDTO.password = passwordHash;

    const user = await this.userRepository.create(registerUserDTO);

    return user;
  }

  async login(loginUserDTO: LoginUserDTO) {
    const { email, password } = loginUserDTO;

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Invalid credentials");
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      {
        sub: user.id,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "15m",
      },
    );
    return {
      token,
    };
  }
}
