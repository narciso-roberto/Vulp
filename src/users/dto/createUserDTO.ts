import { createUserSchema } from "../schemas/CreateUserSchema.ts";
import z from "zod";

export type CreateUserDto = z.infer<typeof createUserSchema>;
