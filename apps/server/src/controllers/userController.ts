import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import generateToken from "../utils/generateToken";

const prisma = new PrismaClient();

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get a single user by ID
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    const token = generateToken(user);

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update an existing user
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  try {
    const userToUpdate = await prisma.user.findUnique({
      where: { id },
    });

    if (!userToUpdate)
      return res.status(404).json({ message: "User not found" });

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name, email, password, role },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Delete a user
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const userToDelete = await prisma.user.findUnique({
      where: { id },
    });

    if (!userToDelete)
      return res.status(404).json({ message: "User not found" });

    await prisma.user.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};
