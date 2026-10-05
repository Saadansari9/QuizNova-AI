import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, role: true, phoneNumber: true, createdAt: true }
  });
  const quizzes = await prisma.quiz.findMany({
    select: { id: true, title: true, topic: true, difficulty: true, _count: { select: { questions: true, attempts: true } } }
  });
  const attempts = await prisma.quizAttempt.findMany({
    select: { id: true, score: true, maxScore: true, percentage: true, isPassed: true }
  });
  const otps = await prisma.otpVerification.findMany();

  console.log(JSON.stringify({
    usersCount: users.length,
    users,
    quizzesCount: quizzes.length,
    quizzes,
    attemptsCount: attempts.length,
    otpsCount: otps.length
  }, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());