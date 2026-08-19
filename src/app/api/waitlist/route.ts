import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Waitlist sink.
 *
 * Set WAITLIST_WEBHOOK_URL to anything that accepts a JSON POST — a Google
 * Apps Script bound to a Sheet, Airtable, Formspree, a Slack hook. With no
 * env var set the signup is logged instead, so local dev works unconfigured.
 *
 * A failure to forward is never surfaced to the visitor: losing the signup is
 * worse than a silently unrecorded one, and they can only submit once.
 */
export async function POST(req: Request) {
  let body: { email?: unknown; painPoint?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  if (email.length > 254 || !EMAIL.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const painPoint =
    typeof body.painPoint === "string" ? body.painPoint.slice(0, 60) : null;

  const record = { email, painPoint, at: new Date().toISOString() };
  const hook = process.env.WAITLIST_WEBHOOK_URL;

  if (hook) {
    try {
      await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } catch (err) {
      console.error("[waitlist] forward failed", err);
    }
  } else {
    console.warn(
      "[waitlist] WAITLIST_WEBHOOK_URL is not set - this signup is NOT stored:",
      JSON.stringify(record),
    );
  }

  return NextResponse.json({ ok: true });
}
