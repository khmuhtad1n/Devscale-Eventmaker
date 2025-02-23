import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation";
import { Button } from "@heroui/react";
import Image from "next/image";

export default async function Page({ params }) {
  const { id } = params;
  const event = await prisma.event.findUnique({
    where: { id },
  });

  if (!event) {
    notFound();
  }

  return (
    <div>
      <div>this is page for ${id}</div>;
      <Image
        src={`https://pub-7f2bbc06dc9149ea8dbfa51c713c10a5.r2.dev/eventmakers/${event.id}/${event.image}`}
        alt={event.image}
        width={100}
        height={100}
        alt={event.name}
        className="rounded-full"
      />
    </div>
  );
}
