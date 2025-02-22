import React from "react";
import { prisma } from "@/utils/prisma";
import { Card } from "@heroui/react";
import Link from "next/link";

export const LocationSection = async () => {
  const events = await prisma.event.findMany();

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <Card className="group p-4 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {event.location}
                  </h3>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
