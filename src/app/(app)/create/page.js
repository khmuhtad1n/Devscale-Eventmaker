"use client";
import { Button, Input, Textarea } from "@heroui/react";
import React, { useActionState } from "react";
import { createEventAction } from "./action";
import { StateStatus } from "@/libs/state-status";

export default function Page() {
  const [state, formAction, pending] = useActionState(createEventAction, null);
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Create New Event</h1>
          <p className="text-gray-600">Fill in the details for your event</p>
        </div>

        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Event Title
            </label>
            <Input
              name="title"
              placeholder="Enter your event name"
              variant="underlined"
              size="lg"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              className="w-full h-10 border-b border-gray-300 focus:border-primary-500 focus:ring-0 bg-transparent"
            >
              <option value="">Select a category</option>
              <option value="ai">AI</option>
              <option value="arts">Arts & Culture</option>
              <option value="climate">Climate</option>
              <option value="fitness">Fitness</option>
              <option value="wellness">Wellness</option>
              <option value="crypto">Crypto</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Event Image
            </label>
            <Input
              name="image"
              type="file"
              accept="image/*"
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Date & Time
            </label>
            <Input
              name="datetime"
              type="datetime-local"
              variant="underlined"
              size="lg"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <Textarea
              name="description"
              placeholder="Describe your event"
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
            Create Event
          </Button>
          <StateStatus state={state} />
        </form>
      </div>
    </div>
  );
}
