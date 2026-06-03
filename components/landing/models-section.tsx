"use client";

import { motion } from "framer-motion";
import { Building2, ClipboardList, MonitorSmartphone } from "lucide-react";

const products = [
  {
    name: "Telos Watch",
    category: "Staff operations and front desk copilot",
    icon: ClipboardList,
    description:
      "Telos Watch is the operations copilot for hotel teams. It answers overflow calls, captures guest intent, surfaces guest context, creates tasks, logs incidents, and keeps front desk, housekeeping, maintenance, and managers aligned.",
    features: [
      "Overflow call copilot",
      "Live requests",
      "Room board",
      "Housekeeping coordination",
      "Staff schedule visibility",
      "AI inbox",
      "Guest profiles",
      "Incident logging",
      "Daily and nightly reports",
    ],
  },
  {
    name: "Telos Haven",
    category: "Guest experience through phone and TV",
    icon: MonitorSmartphone,
    description:
      "Telos Haven is the guest experience layer for the room. Guests use the TV or phone to control their stay, request service, toggle DND, ask questions, discover hotel offerings, and receive personalized help.",
    features: [
      "TV and phone guest app",
      "Room controls",
      "DND, towels, housekeeping, late checkout",
      "Concierge and local recommendations",
      "Guest preferences",
      "Service request tracking",
      "Personalized stay experience",
    ],
  },
  {
    name: "Telos Horizon",
    category: "Owner intelligence and portfolio performance",
    icon: Building2,
    description:
      "Telos Horizon is the owner intelligence platform for hotel performance. It gives owners and management groups a live view of revenue, occupancy, labor, reviews, direct bookings, revenue leaks, group quotes, market demand, and portfolio performance.",
    features: [
      "Portfolio command center",
      "Owner morning brief",
      "Revenue leak finder",
      "Dynamic pricing recommendations",
      "Labor optimizer",
      "Review-to-revenue engine",
      "Local market pulse",
      "Group quote optimizer",
      "Ask Horizon",
      "Daily report and analytics",
    ],
  },
];

export default function ModelsSection() {
  return (
    <section className="mx-auto max-w-[76rem] bg-background px-6 py-16 md:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Product suite
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Three products. One hotel operating layer.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Telos Engine powers Watch, Haven, and Horizon so guest intent, staff action, and owner reporting stay connected.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {products.map((product, idx) => {
          const Icon = product.icon;

          return (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {product.category}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                {product.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-foreground/80">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
