import express from "express";
import { db as prisma } from "@repo/db";
import { AuthSchema, LoginSchema } from "./types.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { authMiddleware } from "./middleware.js";

const app = express();
app.use(express.json());

app.post('/signin', async (req, res) => {
    const data = LoginSchema.safeParse(req.body);
    if (!data.success) {
      res.status(400).json({ message: "Invalid request body" });
      return;
    }

    const { email, password } = req.body;

    try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      }
    })

    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const isPasswordValid = await bcryptjs.compare(password, user?.password)

    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // const jwtSecret = process.env.JWT_SECRET;
    const jwtSecret = "test";

    if (!jwtSecret) {
      throw new Error("Unable to find JWT_SECRET");
    }

    const token = jwt.sign({ email: user.email, userId: user.id }, jwtSecret, { expiresIn: "2h" });

    return res.json({ message: "Login successful", token: token });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
})

app.post('/signup', async (req, res) => {
    const data = AuthSchema.safeParse(req.body);
    if (!data.success) {
      res.status(400).json({ message: "Invalid request body" });
      return;
    }

    const { username, email, password } = req.body;
    
    try {
    const check = await prisma.user.findUnique({
      where: {
        email: email,
      }
    })

    if (check) {
      res.status(402).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      }
    })

    res.json({ message: "User created successfully", userId: user.id });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
})

app.post('/website', authMiddleware, async (req, res) => {
  if (!req.body.url) {
    res.status(400).json({ message: "URL is required" });
    return;
  }
  try {
    const website = await prisma.website.create({
      data: {
        url: req.body.url,
        timeAdded: new Date(),
        userId: req.userId!,
      }
    })

    res.json({ message: "Website created successfully", websiteId: website.id });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
})

app.post('/status/:websiteId', authMiddleware, async (req, res) => {
  if (!req.params.websiteId) {
    res.status(404).json({ message: "Website ID is required" });
    return;
  }
  try {
    const website = await prisma.website.findFirst({
      where: {
        id: req.params.websiteId as string,
        userId: req.userId!,
      },
      include: {
        ticks: {
          take: 1,
          orderBy: {
            createdAt: 'desc',
          },
        }
      }
    })

    if (!website) {
      res.status(404).json({ message: "Website not found" });
      return;
    }
    
    res.json({ message: "Status retrieved successfully", status: website });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});