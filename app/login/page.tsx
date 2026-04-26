/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 relative">
      <div className="absolute top-6 left-6 flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>
      </div>
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm space-y-8"
      >
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <img
              src="/watticon_transparent.png"
              alt="Telos"
              className="h-8 w-8 object-contain dark:invert"
            />
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Telos Login
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to access your hospitality operations dashboard
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              required
              className="h-11 rounded-xl bg-muted border-0 focus-visible:ring-1 focus-visible:ring-foreground"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              className="h-11 rounded-xl bg-muted border-0 focus-visible:ring-1 focus-visible:ring-foreground"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-11 rounded-xl text-sm font-medium mt-2"
          >
            Sign In
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/#cta"
            className="font-medium text-foreground hover:underline underline-offset-4"
          >
            Request access
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
