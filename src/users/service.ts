import { UserRepository } from "./repository.ts";
import { CreateUserDto } from "./dto/createUserDTO.ts";
import { AppError } from "../errors/Errors.ts";
import { UserResponseDTO } from "./dto/userResponseDTO.ts";

class UserService {
  constructor(private userRepository: UserRepository) {}

  async getById(id: string): Promise<UserResponseDTO> {
    const userDatabase = await this.userRepository.findById(id);

    if (!userDatabase) {
      throw new AppError(404, "User not found");
    }

    const { name, email } = userDatabase;

    const user: UserResponseDTO = {
      name,
      email,
    };

    return user;
  }

  async getByEmailToLogin(userEmail: string) {
    const userDatabase = await this.userRepository.findByEmail(userEmail);

    if (!userDatabase) {
      throw new AppError(404, "User not found");
    }

    return userDatabase;
  }

  async create(userDto: CreateUserDto): Promise<UserResponseDTO> {
    const alreadyExist = await this.userRepository.findByEmail(userDto.email);

    if (alreadyExist) {
      throw new AppError(400, "E-mail already existes");
    }

    const userDatabase = await this.userRepository.create(userDto);
    const { name, email } = userDatabase;

    const user = {
      name,
      email,
    };

    return user;
  }

  async update(id: string, data: any): Promise<UserResponseDTO> {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error("User not found");
    }

    const { name, email } = await this.userRepository.update(id, data);

    const user: UserResponseDTO = {
      name,
      email,
    };

    return user;
  }

  async delete(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError(404, "User not found");
    }

    await this.userRepository.delete(id);
  }
}

export { UserService };
