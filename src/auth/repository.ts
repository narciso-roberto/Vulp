import { prisma } from "../database/database.ts";

class AuthRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}

export { AuthRepository };
