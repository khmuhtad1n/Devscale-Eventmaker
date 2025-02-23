import React from "react";
import { prisma } from "@/utils/prisma";
import { Card } from "@heroui/react";
import Link from "next/link";

export const LocationSection = async () => {
  const events = await prisma.event.groupBy({
    by: ["location"],
    _count: {
      location: true,
    },
  });

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event) => (
          <Link href={`/events/soon`} key={event.id}>
            <Card className="group p-4 bg-gradient-to-br from-gray-900 to-gray-800 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-white">
                    {event.location}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {event._count.location} events
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
