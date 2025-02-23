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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <Card className="group overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                {event.image ? (
                  <Image
                    src={`https://pub-7f2bbc06dc9149ea8dbfa51c713c10a5.r2.dev/eventmakers/${event.id}/${event.image}`}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-gray-300"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"
                      />
                    </svg>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg text-white group-hover:text-primary-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-xs text-zinc-50 line-clamp-2">
                    {event.description}
                  </p>
                </div>

                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
                      />
                    </svg>
                    {event.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
                      />
                    </svg>
                    {event.author.name}
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span className="text-sm font-medium text-primary-600">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
