import { appendFile, mkdir } from "fs/promises";
import path from "path";

export type WaitlistSubmission = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  company: string;
  role: string;
  propertyCount: string;
  useCase: string;
  systems: string[];
  message: string;
};

export const WAITLIST_STORAGE_LABEL = "data/waitlist-submissions.jsonl";

function storagePath() {
  return process.env.WAITLIST_STORAGE_PATH?.trim()
    ? path.resolve(process.env.WAITLIST_STORAGE_PATH)
    : path.join(process.cwd(), WAITLIST_STORAGE_LABEL);
}

export async function saveWaitlistSubmission(submission: WaitlistSubmission) {
  const filePath = storagePath();
  await mkdir(path.dirname(filePath), { recursive: true });
  await appendFile(filePath, `${JSON.stringify(submission)}\n`, "utf8");

  return {
    filePath,
    label: process.env.WAITLIST_STORAGE_PATH?.trim()
      ? "WAITLIST_STORAGE_PATH"
      : WAITLIST_STORAGE_LABEL,
  };
}
