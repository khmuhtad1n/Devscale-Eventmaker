import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/utils/prisma";
import { Button } from "@heroui/react";
import Link from "next/link";

export default async function Page({ children }) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("sessionId")?.value;

  if (!sessionId) {
    redirect("/login");
  }

  const checkSession = await prisma.session.findUnique({
    where: {
      id: sessionId,
    },
    include: {
      user: true,
    },
  });

  if (!checkSession) {
    redirect("/login");
  }

  return (
    <div>
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="text-xl font-bold text-black">
                eventmakers.
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="primary" href="/logout">
                Logout
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white shadow-sm rounded-lg p-6">{children}</div>
      </main>
    </div>
  );
}
