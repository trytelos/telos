"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Telos?",
    answer: "Telos is a hospitality AI platform for hotels. Telos Watch supports front desk and stay managers, while Telos Haven gives guests a modern TV and phone-based room experience."
  },
  {
    question: "What does Telos Watch do?",
    answer: "Telos Watch acts as a front desk copilot. It can handle overflow calls, answer common service questions, build guest context across stays, and suggest actions for managers to approve or execute."
  },
  {
    question: "What does Telos Haven do for guests?",
    answer: "Telos Haven gives guests a web app for room control, housekeeping requests, DND, towels, late checkout, hotel offerings, food options, entertainment, and AI messaging connected to the front desk."
  },
  {
    question: "Does Telos integrate with hotel systems?",
    answer: "Yes. Telos is designed to sync room status, guest requests, and stay management workflows with a hotel PMS and front desk dashboard."
  },
  {
    question: "How is Telos priced?",
    answer: "Telos is sold B2B to hotels with a monthly platform subscription and a per-room or per-device component depending on the property size and product bundle."
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
