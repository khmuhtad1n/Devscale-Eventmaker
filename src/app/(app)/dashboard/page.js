import { Card, Button } from "@heroui/react";
import Link from "next/link";

export default async function Page() {
  const categories = [
    { name: "AI", events: "1K", icon: "🧠", color: "rose" },
    { name: "Arts & Culture", events: "801", icon: "🎨", color: "amber" },
    { name: "Climate", events: "489", icon: "🌍", color: "green" },
    { name: "Fitness", events: "587", icon: "💪", color: "orange" },
    { name: "Wellness", events: "940", icon: "🌸", color: "cyan" },
    { name: "Crypto", events: "1K", icon: "₿", color: "purple" },
  ];

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

      <section>
        <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              href={`/events/category/${category.name.toLowerCase()}`}
              key={category.name}
            >
              <Card className="p-4 hover:shadow-md transition-shadow bg-gray-900 text-white">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{category.icon}</div>
                  <div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-gray-300">
                      {category.events} Events
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Explore Local Events</h2>
        <div className="space-y-6">
          {locations.map((location) => (
            <div key={location.name} className="space-y-4">
              <h3 className="text-lg font-medium">{location.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {location.cities.map((city) => (
                  <Link
                    href={`/events/location/${city.name.toLowerCase()}`}
                    key={city.name}
                  >
                    <Card className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{city.name}</h4>
                        <p className="text-sm text-gray-500">
                          {city.events} Events
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
