import { UserRepository } from "./repository.ts";

class UserService {
  constructor(private userRepository: UserRepository) {}

  async getById(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async create(data: any) {

    const user = await this.userRepository.create(data);

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
      throw new Error("User not found");
    }

    await this.userRepository.delete(id);
  }
}

export { UserService };