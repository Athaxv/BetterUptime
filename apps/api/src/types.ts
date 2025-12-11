import { z } from "zod";

const authSchema = z.object({
    username: z.string().min(4).max(40),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string()
})

export const AuthSchema = authSchema;