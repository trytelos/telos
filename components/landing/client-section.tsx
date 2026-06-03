"use client";

import { motion } from "framer-motion";

const modules = [
  {
    label: "Core Platform",
    title: "Telos Engine",
    description:
      "The intelligence and action layer above PMS, guest messaging, housekeeping, maintenance, reviews, payments, calls, TV, and revenue tools.",
    capabilities: [
      {
        name: "Property Signals",
        detail: "Listens to calls, messages, room status, housekeeping state, maintenance tickets, reviews, and revenue signals.",
      },
      {
        name: "Operational Memory",
        detail: "Keeps guest preferences, service history, recurring issues, and property patterns available to the right workflow.",
      },
      {
        name: "Controlled Actions",
        detail: "Creates tasks, drafts responses, escalates incidents, recommends pricing, and generates reports with audit logs.",
      },
    ],
  },
  {
    label: "Staff Operations",
    title: "Telos Watch",
    description:
      "The front desk and staff copilot for live requests, call summaries, guest profiles, room board coordination, incidents, and daily reports.",
    capabilities: [
      {
        name: "Call Copilot",
        detail: "Answers overflow calls, captures guest intent, summarizes the interaction, and routes urgent issues to staff.",
      },
      {
        name: "Room Operations",
        detail: "Coordinates live requests, room status, housekeeping, maintenance, DND, and schedule visibility.",
      },
      {
        name: "Manager Reports",
        detail: "Turns the day into open items, incident logs, staff load, and nightly summaries managers can act on.",
      },
    ],
  },
  {
    label: "Guest Experience",
    title: "Telos Haven",
    description:
      "The in-room experience layer across TV and phone, giving guests direct control over requests, room preferences, hotel answers, and service tracking.",
    capabilities: [
      {
        name: "TV and Phone Flow",
        detail: "Guests can scan, tap, or open a room experience that stays connected to hotel operations.",
      },
      {
        name: "Stay Controls",
        detail: "Supports room controls, DND, towels, housekeeping, late checkout, concierge answers, and local recommendations.",
      },
      {
        name: "Personalized Help",
        detail: "Guest preferences and service history inform responses while staff can take over when needed.",
      },
    ],
  },
  {
    label: "Owner Intelligence",
    title: "Telos Horizon",
    description:
      "The owner intelligence platform for portfolio visibility, revenue leakage, labor drag, reviews, group quotes, market demand, and daily decisions.",
    capabilities: [
      {
        name: "Portfolio Command Center",
        detail: "Compares properties by occupancy, ADR, RevPAR, labor efficiency, reviews, and operational risk.",
      },
      {
        name: "Revenue Decisions",
        detail: "Flags underpriced nights, OTA leakage, group quote risk, demand shifts, and rate recommendations.",
      },
      {
        name: "Owner Morning Brief",
        detail: "Creates a 6 a.m. operating brief with what changed, where money is leaking, and what needs a decision.",
      },
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-[76rem] px-6 py-16 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 max-w-3xl"
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Platform modules
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          One hotel operations brain across every workflow.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Telos connects guest intent to staff action, then turns the operating record into owner intelligence and revenue recommendations.
        </p>
      </motion.div>

      <div className="space-y-12">
        {modules.map((mod, modIdx) => (
          <motion.div
            key={mod.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: modIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-border bg-card p-6 md:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="inline-flex h-7 items-center rounded-full bg-foreground px-3 text-[11px] font-medium uppercase tracking-wide text-background">
                  {mod.label}
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {mod.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {mod.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {mod.capabilities.map((cap, capIdx) => (
                  <motion.div
                    key={cap.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + capIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl border border-border bg-background p-5"
                  >
                    <h4 className="text-sm font-semibold tracking-tight text-foreground">
                      {cap.name}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {cap.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
