"use server";

import { auth } from "@/libs/auth";
import { uploadFile } from "@/libs/file-ops";
import { prisma } from "@/utils/prisma";

export async function createEventAction(_, formData) {
  const title = await formData.get("title");
  const category = await formData.get("category");
  const image = await formData.get("image");
  const datetime = await formData.get("datetime");
  const description = await formData.get("description");
  const location = await formData.get("location");

  const session = await auth();

  if (!session) {
    return {
      status: "error",
      message: "you must be logged in to create an event",
    };
  }

  if (!title || !category || !datetime || !description || !location) {
    return {
      status: "error",
      message: "all fields are required",
    };
  }

  const newEvent = await prisma.event.create({
    data: {
      title,
      date: new Date(datetime),
      category,
      location,
      description,
      image: image.size !== 0 ? image.name : "",
      authorId: session.user.id,
    },
  });

  await uploadFile({
    key: image.name,
    folder: newEvent.id,
    body: image,
  });

  return {
    status: "success",
    message: "event created",
  };
}
