"use server";

import { auth } from "@/libs/auth";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.SITE_URL,
    "X-Title": "Eventmakers - AI Planner",
    "Content-Type": "application/json",
  },
});

export async function askAiAction(_, formData) {
  const description = await formData.get("description");
  const session = await auth();

  if (!session) {
    return {
      status: "error",
      message: "you must be logged in to use this feature",
    };
  }

  if (!description) {
    return {
      status: "error",
      message: "please provide a description",
    };
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "google/gemini-pro",
      messages: [
        {
          role: "system",
          content: `You are an event planner who helps organize amazing events. Be creative and fun in your suggestions. Respond in Bahasa Indonesia
          Format your response in markdown with the following structure,:

          # Ide Event Kamu ✨

          ## First Impression 🤔
          [Kesan pertama tentang ide eventnya dalam Bahasa Indonesia]

          ## Hal Yang Keren 💪
          - Point 1
          - Point 2
          - Point 3

          ## Yang Perlu Diperhatiin 🔧
          - Point 1
          - Point 2
          - Point 3

          ## Saran Pengembangan 📈
          - Point 1
          - Point 2
          - Point 3

          ## Budget Estimation 💰
          [Perkiraan budget dalam range]

          ## Kesimpulan 🎯
          [Kesimpulan akhir dengan gaya Gen Z]`,
        },
        {
          role: "user",
          content: `Tolong review ide event ini: ${description} pastikan responmu masuk akal atau aku akan dipecat dan kehilangan mata pencarian`,
        },
      ],
    });

    return {
      status: "success",
      message: "AI suggestion generated",
      data: completion.choices[0].message.content,
    };
  } catch (error) {
    console.error("AI Error:", error);
    return {
      status: "error",
      message: "Failed to generate event suggestion",
    };
  }
}
