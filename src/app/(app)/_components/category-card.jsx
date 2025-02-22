import React from "react";
import { prisma } from "@/utils/prisma";
import { Card } from "@heroui/react";
import Link from "next/link";

export const CategorySection = async () => {
  const categories = await prisma.event.groupBy({
    by: ["category"],
    _count: {
      category: true,
    },
  });

  const getCategoryIcon = (category) => {
    const icons = {
      ai: "🤖",
      arts: "🎨",
      climate: "🌍",
      fitness: "💪",
      wellness: "🌸",
      crypto: "₿",
    };
    return icons[category.toLowerCase()] || "📅";
  };

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link href={`/events/${cat.category}`} key={cat.category}>
            <Card className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gray-700/50 text-white">
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">
                    {cat.category.toLocaleUpperCase()}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {cat._count.category} Events
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
