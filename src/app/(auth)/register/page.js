"use client";
import { Button, Input } from "@heroui/react";
import { OauthButton } from "../_components/oauthButton";
import { useActionState } from "react";
import { registerAction } from "./action";
import Link from "next/link";
import { StateStatus } from "@/libs/state-status";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Join us to start creating events
          </p>
        </div>

        <form className="mt-8 space-y-6" action={formAction}>
          <div className="space-y-4">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              name="name"
              type="text"
              variant="underlined"
              size="lg"
            />
            <Input
              label="Email address"
              placeholder="Enter your email"
              name="email"
              type="email"
              variant="underlined"
              size="lg"
            />
            <Input
              label="Password"
              placeholder="Create a password"
              name="password"
              type="password"
              variant="underlined"
              size="lg"
            />
          </div>

          <Button
            isLoading={pending}
            type="submit"
            fullWidth
            color="primary"
            size="lg"
          >
            Create account
          </Button>
          <StateStatus state={state} />
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              or continue with
            </span>
          </div>
        </div>

        <OauthButton />

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
