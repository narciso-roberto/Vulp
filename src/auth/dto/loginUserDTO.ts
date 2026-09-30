import { LoginUserSchema } from "../schemas/LoginUserDTO.ts";
import z from "zod";

export type LoginUserDTO = z.infer<typeof LoginUserSchema>;
