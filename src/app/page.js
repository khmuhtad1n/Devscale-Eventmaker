import Link from "next/link";
import { Button } from "@heroui/react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-32">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Create Memorable{" "}
            <span className="text-primary-600">Experiences</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Your all-in-one platform for creating, managing, and discovering
            amazing events. Join our community of event enthusiasts and make
            every moment count.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/login">
              <Button
                size="lg"
                color="primary"
                className="text-base font-semibold"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/events">
              <Button
                size="lg"
                variant="ghost"
                className="text-base font-semibold"
              >
                Explore Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
