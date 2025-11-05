import { NextResponse } from "next/server";

const API_KEY = process.env.WAKATIME_API_KEY!; // store it in .env.local

export async function GET() {
  const res = await fetch(
    "https://wakatime.com/api/v1/users/current/summaries?range=Today",
    {
      headers: {
        Authorization: `Basic ${Buffer.from(API_KEY).toString("base64")}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  const summary = data.data[0];

  return NextResponse.json({
    total: summary.grand_total.text, // e.g., "3 hrs 45 mins"
    languages: summary.languages.slice(0, 3).map((l: { name: string }) => l.name),
  });
}
