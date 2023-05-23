import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
