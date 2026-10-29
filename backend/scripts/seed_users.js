const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding official QuizNova users into SQLite database...');

  const studentHash = await bcrypt.hash('Student@123', 10);
  const educatorHash = await bcrypt.hash('Educator@123', 10);
  const adminHash = await bcrypt.hash('Admin@123', 10);

  // 1. Student User
  const student = await prisma.user.upsert({
    where: { email: 'student@quiznova.edu' },
    update: {
      name: 'Saad Ansari (SSC Board Scholar)',
      passwordHash: studentHash,
      role: 'Student',
    },
    create: {
      name: 'Saad Ansari (SSC Board Scholar)',
      email: 'student@quiznova.edu',
      phoneNumber: '9876543210',
      passwordHash: studentHash,
      role: 'Student',
    },
  });
  console.log('Created / Updated Student:', student.email, student.name);

  // 2. Educator User
  const educator = await prisma.user.upsert({
    where: { email: 'educator@quiznova.edu' },
    update: {
      name: 'Prof. Anjali Deshmukh (SSC Exam Chair)',
      passwordHash: educatorHash,
      role: 'Educator',
    },
    create: {
      name: 'Prof. Anjali Deshmukh (SSC Exam Chair)',
      email: 'educator@quiznova.edu',
      phoneNumber: '9876543211',
      passwordHash: educatorHash,
      role: 'Educator',
    },
  });
  console.log('Created / Updated Educator:', educator.email, educator.name);

  // 3. Admin User
  const admin = await prisma.user.upsert({
    where: { email: 'admin@quiznova.edu' },
    update: {
      name: 'Administrator (QuizNova Control)',
      passwordHash: adminHash,
      role: 'Educator',
    },
    create: {
      name: 'Administrator (QuizNova Control)',
      email: 'admin@quiznova.edu',
      phoneNumber: '9876543212',
      passwordHash: adminHash,
      role: 'Educator',
    },
  });
  console.log('Created / Updated Admin:', admin.email, admin.name);

  console.log('Database seeding successfully finished!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
