import { PrismaClient, Difficulty } from "@prisma/client";

import BestTime from "./problems/BestTime";
import ContainsDuplicate from "./problems/ContainsDuplicate";
import MaximumSubarray from "./problems/MaximumSubarray";
import ValidAnagram from "./problems/ValidAnagram";

const prisma = new PrismaClient();

const problems = [
  BestTime,
  ContainsDuplicate,
  MaximumSubarray,
  ValidAnagram,
];

async function main() {
  // Create or update admin user
  const user = await prisma.user.upsert({
    where: {
      email: "nikitasaxena.net@gmail.com",
    },
    update: {},
    create: {
      clerkId: "seed-user",
      email: "nikitasaxena.net@gmail.com",
      firstName: "Nikita",
      lastName: "Saxena",
      role: "ADMIN",
    },
  });

  // Seed problems
  for (const problem of problems) {
    const data = {
      ...problem,
      difficulty:
        Difficulty[problem.difficulty as keyof typeof Difficulty],
      userId: user.id,
    };

    await prisma.problem.upsert({
      where: {
        title: problem.title,
      },
      update: data,
      create: data,
    });
  }

  console.log("✅ Problems seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });