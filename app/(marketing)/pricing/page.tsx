"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Sparkles,
  FileSearch,
  Layers,
  Activity,
  FlaskConical,
  ListChecks,
  Building2,
  ShieldCheck,
  ArrowUpRight,
  Zap,
  Globe,
  Users,
  Database,
  Code2,
  Network,
  BarChart3,
  Shield,
  Cpu,
  Gauge,
  KeyRound,
  Webhook,
  CircleDollarSign,
} from "lucide-react";

const plans = [
  {
    name: "Boutique",
    monthlyPrice: 1800,
    yearlyPrice: 1500,
    arr: "$21.6K",
    target: "Independent hotel, up to 60 rooms, one property",
    buttonText: "Get Started",
    buttonVariant: "default",
    features: [
      { icon: <Sparkles className="h-4 w-4" />, text: "Telos Haven guest web app" },
      { icon: <FileSearch className="h-4 w-4" />, text: "TV pairing by QR code or tap" },
      { icon: <Globe className="h-4 w-4" />, text: "Room requests, DND, towels, late checkout" },
      { icon: <Layers className="h-4 w-4" />, text: "Basic front desk dashboard" },
      { icon: <BarChart3 className="h-4 w-4" />, text: "Guest engagement analytics" },
      { icon: <ListChecks className="h-4 w-4" />, text: "$8 per active room / month" },
      { icon: <Activity className="h-4 w-4" />, text: "Email support" },
    ],
  },
  {
    name: "Property",
    monthlyPrice: 5200,
    yearlyPrice: 4300,
    arr: "$62.4K",
    target: "Full-service hotel, 60-250 rooms, active front desk team",
    buttonText: "Start Free Trial",
    buttonVariant: "blue",
    highlight: true,
    features: [
      { icon: <Sparkles className="h-4 w-4" />, text: "Telos Haven + Telos Watch" },
      { icon: <FileSearch className="h-4 w-4" />, text: "Overflow call agent for front desk" },
      { icon: <Globe className="h-4 w-4" />, text: "PMS-synced stay management" },
      { icon: <Network className="h-4 w-4" />, text: "Guest profiles across stays" },
      { icon: <BarChart3 className="h-4 w-4" />, text: "Service volume and resolution analytics" },
      { icon: <Zap className="h-4 w-4" />, text: "Suggested computer-use actions" },
      { icon: <Users className="h-4 w-4" />, text: "Up to 25 staff seats" },
      { icon: <FlaskConical className="h-4 w-4" />, text: "Priority onboarding + support" },
    ],
  },
  {
    name: "Portfolio",
    monthlyPrice: 12500,
    yearlyPrice: 10400,
    arr: "$150K",
    target: "Hotel group, 3-10 properties, shared ops team",
    buttonText: "Contact Sales",
    buttonVariant: "default",
    features: [
      { icon: <Sparkles className="h-4 w-4" />, text: "Full Telos Watch + Haven platform" },
      { icon: <FileSearch className="h-4 w-4" />, text: "Multi-property guest profiles" },
      { icon: <Globe className="h-4 w-4" />, text: "Custom local and hotel offering flows" },
      { icon: <Database className="h-4 w-4" />, text: "Portfolio data warehouse export" },
      { icon: <Network className="h-4 w-4" />, text: "Centralized manager console" },
      { icon: <BarChart3 className="h-4 w-4" />, text: "Property-level performance benchmarks" },
      { icon: <Users className="h-4 w-4" />, text: "Unlimited staff seats" },
      { icon: <Shield className="h-4 w-4" />, text: "SSO / SAML + audit logs" },
      { icon: <Cpu className="h-4 w-4" />, text: "Dedicated success manager" },
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 32000,
    yearlyPrice: 26600,
    arr: "$384K",
    target: "Brand, resort group, or managed service deployment",
    buttonText: "Talk to Us",
    buttonVariant: "default",
    features: [
      { icon: <Sparkles className="h-4 w-4" />, text: "White-label Telos deployment" },
      { icon: <Database className="h-4 w-4" />, text: "Private cloud / VPC option" },
      { icon: <Globe className="h-4 w-4" />, text: "Brand-specific guest journeys" },
      { icon: <Network className="h-4 w-4" />, text: "Custom PMS, PBX, and TV integrations" },
      { icon: <BarChart3 className="h-4 w-4" />, text: "Revenue and service intelligence" },
      { icon: <Shield className="h-4 w-4" />, text: "SOC 2 readiness + custom compliance" },
      { icon: <Users className="h-4 w-4" />, text: "Unlimited seats + role-based access" },
      { icon: <Cpu className="h-4 w-4" />, text: "Dedicated infra + SLA guarantee" },
      { icon: <Code2 className="h-4 w-4" />, text: "Full API access included" },
    ],
  },
];

const apiTiers = [
  {
    name: "Developer",
    price: "Free",
    subtitle: "up to 100 calls / month",
    features: ["Guest messaging endpoint", "Room status sync", "Rate limited (10 req/min)", "Community support"],
  },
  {
    name: "Scale",
    price: "$0.50",
    subtitle: "per API call",
    features: ["Watch + Haven endpoints", "Batch request updates", "100 req/min", "Webhook callbacks", "Priority support"],
  },
  {
    name: "Volume",
    price: "Custom",
    subtitle: "10,000+ calls / month",
    features: ["Dedicated throughput", "Custom models", "SLA guarantee (99.9%)", "Dedicated endpoint", "Account manager"],
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 font-sans">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Telos Pricing
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8">
            B2B plans for hotels, from boutique properties to multi-property hospitality groups.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-full border border-border">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                !isYearly
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                isYearly
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Annually · Save ~17%
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards — 4-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-20">
          {plans.map((plan, idx) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isGrowth = plan.name === "Property";

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-7 bg-card",
                  isGrowth ? "border-[#007BFF] border-2 shadow-sm" : "border-border"
                )}
              >
                {isGrowth && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#007BFF] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold tracking-tight text-foreground">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">/ mo</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-5 leading-relaxed border-b border-border pb-4">
                  {plan.target}
                </p>

                <Link href={plan.name === "Enterprise" ? "/contact" : "/login"} className="w-full mb-6">
                  <Button
                    className={cn(
                      "w-full h-11 rounded-full font-medium text-sm transition-all",
                      isGrowth
                        ? "bg-[#007BFF] hover:bg-[#0056b3] text-white"
                        : "bg-foreground text-background hover:opacity-90"
                    )}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>

                <ul className="space-y-3 mt-auto">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <div className="mt-0.5 shrink-0 text-foreground/70">{feature.icon}</div>
                      <span className="leading-relaxed">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* ── API Pricing Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-xs font-medium text-muted-foreground mb-4">
              <Code2 className="h-3.5 w-3.5" />
              Integration Access
            </div>
            <h2
              className="text-3xl font-bold tracking-tight text-foreground mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Build with the Telos API
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Connect guest requests, room status, AI messages, and service workflows
              directly into your PMS, PBX, TV stack, or internal tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {apiTiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-bold tracking-tight text-foreground">
                    {tier.price}
                  </span>
                  {tier.price !== "Free" && tier.price !== "Custom" && (
                    <span className="text-xs text-muted-foreground">/ call</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-5">{tier.subtitle}</p>

                <ul className="space-y-2.5 mt-auto">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Gauge className="h-3.5 w-3.5 mt-0.5 shrink-0 text-foreground/60" />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* API key CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <KeyRound className="h-4 w-4" />
              <span>Connect your hotel systems in days</span>
            </div>
            <Link href="/login">
              <Button variant="outline" className="rounded-full h-10 px-6 font-medium gap-2">
                View Integrations <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* ── Bottom Banners ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl border border-border bg-card gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-muted rounded-xl">
                <Building2 className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground">
                  Custom Plans for Hotels & Portfolios
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Need per-device pricing, custom PMS coverage, or brand-specific workflows? Let&apos;s talk.
                </p>
              </div>
            </div>
            <Link href="/contact">
              <Button variant="outline" className="rounded-full h-10 px-6 font-medium">
                Contact Sales
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl border border-border bg-card gap-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="p-2 border border-border rounded-lg bg-muted/50 flex flex-col items-center justify-center w-12 h-12">
                  <span className="text-[8px] font-bold leading-none">AICPA</span>
                  <span className="text-[10px] font-bold leading-none mt-0.5">SOC 2</span>
                  <span className="text-[6px] text-muted-foreground leading-none mt-0.5">TYPE II</span>
                </div>
                <div className="p-2 border border-border rounded-lg bg-muted/50 flex flex-col items-center justify-center w-12 h-12">
                  <ShieldCheck className="h-5 w-5 text-foreground mb-0.5" />
                  <span className="text-[6px] font-bold leading-none">ISO 27001</span>
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground">Security & Compliance</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Enterprise-grade security with industry-standard certifications.
                </p>
              </div>
            </div>
            <Link href="/contact">
              <Button variant="outline" className="rounded-full h-10 px-6 font-medium gap-2">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Questions?{" "}
            <Link href="/contact" className="underline hover:text-foreground">
              Contact our team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
