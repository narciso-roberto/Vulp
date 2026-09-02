import { createUserSchema } from "../schemas/CreateUserSchema.ts";
import z from "zod";

export type CreateUserDto = z.infer<typeof createUserSchema>;

export interface CreateUserResponseDTO {
  nome: string;
  email: string;
}

export interface UserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
}
