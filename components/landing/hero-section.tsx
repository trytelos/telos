/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto mt-16 mb-0 max-w-[72rem] px-6 text-center md:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex h-8 items-center gap-2 rounded-full border border-border bg-muted px-4 text-xs font-medium text-muted-foreground tracking-wide uppercase"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
        AI agents for hospitality operations
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center py-4"
      >
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-[-0.08em] text-foreground"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Telos
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mb-8 max-w-2xl text-base leading-relaxed tracking-tight text-muted-foreground md:text-lg"
      >
        The hospitality AI platform that gives hotels a tireless front desk copilot
        and gives guests a room experience that starts on the TV, continues on the
        phone, and stays synced with hotel operations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="flex gap-3 justify-center"
      >
        <Link href="/login">
          <Button className="h-11 px-8 rounded-full text-sm font-medium gap-2 group">
            Request Demo
            <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </Link>
        <Link href="/features">
          <Button variant="outline" className="h-11 px-8 rounded-full text-sm font-medium">
            Explore Products
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
