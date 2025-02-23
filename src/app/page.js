import Link from "next/link";
import { Button } from "@heroui/react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-black">
            eventmakers.
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="font-medium">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" size="sm" className="font-medium">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20 lg:py-32">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Make Every Event <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
              Unforgettable
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Create, manage, and discover extraordinary events. Join thousands of
            event enthusiasts making memories that last a lifetime.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/register">
              <Button
                size="lg"
                color="primary"
                className="text-base font-semibold px-8"
              >
                Start Creating
              </Button>
            </Link>
            <Link href="/events">
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold px-8"
              >
                Browse Events
              </Button>
            </Link>
          </div>
        </div>

        <div className="py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-primary-600"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Easy Planning</h3>
            <p className="text-gray-600">
              Create and manage events with our intuitive tools
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-primary-600"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Connect with event enthusiasts and grow your network
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-primary-600"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01A3.98 3.98 0 0 1 12 7c2.21 0 4 1.79 4 4h.5a2.5 2.5 0 0 1 0 5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Powered</h3>
            <p className="text-gray-600">
              Get smart suggestions for your event planning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
