import z from "zod";

export const RegisterUserSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(8),
});
