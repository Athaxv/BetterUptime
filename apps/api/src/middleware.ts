import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) throw new Error("JWT_SECRET missing");

    const decoded = jwt.verify(token, jwtSecret) as { userId: string };
    req.userId = decoded.userId as string;
    next();
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
}