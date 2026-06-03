"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Telos?",
    answer: "Telos is the AI operating layer for hotels. It sits above property systems and turns guest intent, staff workflows, and owner reporting into one system of action."
  },
  {
    question: "What products are included?",
    answer: "Telos Engine powers the platform. Telos Watch supports staff operations, Telos Haven supports the guest room experience, and Telos Horizon gives owners performance intelligence."
  },
  {
    question: "Are the agents controlled by hotel teams?",
    answer: "Yes. Telos positions agents as hotel-safe workflows with property rules, human escalation, and audit logs. They assist with calls, tasks, incidents, guest questions, revenue flags, and owner briefs."
  },
  {
    question: "Does Telos integrate with hotel systems?",
    answer: "Yes. Telos is designed for PMS, PBX, guest messaging, housekeeping, maintenance, reviews, payments, CRS, RMS, TV systems, and reporting exports."
  },
  {
    question: "Where are waitlist submissions stored?",
    answer: "The waitlist API writes JSONL records to data/waitlist-submissions.jsonl by default. Set WAITLIST_STORAGE_PATH to point production submissions to another server-writable path."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-[48rem] px-6 md:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Frequently asked questions
        </h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-border rounded-2xl bg-card overflow-hidden transition-colors hover:bg-muted/50"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="text-base font-medium text-foreground">{faq.question}</span>
              <ChevronDown 
                className={cn(
                  "h-5 w-5 text-muted-foreground transition-transform duration-300",
                  openIndex === index && "rotate-180"
                )} 
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
