"use client";
import { Button, Input } from "@heroui/react";
import { useActionState } from "react";
import { loginAction } from "./action";
import { OauthButton } from "../_components/oauthButton";
import Link from "next/link";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        <form className="mt-8 space-y-6" action={formAction}>
          <div className="space-y-4">
            <Input
              label="Email address"
              placeholder="Enter your email"
              name="email"
              type="email"
              variant="underlined"
              size="lg"
              required
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              name="password"
              type="password"
              variant="underlined"
              size="lg"
              required
            />
          </div>

          <Button
            isLoading={pending}
            type="submit"
            fullWidth
            color="primary"
            size="lg"
          >
            Sign in
          </Button>

          {state?.status === "error" && (
            <div className="p-4 rounded-lg bg-rose-50 border border-rose-200">
              <p className="text-sm text-rose-600 text-center">{state.message}</p>
            </div>
          )}
          {state?.status === "success" && (
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
              <p className="text-sm text-emerald-600 text-center">
                {state.message}
              </p>
            </div>
          )}
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or continue with</span>
          </div>
        </div>

        <OauthButton />

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
