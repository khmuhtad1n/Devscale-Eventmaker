import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;
  const event = await prisma.event.findUnique({
    where: {
      id,
    },
  });

  if (!event) {
    notFound();
  }

  return <div> will gointo this on sunday</div>;
}
