"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const systemOptions = [
  "PMS",
  "PBX/call system",
  "Guest messaging",
  "Housekeeping",
  "Maintenance",
  "RMS/revenue management",
  "Channel manager",
  "POS/payments",
  "Review platform",
  "Other",
];

function readFormValue(fd: FormData, name: string) {
  const value = fd.get(name);
  return typeof value === "string" ? value : "";
}

export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: readFormValue(fd, "name"),
      email: readFormValue(fd, "email"),
      company: readFormValue(fd, "company"),
      role: readFormValue(fd, "role"),
      propertyCount: readFormValue(fd, "propertyCount"),
      useCase: readFormValue(fd, "useCase"),
      systems: fd.getAll("systems").filter((value): value is string => typeof value === "string"),
      message: readFormValue(fd, "message"),
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { error?: string; storage?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error || "Could not join the waitlist. Please try again.");
        return;
      }

      form.reset();
      setStatus("sent");
      setMessage(`Saved to ${data.storage || "the Telos waitlist"}.`);
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-2xl border border-border bg-card p-5 shadow-sm",
        compact ? "space-y-4" : "space-y-5 md:p-6"
      )}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Waitlist
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
          Join the Telos platform waitlist
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Tell us where Telos should connect first: operations, guest experience, or owner intelligence.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="waitlist-name">Name</Label>
          <Input id="waitlist-name" name="name" required placeholder="Jane Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="waitlist-email">Work email</Label>
          <Input id="waitlist-email" name="email" type="email" required placeholder="jane@hotelgroup.com" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="waitlist-company">Company</Label>
          <Input id="waitlist-company" name="company" required placeholder="Hotel group" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="waitlist-role">Role</Label>
          <Input id="waitlist-role" name="role" placeholder="Owner, GM, revenue, IT" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="waitlist-property-count">Properties</Label>
          <select
            id="waitlist-property-count"
            name="propertyCount"
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
            defaultValue=""
          >
            <option value="">Select</option>
            <option value="1 property">1 property</option>
            <option value="2-5 properties">2-5 properties</option>
            <option value="6-20 properties">6-20 properties</option>
            <option value="20+ properties">20+ properties</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="waitlist-use-case">Primary use case</Label>
          <select
            id="waitlist-use-case"
            name="useCase"
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
            defaultValue=""
          >
            <option value="">Select</option>
            <option value="Telos Watch front desk copilot">Telos Watch front desk copilot</option>
            <option value="Telos Haven guest app">Telos Haven guest app</option>
            <option value="Telos Horizon owner intelligence">Telos Horizon owner intelligence</option>
            <option value="Full Telos platform">Full Telos platform</option>
            <option value="Multi-property rollout">Multi-property rollout</option>
            <option value="Custom integration">Custom integration</option>
          </select>
        </div>
      </div>

      {!compact && (
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-foreground">
            What systems do you currently use?
          </legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {systemOptions.map((system) => (
              <label
                key={system}
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted-foreground"
              >
                <input name="systems" type="checkbox" value={system} className="h-4 w-4 accent-foreground" />
                {system}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="space-y-2">
        <Label htmlFor="waitlist-message">Notes</Label>
        <Textarea
          id="waitlist-message"
          name="message"
          placeholder="Current PMS, portfolio size, or workflow you want Telos to handle."
          className="min-h-20 resize-none"
        />
      </div>

      {message && (
        <div
          className={cn(
            "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm",
            status === "sent"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-red-200 bg-red-50 text-red-700"
          )}
        >
          {status === "sent" && <CheckCircle2 className="h-4 w-4" />}
          {message}
        </div>
      )}

      <Button type="submit" disabled={status === "sending"} className="h-11 w-full rounded-full">
        {status === "sending" ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Joining
          </span>
        ) : (
          "Join Waitlist"
        )}
      </Button>
    </form>
  );
}
