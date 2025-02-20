"use client";
import { Button, Input } from "@heroui/react";
import { OauthButton } from "../_components/oauthButton";
import { useActionState } from "react";
import { registerAction } from "./action";
import Link from "next/link";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <main className="space-y-6">
      <section>
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <p>Create an account to continue</p>
      </section>
      <section className="space-y-2">
        <form className="space-y-5" action={formAction}>
          <Input placeholder="Full Name" name="name" variant="underlined" />
          <Input placeholder="email" name="email" variant="underlined" />
          <Input placeholder="password" name="password" variant="underlined" />
          <Button
            isLoading={pending}
            type="submit "
            fullWidth
            color="primary"
            radius="sm"
          >
            Register
          </Button>
        </form>
        {state?.status === "error" && (
          <div className="text-center text-rose-600 bg-rose-50 p-2 rounded-lg">
            {state.message}
          </div>
        )}
        {state?.status === "success" && (
          <div className="text-center text-emerald-600 bg-emerald -50 p-2 rounded-lg">
            {state.message}
          </div>
        )}
      </section>
      <section className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">or</span>
        </div>
      </section>
      <section>
        <OauthButton />
      </section>
      <section>
        <p>
          Already have an account?{" "}
          <Link href="/login" className="font-medium">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
