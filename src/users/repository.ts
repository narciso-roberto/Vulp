import { AppError } from "../errors/Errors.ts";
import { type CreateUserDto } from "./dto/createUserDTO.ts";
import { DataBase } from "../database/database.ts";

class UserRepository {
  constructor(private database: DataBase) {}

  async findById(id: string) {
    return this.database.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string) {
    try {
      const user = await this.database.user.findUnique({
        where: {
          email,
        },
      });

      return user;
    } catch (error) {
      throw new AppError(500, "Something went wrong with database", error);
    }
  }

  async create(data: CreateUserDto) {
    const createdUser = await this.database.user.create({ data });

    return createdUser;
  }

  async update(id: string, data: any) {
    return this.database.user.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string) {
    return this.database.user.delete({
      where: {
        id,
      },
    });
  }
}

export { UserRepository };
