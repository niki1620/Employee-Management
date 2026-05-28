const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const countries = ["India", "USA", "Germany"];
const jobTitles = ["Software Engineer", "HR", "Manager"];

async function main() {
  const employees = [];

  for (let i = 0; i < 10000; i++) {
    employees.push({
      fullName: `Employee ${i}`,
      email: `employee${i}@test.com`,
      country:
        countries[Math.floor(Math.random() * countries.length)],
      department: "Engineering",
      jobTitle:
        jobTitles[Math.floor(Math.random() * jobTitles.length)],
      salary: Math.floor(Math.random() * 100000),
      joiningDate: new Date(),
      status: "ACTIVE",
    });
  }

  await prisma.employee.createMany({
    data: employees,
    skipDuplicates: true,
  });

  console.log("Seeded successfully");
}

main();

