import React from "react";
import { prisma } from "@/utils/prisma";
import { Card } from "@heroui/react";
import Link from "next/link";
import { auth } from "@/libs/auth";
import Image from "next/image";

export const MyEvent = async () => {
  const session = await auth();
  const events = await prisma.event.findMany({
    where: {
      authorId: session?.user?.id,
    },
    include: {
      participants: true,
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">My Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <Card className="group p-4 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Image
                    src={`https://pub-7f2bbc06dc9149ea8dbfa51c713c10a5.r2.dev/eventmakers/${event.id}/${event.image}`}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <span className="text-sm text-gray-500">
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                  <span className="text-sm font-medium text-primary-600">
                    {event.category}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mt-1 line-clamp-2">
                    {event.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="text-sm text-gray-600">{event.location}</div>
                  <div className="text-sm font-medium text-gray-900">
                    {event.attendees?.length || 0} attendees
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}

        {events.length === 0 && (
          <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">You haven't created any events yet</p>
            <Link
              href="/dashboard/create"
              className="text-primary-600 hover:text-primary-700 font-medium mt-2 inline-block"
            >
              Create your first event
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
