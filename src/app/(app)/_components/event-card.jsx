import React from "react";
import { prisma } from "@/utils/prisma";
import { Card } from "@heroui/react";
import Link from "next/link";

export const EventSection = async () => {
  const events = await prisma.event.findMany({
    orderBy: {
      date: "desc",
    },
    include: {
      author: true,
    },
  });

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <Card className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-white">
                    {event.title}
                  </h3>
                  <span className="text-sm text-gray-300">
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">
                    {event.location}
                  </span>
                  <span className="text-sm text-gray-300">
                    by {event.author.name}
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
