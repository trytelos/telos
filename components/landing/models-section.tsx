"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const models = [
  {
    name: "Watch",
    description: "Telos Watch is the front desk copilot for busy hotel teams. It answers calls, resolves guest requests, surfaces guest context, and suggests the next operational action when staff are stretched thin.",
    linkText: "Read announcement",
    date: "April 26, 2026",
    category: "Front Desk Agent",
  },
  {
    name: "Haven",
    description: "Telos Haven is the guest experience app for the room. Guests control the TV from their phone, request housekeeping, toggle DND, message an AI assistant, and discover hotel offerings in one place.",
    linkText: "Read announcement",
    date: "April 26, 2026",
    category: "Guest Experience",
  }
];

export default function ModelsSection() {
  return (
    <section className="mx-auto max-w-[72rem] px-6 md:px-8 py-12 bg-background">
      <div className="mb-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Product suite
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {models.map((model, idx) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col bg-[#EBE7DF] dark:bg-[#2A2926] rounded-2xl p-8 h-full"
          >
            <div className="mb-12">
              <h3 className="flex items-center gap-0.5 text-2xl font-semibold tracking-tight text-foreground mb-4">
                <img 
                  src="/watticon_transparent.png" 
                  alt="Telos" 
                  className="h-7 w-7 object-contain dark:invert" 
                />
                Telos {model.name}
              </h3>
              <p className="text-foreground/80 leading-relaxed font-serif text-lg mb-6">
                {model.description}
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                {model.linkText} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between py-4 border-b border-foreground/10">
                <span className="text-xs font-semibold tracking-widest uppercase text-foreground/60">Date</span>
                <span className="text-sm font-medium text-foreground">{model.date}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-foreground/10">
                <span className="text-xs font-semibold tracking-widest uppercase text-foreground/60">Category</span>
                <span className="text-sm font-medium text-foreground">{model.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
