import { PrismaClient } from "./generated/prisma/index.js";

// @ts-expect-error - PrismaClient constructor type issue with exactOptionalPropertyTypes
const prisma = new PrismaClient();

export default prisma;