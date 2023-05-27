import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";

import generateToken from "../utils/generateToken";

const prisma = new PrismaClient();

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const userDetails = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    const token = generateToken(userDetails);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};
