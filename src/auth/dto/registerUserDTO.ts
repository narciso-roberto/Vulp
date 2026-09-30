import { RegisterUserSchema } from "../schemas/RegisterUserSchemas.ts";
import z from "zod";

export type RegisterUserDTO = z.infer<typeof RegisterUserSchema>;
