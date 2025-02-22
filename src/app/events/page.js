import { Card } from "@heroui/react";
import Link from "next/link";
import {
  CategoryEvent,
  CategorySection,
} from "../(app)/_components/category-card";
import { EventCard, EventSection } from "../(app)/_components/event-card";
import { LocationSection } from "../(app)/_components/location-card";

export default async function Page() {
  const locations = [
    {
      name: "Asia & Pacific",
      cities: [
        { name: "Bangkok", events: "12" },
        { name: "Jakarta", events: "8" },
        { name: "Kuala Lumpur", events: "8" },
        { name: "Manila", events: "5" },
      ],
    },
    {
      name: "Americas",
      cities: [
        { name: "San Francisco", events: "25" },
        { name: "New York", events: "18" },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold mb-2">Discover Events</h1>
        <p className="text-gray-600">
          Explore popular events near you, browse by category, or check out some
          of the great community calendars.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
        <CategorySection />
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Popular Events</h2>
        <EventSection />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Explore Local Events</h2>
        <LocationSection />
      </section>
    </div>
  );
}
