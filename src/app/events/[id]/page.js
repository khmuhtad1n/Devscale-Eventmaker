import { prisma } from "@/utils/prisma";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";

export default async function Page({ params }) {
  const { id } = await params;
  const event = await prisma.event.findUnique({
    where: { id },
  });

  if (!event) {
    return <div>Event Not Found</div>;
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-5">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            {event.image ? (
              <Image
                src={`${process.env.R2_PUBLIC_URL}/${event.id}/${event.image}`}
                //{`https://pub-7f2bbc06dc9149ea8dbfa51c713c10a5.r2.dev/eventmakers/${event.id}/${event.image}`}
                alt={event.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
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
          </div>
        </div>

        <div className="md:col-span-7 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
            <p className="mt-2 text-sm text-gray-500">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-medium font-semibold text-gray-900">
                Event Details
              </h2>
              <p className="mt-2 text-gray-600">{event.description}</p>
            </div>

            <div>
              <h2 className="text-medium font-semibold text-gray-900">
                Location
              </h2>
              <p className="mt-2 text-gray-600">{event.location}</p>
            </div>
          </div>

          <div className="pt-2 flex space-x-2">
            <Link href={`/events/${event.id}/join`}>
              <Button size="lg" color="primary" className="w-full md:w-auto">
                Register Now
              </Button>
            </Link>
            <Button size="lg" color="danger" className="w-full md:w-auto">
              Delete Event
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
