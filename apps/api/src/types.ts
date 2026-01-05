import { z } from "zod";

const authSchema = z.object({
    username: z.string().min(4).max(40),
    email: z.string(),
    password: z.string()
})

const loginSchema = z.object({
    email: z.string(),
    password: z.string()
})

export const AuthSchema = authSchema;
export const LoginSchema = loginSchema;