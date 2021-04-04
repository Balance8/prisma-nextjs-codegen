import * as faker from 'faker';
import { PrismaClient } from '@prisma/client';

const data = Array.from({ length: 100 }).map(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
}));

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
