import { DataBase } from "../database/database.ts";

class AuthRepository {
  constructor(private database: DataBase) {}
  async findByEmail(email: string) {
    return this.database.user.findUnique({
      where: {
        email,
      },
    });
  }
}

export { AuthRepository };
