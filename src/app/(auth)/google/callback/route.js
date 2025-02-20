"use server";
import { cookies } from "next/headers";
import { google } from "@/utils/arctic";
import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const code = searchParams.get("code");

    if (!code) {
      return NextResponse.json({ error: "No code provided" }, { status: 400 });
    }

    const cookieStore = cookies();
    const codeVerifier = cookieStore.get("codeVerifier")?.value;

    if (!codeVerifier) {
      return NextResponse.json(
        { error: "No code verifier found" },
        { status: 400 }
      );
    }

    // Validate the authorization code
    const tokens = await google.validateAuthorizationCode(code, codeVerifier);
    const accessToken = tokens.accessToken();

    // Get user info from Google
    const res = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    let userId;

    // Create new user if doesn't exist
    if (!user) {
      const newUser = await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          avatarUrl: data.picture,
        },
      });
      userId = newUser.id;
    } else {
      userId = user.id;
    }

    // Create new session
    const newSession = await prisma.session.create({
      data: {
        userId: userId,
      },
    });

    // Set session cookie
    cookieStore.set("sessionId", newSession.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return NextResponse.redirect(new URL("/dashboard", request.url));
  } catch (error) {
    console.error("OAuth callback error:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}
