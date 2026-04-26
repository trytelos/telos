"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { 
  Users, 
  Search, 
  FileText, 
  BarChart2, 
  Key, 
  Database, 
  Activity, 
  Lock, 
  Share2,
  ChevronDown,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const features = [
  { icon: <Users className="h-4 w-4" />, text: "Unlimited manager and staff seats" },
  { icon: <Search className="h-4 w-4" />, text: "Guest profiles across properties" },
  { icon: <FileText className="h-4 w-4" />, text: "Automated guest request capture" },
  { icon: <BarChart2 className="h-4 w-4" />, text: "Stay and service analytics" },
  { icon: <Key className="h-4 w-4" />, text: "SSO" },
  { icon: <Database className="h-4 w-4" />, text: "PMS, PBX, and TV integrations" },
  { icon: <Activity className="h-4 w-4" />, text: "Front desk usage analytics" },
  { icon: <Lock className="h-4 w-4" />, text: "Internal access control" },
  { icon: <Share2 className="h-4 w-4" />, text: "Shared workflows across teams" },
];

type Status = "idle" | "sending" | "sent" | "error";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

function field(fd: FormData, name: string): string {
  const v = fd.get(name);
  return typeof v === "string" ? v : "";
}

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setErrorMsg(
        "Contact form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment (Vercel → Settings → Environment Variables) and redeploy."
      );
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    const firstName = field(fd, "firstName");
    const lastName = field(fd, "lastName");
    const email = field(fd, "email").trim();
    const fullName = `${firstName} ${lastName}`.trim() || "Unknown";
    const company = field(fd, "company");

    const messageBody = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${field(fd, "countryCode") || "+1"} ${field(fd, "phone")}`,
      `Company: ${company}`,
      `Property size: ${field(fd, "companySize")}`,
      `Job title: ${field(fd, "jobTitle")}`,
      `Use case: ${field(fd, "useCase")}`,
      `Evaluation stage: ${field(fd, "stage")}`,
      "",
      "Message:",
      field(fd, "message") || "(none)",
    ].join("\n");

    // Web3Forms free tier: submit from the browser only (server-side fetch requires paid + IP allowlist).
    const payload = {
      access_key: accessKey,
      subject: `Telos Contact - ${fullName}${company ? ` (${company})` : ""}`,
      from_name: fullName,
      name: fullName,
      email,
      replyto: email,
      message: messageBody,
    };

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: { success?: boolean; message?: string; body?: { message?: string } } = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        setErrorMsg("Could not read the email service response. Please try again.");
        setStatus("error");
        return;
      }

      const errText =
        data.message ?? data.body?.message ?? (res.ok ? undefined : `HTTP ${res.status}`);

      if (data.success) {
        setStatus("sent");
        form.reset();
        return;
      }

      setErrorMsg(errText || "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-background pt-28 pb-24 font-sans">
      <div className="mx-auto max-w-[72rem] px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-12 lg:gap-20 items-start">
          
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl"
          >
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>
                AI hospitality agents for your property
              </h1>
              <p className="text-base text-muted-foreground">
                Tell us about your hotel, portfolio, or guest experience rollout.
              </p>
            </div>

            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 bg-white dark:bg-card rounded-2xl border border-border p-8 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">Message sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thanks for reaching out. One of our hospitality AI specialists will get back to you shortly.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setStatus("idle")}
                  className="rounded-full"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-semibold text-foreground">First name <span className="text-red-500">*</span></Label>
                    <Input name="firstName" id="firstName" required className="h-11 rounded-lg bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-foreground" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">Last name <span className="text-red-500">*</span></Label>
                    <Input name="lastName" id="lastName" required className="h-11 rounded-lg bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-foreground" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">Work email <span className="text-red-500">*</span></Label>
                    <Input name="email" id="email" type="email" required className="h-11 rounded-lg bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-foreground" placeholder="name@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone number <span className="text-red-500">*</span></Label>
                    <div className="flex gap-2">
                      <div className="relative w-20">
                        <select name="countryCode" className="w-full h-11 rounded-lg bg-secondary/50 border-0 px-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-foreground">
                          <option>+1</option>
                          <option>+44</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                      <Input name="phone" id="phone" type="tel" required className="flex-1 h-11 rounded-lg bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-foreground" placeholder="Please enter" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold text-foreground">Company name <span className="text-red-500">*</span></Label>
                    <Input name="company" id="company" required className="h-11 rounded-lg bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-foreground" placeholder="Please enter your company name" />
                  </div>
                  <div className="space-y-2 relative">
                    <Label htmlFor="companySize" className="text-sm font-semibold text-foreground">Property size <span className="text-red-500">*</span></Label>
                    <select name="companySize" id="companySize" required className="w-full h-11 rounded-lg bg-secondary/50 border-0 px-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-foreground text-muted-foreground" defaultValue="">
                      <option value="" disabled>Select property size</option>
                      <option value="Under 60 rooms">Under 60 rooms</option>
                      <option value="60-150 rooms">60-150 rooms</option>
                      <option value="151-300 rooms">151-300 rooms</option>
                      <option value="300+ rooms">300+ rooms</option>
                      <option value="Multi-property group">Multi-property group</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-[38px] h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    <Label htmlFor="jobTitle" className="text-sm font-semibold text-foreground">Job title <span className="text-red-500">*</span></Label>
                    <select name="jobTitle" id="jobTitle" required className="w-full h-11 rounded-lg bg-secondary/50 border-0 px-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-foreground text-muted-foreground" defaultValue="">
                      <option value="" disabled>Please select</option>
                      <option value="Owner / Operator">Owner / Operator</option>
                      <option value="General Manager">General Manager</option>
                      <option value="Front Desk / Stay Manager">Front Desk / Stay Manager</option>
                      <option value="IT / Digital Experience">IT / Digital Experience</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-[38px] h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                  <div className="space-y-2 relative">
                    <Label htmlFor="useCase" className="text-sm font-semibold text-foreground">What do you plan to use Telos for? <span className="text-red-500">*</span></Label>
                    <select name="useCase" id="useCase" required className="w-full h-11 rounded-lg bg-secondary/50 border-0 px-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-foreground text-muted-foreground" defaultValue="">
                      <option value="" disabled>Select your use case</option>
                      <option value="Telos Haven guest app">Telos Haven guest app</option>
                      <option value="Telos Watch front desk copilot">Telos Watch front desk copilot</option>
                      <option value="Both products">Both products</option>
                      <option value="Multi-property rollout">Multi-property rollout</option>
                      <option value="Custom integration">Custom integration</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-[38px] h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <Label htmlFor="stage" className="text-sm font-semibold text-foreground">Which stage of evaluation are you at? <span className="text-red-500">*</span></Label>
                  <select name="stage" id="stage" required className="w-full h-11 rounded-lg bg-secondary/50 border-0 px-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-foreground text-muted-foreground" defaultValue="">
                    <option value="" disabled>Select your evaluation stage</option>
                    <option value="Just exploring">Just exploring</option>
                    <option value="Evaluating options">Evaluating options</option>
                    <option value="Ready to purchase">Ready to purchase</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-[38px] h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-foreground">Can you share more about your business needs and challenges?</Label>
                  <Textarea 
                    name="message"
                    id="message" 
                    className="min-h-[100px] rounded-lg bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-foreground resize-none p-3 text-sm" 
                    placeholder="e.g., We want to reduce front desk call volume and give guests TV and phone-based room control..." 
                  />
                </div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {errorMsg}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full h-12 rounded-full text-base font-medium mt-6 bg-foreground text-background hover:opacity-90 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </Button>

                <p className="text-sm text-muted-foreground mt-4">
                  For tech or product support please visit our <Link href="#" className="underline hover:text-foreground">help center</Link>.
                </p>
              </form>
            )}
          </motion.div>

          {/* Right: Image + Frosted Glass Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[700px] rounded-3xl overflow-hidden shadow-xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-muted"
              style={{ backgroundImage: "url('/contact-bg.png')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 mix-blend-overlay" />
            </div>

            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 lg:inset-x-8 rounded-2xl bg-white/70 dark:bg-black/60 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6 md:p-8 shadow-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-6">Features</h3>
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                    <div className="text-foreground/60 shrink-0">
                      {feature.icon}
                    </div>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
