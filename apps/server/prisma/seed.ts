import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from 'bcryptjs';


const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    username: "Alice",
    email: "alice@prisma.io",
    authored: {
      create: [
        {
          title: "Join us for Prisma Day 2021",
          body: "https://www.prisma.io/day",
          // slug: "prisma-day-2021",
          description: "Prisma Day is a one-day conference in Berlin focused on the open source Prisma ecosystem.",
        },
      ],
    },
    password: bcrypt.hashSync("alice123", 10),
    role: "ADMIN",
  },
  {
    username: "Nilu",
    email: "nilu@prisma.io",
    authored: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          body: "https://www.twitter.com/prisma",
          // slug: "follow-prisma-twitter",
          description: 'Follow Prisma on Twitter and get the latest news about Prisma Day 2021.',
        },
      ],
    },
    password: bcrypt.hashSync("nilu123", 10),
  },
  {
    username: "Mahmoud",
    email: "mahmoud@prisma.io",
    authored: {
      create: [
        {
          title: "Ask a question about Prisma on GitHub",
          body: "https://www.github.com/prisma/prisma/discussions",
          // slug: "ask-question-about-prisma-on-github",
          description: "Ask a question about Prisma on GitHub and get help from the Prisma community.",
        },
        {
          title: "Prisma on YouTube",
          body: "https://pris.ly/youtube",
          // slug: "prisma-on-youtube",
          description: "Subscribe to the Prisma YouTube channel to get notified when new videos are added.",
        },
      ],
    },
    password: bcrypt.hashSync("mahmoud123", 10),
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
