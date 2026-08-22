import { NextResponse } from "next/server";

const API_KEY = process.env.WAKATIME_API_KEY!; // store it in .env.local

interface WakaTimeSummary {
  data?: {
    grand_total?: { text: string };
    languages?: { name: string }[];
  }[];
}

export async function GET() {
  try {
    const res = await fetch(
      "https://wakatime.com/api/v1/users/current/summaries?range=Today",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(API_KEY).toString("base64")}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return NextResponse.json({ total: null, languages: [] }, { status: 200 });
    }

    const data = (await res.json()) as WakaTimeSummary;
    const summary = data.data?.[0];

    if (!summary) {
      return NextResponse.json({ total: null, languages: [] });
    }

    return NextResponse.json({
      total: summary.grand_total?.text ?? null, // e.g., "3 hrs 45 mins"
      languages:
        summary.languages?.slice(0, 3).map((l) => l.name) ?? [],
    });
  } catch (error) {
    console.error("Error fetching WakaTime summary:", error);
    return NextResponse.json({ total: null, languages: [] });
  }
}
