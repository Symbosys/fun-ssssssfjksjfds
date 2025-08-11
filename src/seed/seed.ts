import { prisma } from "../config";

export async function main() {
  const models = await prisma.model.findMany({
    select: { id: true, name: true },
    take: 18 // optional; remove this line if you want to update all
  });

  for (const model of models) {
    const capitalizedName = model.name.charAt(0).toUpperCase() + model.name.slice(1);

    const personalizedDescription = `${capitalizedName} – The Magnetic Muse
Hi, I’m ${capitalizedName} — playful, thoughtful, and emotionally connected. I make you feel important, listened to, and fully in the moment.
With me, every interaction feels full of life and light. I offer you affection without condition, and attention without distraction.`;

    await prisma.model.update({
      where: { id: model.id },
      data: {
        description: personalizedDescription,
      },
    });
  }

  console.log('Descriptions updated for all models.');
}

