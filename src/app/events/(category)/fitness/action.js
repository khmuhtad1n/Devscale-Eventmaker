export default async function FitnessEventsPage() {
  const events = await prisma.event.findMany({
    where: {
      category: "fitness",
    },
  });

  console.log(events);
}
