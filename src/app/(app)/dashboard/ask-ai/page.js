"use client";
import { Button, Textarea } from "@heroui/react";
import { useActionState } from "react";
import { askAiAction } from "./action";
import { StateStatus } from "@/libs/state-status";

export default function Page() {
  const [state, formAction, pending] = useActionState(askAiAction, null);

  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Tanya Mas2 AI - beta</h1>
          <p className="text-gray-600">
            Jelaskan ide eventmu, ai akan coba review!
          </p>
        </div>

        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Mau buat event apa?
            </label>
            <Textarea
              name="description"
              placeholder="Aku mau buat event tentang..."
              variant="underlined"
              size="lg"
              rows={4}
            />
          </div>

          <Button
            isLoading={pending}
            type="submit"
            color="primary"
            size="lg"
            className="w-full"
          >
            Get AI Suggestions
          </Button>

          {state?.data && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">AI Suggestion:</h3>
              <p className="whitespace-pre-wrap text-gray-600">{state.data}</p>
            </div>
          )}

          <StateStatus state={state} />
        </form>
      </div>
    </div>
  );
}
