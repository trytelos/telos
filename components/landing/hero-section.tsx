"use client";

import { Button } from "@/components/ui/button";
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

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto max-w-[76rem] px-6 pb-16 pt-28 text-center md:px-8 md:pb-20 md:pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-4xl flex-col items-center"
      >
        <div className="inline-flex h-8 items-center gap-2 rounded-full border border-border bg-muted px-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          Operating layer for hotels
        </div>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
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

        <div className="mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
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
    </section>
  );
}
