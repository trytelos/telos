"use client";

import { motion } from "framer-motion";

const modules = [
  {
    label: "Intelligent Operations",
    title: "Telos Watch",
    description:
      "A front desk and stay manager copilot that keeps service moving when the phone is ringing, the lobby is full, and guest requests are piling up.",
    capabilities: [
      {
        name: "Overflow Call Agent",
        detail: "Handles guest calls when the front desk is busy, answers common questions, captures intent, and routes urgent issues back to staff.",
      },
      {
        name: "Guest Profiles",
        detail: "Builds a useful hospitality memory across the property and Telos database so teams understand preferences, history, and service context.",
      },
      {
        name: "Suggested Actions",
        detail: "Turns conversations into computer-use actions, task suggestions, and manager-ready next steps for faster resolution.",
      },
    ],
  },
  {
    label: "Smart Guest Experience",
    title: "Telos Haven",
    description:
      "A guest web app anchored around the in-room TV and controlled by phone, giving every guest a modern command center for the stay.",
    capabilities: [
      {
        name: "TV + Phone Control",
        detail: "Guests log in with room number and last name, then tap or scan to control TV, streaming, welcome screens, and room experiences.",
      },
      {
        name: "Stay Management",
        detail: "Room status, housekeeping, DND, towels, local offerings, hotel amenities, food options, and late checkout requests in one place.",
      },
      {
        name: "AI Guest Assistant",
        detail: "Guest messages flow into an AI assistant connected to the front desk dashboard, reducing repetitive tickets while preserving human escalation.",
      },
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-[72rem] px-6 md:px-8 py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20"
      >
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
          Platform
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Two products. One stay layer.
        </h2>
        <p className="mt-4 mx-auto max-w-xl text-base text-muted-foreground leading-relaxed">
          Telos connects the front desk, the in-room TV, the guest phone, and the PMS so hospitality teams can serve more guests without adding chaos.
        </p>
      </motion.div>

      <div className="space-y-20">
        {modules.map((mod, modIdx) => (
          <motion.div
            key={modIdx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: modIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-7 items-center rounded-full bg-foreground px-3 text-[11px] font-medium tracking-wide text-background uppercase">
                {mod.label}
              </span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-2 sm:text-3xl">
              {mod.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {mod.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mod.capabilities.map((cap, capIdx) => (
                <motion.div
                  key={capIdx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + capIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-2xl border border-border bg-card p-6 hover:bg-muted/50 transition-colors duration-300"
                >
                  <h4 className="text-sm font-semibold tracking-tight text-foreground mb-2">
                    {cap.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cap.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
