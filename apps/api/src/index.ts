import express from "express";
import { db as prisma } from "@repo/db";
import { AuthSchema } from "./types.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post('/website', async (req, res) => {
  const { url } = req.body;

  // const website = await prisma.Website.create({
  //   data: {
  //     url: url,
  //     timeAdded: new Date(),
  //   }
  // })

  // res.json(website);
})

app.post('/user', async (req, res) => {
  const check = AuthSchema.safeParse(req.body);

  if (!check.success) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const { username, email, password } = req.body;

  const user = await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: password,
    }
  })

  res.json({ message: "User created successfully", userId: user.id });
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});