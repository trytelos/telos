import { NextResponse } from "next/server";
import { saveWaitlistSubmission, type WaitlistSubmission } from "@/lib/waitlist-store";

export const runtime = "nodejs";

type WaitlistBody = Partial<{
  name: string;
  email: string;
  company: string;
  role: string;
  propertyCount: string;
  useCase: string;
  systems: string[];
  message: string;
}>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: WaitlistBody;

  try {
    body = (await request.json()) as WaitlistBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email).toLowerCase();
  const company = clean(body.company);

  if (!name || !email || !company) {
    return NextResponse.json(
      { error: "Name, work email, and company are required." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid work email." }, { status: 400 });
  }

  const submission: WaitlistSubmission = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name,
    email,
    company,
    role: clean(body.role),
    propertyCount: clean(body.propertyCount),
    useCase: clean(body.useCase),
    systems: Array.isArray(body.systems)
      ? body.systems.map((system) => clean(system)).filter(Boolean).slice(0, 20)
      : [],
    message: clean(body.message),
  };

  try {
    const storage = await saveWaitlistSubmission(submission);
    return NextResponse.json({
      ok: true,
      id: submission.id,
      storage: storage.label,
    });
  } catch {
    return NextResponse.json(
      { error: "Could not save the waitlist request." },
      { status: 500 }
    );
  }
}
