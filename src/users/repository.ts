import { prisma } from "../database/database.ts";

class UserRepository {
  async findById(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: any) {
    return prisma.user.create({ data });
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
