/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/waitlist-form";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const proofItems = [
  "Front desk copilot",
  "Guest room experience",
  "Owner intelligence",
  "PMS-connected workflows",
  "Multi-property reporting",
];

const navGroups = [
  {
    label: "Operations",
    items: ["Dashboard", "Live Requests", "Room Board", "Housekeeping", "Staff Schedule"],
  },
  {
    label: "Copilot",
    items: ["Call Copilot", "Guest Profiles", "AI Inbox"],
  },
  {
    label: "Revenue",
    items: ["Forecast", "Pricing", "Compset"],
  },
  {
    label: "Owner Intelligence",
    items: ["Portfolio", "Morning Brief", "Revenue Leaks", "Dynamic Pricing", "Labor Optimizer"],
  },
];

function ProductMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
      <div className="grid min-h-[520px] grid-cols-1 md:grid-cols-[220px_1fr]">
        <aside className="border-b border-border bg-[#27251f] p-4 text-[#f7f1e6] md:border-b-0 md:border-r">
          <div className="mb-6 flex items-center gap-2">
            <img src="/watticon_transparent.png" alt="Telos" className="h-6 w-6 invert" />
            <span className="text-sm font-semibold">Telos Engine</span>
          </div>
          <div className="space-y-4">
            {navGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b9b0a0]">
                  {group.label}
                </p>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-md px-3 py-2 text-xs text-[#ece6dc] data-[active=true]:bg-[#f4efe5] data-[active=true]:text-[#27251f]"
                      data-active={item === "Morning Brief" || item === "Live Requests"}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
        <div className="bg-[#f8f4ec] p-5 text-[#312f2a]">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#786f62]">
                Owner Morning Brief
              </p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                6 decisions need attention
              </h3>
            </div>
            <div className="rounded-full bg-[#312f2a] px-4 py-2 text-xs font-medium text-[#fbf7ef]">
              Hotel-safe agents active
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {[
              ["Revenue leak", "$4,820", "OTA mix rose on 3 high-demand nights"],
              ["Labor drag", "18 hrs", "Housekeeping schedule above forecast"],
              ["Guest recovery", "7 rooms", "Noise complaints need manager review"],
            ].map(([label, value, detail]) => (
              <div key={label} className="rounded-xl border border-[#ded5c5] bg-[#fffaf0] p-4">
                <p className="text-xs font-medium text-[#786f62]">{label}</p>
                <p className="mt-2 text-2xl font-semibold">{value}</p>
                <p className="mt-2 text-xs leading-relaxed text-[#786f62]">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-xl border border-[#ded5c5] bg-[#fffaf0] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold">Live Requests</p>
                <span className="rounded-full bg-[#e8dfcf] px-2 py-1 text-[11px]">Audit logged</span>
              </div>
              {[
                ["Room 1208", "Towels and late checkout", "Assigned to housekeeping"],
                ["Room 804", "Call about AC noise", "Escalated to maintenance"],
                ["Front desk", "Group quote needs rate floor", "Draft recommendation"],
              ].map(([room, issue, status]) => (
                <div key={room} className="flex items-start justify-between gap-3 border-t border-[#ebe3d5] py-3">
                  <div>
                    <p className="text-sm font-medium">{room}</p>
                    <p className="text-xs text-[#786f62]">{issue}</p>
                  </div>
                  <span className="max-w-[130px] text-right text-xs text-[#514b41]">{status}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-[#ded5c5] bg-[#312f2a] p-4 text-[#fbf7ef]">
              <p className="text-sm font-semibold">Ask Horizon</p>
              <p className="mt-3 rounded-lg bg-[#454137] p-3 text-sm leading-relaxed text-[#f2eadc]">
                Which property has the highest revenue leakage this week?
              </p>
              <div className="mt-3 rounded-lg bg-[#f8f4ec] p-3 text-sm leading-relaxed text-[#312f2a]">
                Property 3. Most leakage is underpriced Saturday inventory and two rooms out of order.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative mx-auto max-w-[76rem] px-6 pb-12 pt-24 md:px-8 md:pt-28">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex h-8 items-center gap-2 rounded-full border border-border bg-muted px-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            AI operating layer for hotels
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            The AI operating layer for hotels.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Telos connects guest requests, staff workflows, property systems, and owner intelligence into one action layer,
            helping hotels resolve requests faster, reduce labor drag, improve guest experience, and make better revenue decisions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button className="h-11 w-full rounded-full px-7 text-sm font-medium sm:w-auto">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" className="h-11 w-full rounded-full px-7 text-sm font-medium sm:w-auto">
                Explore Platform
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {proofItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-foreground" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5"
        >
          <ProductMockup />
        </motion.div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_420px]">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            System of action
          </p>
          <p className="mt-3 max-w-3xl text-xl font-medium leading-relaxed text-foreground">
            Hotels do not need another disconnected tool. Telos captures guest intent through Haven,
            converts it into staff action through Watch, and turns property activity into owner intelligence through Horizon.
          </p>
        </div>
        <WaitlistForm compact />
      </div>
    </section>
  );
}
