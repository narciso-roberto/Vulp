import { prisma } from "../database/database.ts";
import { AppError } from "../errors/Errors.ts";
import { type CreateUserDto } from "./dto/createUserDTO.ts";

class UserRepository {
  async findById(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string) {
    try {
      const user = await prisma.user.findUnique({
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
    const createdUser = await prisma.user.create({ data });

    return createdUser;
  }

  async update(id: string, data: any) {
    return prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string) {
    return prisma.user.delete({
      where: {
        id,
      },
    });
  }
}

export { UserRepository };
