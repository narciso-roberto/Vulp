import { UserRepository } from "./repository.ts";
import { CreateUserDto } from "./dto/createUserDTO.ts";
import { AppError } from "../errors/Errors.ts";

class UserService {
  constructor(private userRepository: UserRepository) {}

  async getById(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError(404, "User not found");
    }

    return user;
  }

  async create(userDto: CreateUserDto) {
    const alreadyExist = await this.userRepository.findByEmail(userDto.email);

    if (alreadyExist) {
      throw new AppError(400, "E-mail already existes");
    }

    const user = await this.userRepository.create(userDto);
    return user;
  }

  async update(id: string, data: any) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return this.userRepository.update(id, data);
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
