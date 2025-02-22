"use server";

import { auth } from "@/libs/auth";
import { Prisma } from "@prisma/client";

export async function createEventAction(_, formData) {
  const title = await formData.get("title");
  const category = await formData.get("category");
  const image = await formData.get("image");
  const datetime = await formData.get("datetime");
  const description = await formData.get("description");

  const session = await auth();

  if (!session) {
    return {
      status: "error",
      message: "you must be logged in to create an event",
    };
  }

  if (!title || !category || !datetime || !description) {
    return {
      status: "error",
      message: "all fields are required",
    };
  }

  const newEvent = await Prisma.event.create({
    data: {
      title,
      category,
      description,
      image: image.size !== 0 ? image.name : "",
      authorId: session.user.id,
    },
  });

  return {
    status: "success",
    message: "event created",
  };
}
