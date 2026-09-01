import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from 'dotenv';

dotenv.config({ path: '.env', debug: true });

class DataBase {
  prisma: PrismaClient;
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    });

    this.prisma = new PrismaClient({ adapter });
  }
}

const { prisma } = new DataBase();

export { prisma };
