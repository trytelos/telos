/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "Platform", href: "/features" },
  { label: "Horizon", href: "/features#horizon" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", mobileOpen);
  }, [mobileOpen]);

  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-14 max-w-[72rem] items-center justify-between px-6 md:px-8">
          <Link href="/" className="flex items-center gap-2.5 font-semibold text-foreground tracking-tight">
            <img
              src="/watticon_transparent.png"
              alt="Telos"
              className="h-5 w-5 object-contain dark:invert"
            />
            <span className="text-sm">Telos</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 px-4 py-2 rounded-full transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login" className="hidden md:block">
              <Button variant="ghost" size="sm" className="text-sm font-medium rounded-full h-8 px-4">
                Log in
              </Button>
            </Link>
            <Link href="/contact" className="hidden md:block">
              <Button size="sm" className="text-sm font-medium rounded-full h-8 px-4">
                Request Demo
              </Button>
            </Link>
            <button
              className="ml-2 md:hidden p-1"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span className="sr-only">Menu</span>
              {mobileOpen ? <XIcon className="h-5 w-5" /> : <AlignJustify className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-medium text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="rounded-full px-8 h-11">Request Demo</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
