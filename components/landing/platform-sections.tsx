import {
  Activity,
  BarChart3,
  BedDouble,
  ClipboardCheck,
  Database,
  DollarSign,
  FileText,
  Headphones,
  LineChart,
  Network,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const audienceCards = [
  ["Guests", "Request service, control the room, message the hotel, and receive personalized help."],
  ["Staff", "Answer calls, see guest context, resolve requests, and manage assigned tasks."],
  ["Managers", "Monitor room status, housekeeping, maintenance, incidents, and daily reports."],
  ["Owners", "Track revenue, labor, reviews, direct bookings, and portfolio performance."],
];

const engineCards = [
  {
    title: "Signal Layer",
    icon: Network,
    copy: "PMS, PBX, TV, guest app, housekeeping, maintenance, reviews, payments, CRS, and RMS.",
  },
  {
    title: "Agent Layer",
    icon: Sparkles,
    copy: "Call agent, task agent, incident agent, guest agent, revenue agent, and owner brief agent.",
  },
  {
    title: "Action Layer",
    icon: ClipboardCheck,
    copy: "Create tasks, assign staff, escalate issues, log incidents, recommend pricing, and generate reports.",
  },
  {
    title: "Memory Layer",
    icon: Database,
    copy: "Guest preferences, service history, property patterns, recurring issues, and owner benchmarks.",
  },
];

const agents = [
  ["Call Copilot Agent", "Answers overflow calls, captures guest intent, summarizes conversations, and routes urgent issues."],
  ["Task Agent", "Turns calls, messages, and room events into assigned tasks for staff."],
  ["Incident Agent", "Logs issues, escalates unresolved problems, and prepares manager reports."],
  ["Guest Agent", "Handles guest questions and requests across phone, TV, and chat."],
  ["Revenue Agent", "Flags underpriced nights, OTA leakage, group quote risks, and demand shifts."],
  ["Owner Brief Agent", "Generates daily owner and manager reports with recommended actions."],
];

const flow = [
  ["Capture intent", "Calls, guest messages, TV actions, room requests, and staff updates enter Telos."],
  ["Understand context", "Telos checks guest profile, room status, PMS data, housekeeping state, open tickets, and property rules."],
  ["Take action", "Telos creates tasks, routes requests, drafts responses, escalates incidents, and recommends next steps."],
  ["Report upward", "Managers receive room, housekeeping, maintenance, and incident reports."],
  ["Improve the asset", "Horizon turns operations into revenue, labor, reputation, and portfolio intelligence for owners."],
];

const horizonModules = [
  ["Portfolio", "Compare properties by occupancy, ADR, RevPAR, labor efficiency, reviews, and operational risk."],
  ["Morning Brief", "A 6 a.m. owner-ready summary of what happened, what changed, and what needs a decision."],
  ["Revenue Leaks", "Quantify underpricing, OTA commissions, rooms out of order, missed upsells, and labor overspend."],
  ["Dynamic Pricing", "Recommend 7/30/60/90-day rate changes based on demand, comp set, booking pace, and local events."],
  ["Labor Optimizer", "Forecast staffing needs from occupancy, arrivals, departures, stayovers, and request volume."],
  ["Reviews", "Connect guest complaints to operational fixes and revenue impact."],
  ["Market Pulse", "Track events, conferences, flights, sports, and local demand shifts."],
  ["Group Quote", "Evaluate group blocks using displacement cost, F&B potential, shoulder nights, and minimum acceptable rate."],
  ["Ask Horizon", "Ask natural language questions over property and portfolio data."],
];

const reports = [
  ["Front Desk Report", "Open requests, guest issues, call summaries, and escalations."],
  ["Manager Daily Report", "Room status, housekeeping, maintenance, staff load, and incidents."],
  ["Owner Morning Brief", "Revenue, labor, reviews, market demand, leakage, and decisions needed."],
  ["Portfolio Report", "Property comparisons, benchmarks, operational risk, and revenue opportunities."],
  ["Investor/Lender Report", "Monthly occupancy, ADR, RevPAR, NOI, DSCR, and asset performance summaries."],
];

const integrations = [
  "PMS",
  "CRS",
  "RMS",
  "Channel manager",
  "Booking engine",
  "PBX/calls",
  "Guest messaging",
  "Housekeeping",
  "Maintenance",
  "POS",
  "Payments",
  "Reviews",
  "TV/in-room systems",
  "Accounting exports",
  "Data warehouse/API",
];

const screenshotCards = [
  {
    title: "Revenue Leaks",
    icon: DollarSign,
    value: "$4,820",
    detail: "Underpriced Saturday inventory and OTA leakage flagged for review.",
  },
  {
    title: "Call Copilot",
    icon: PhoneCall,
    value: "14 calls",
    detail: "Five urgent issues routed, nine guest intents converted to tasks.",
  },
  {
    title: "Group Quote",
    icon: LineChart,
    value: "$179 floor",
    detail: "Displacement cost calculated with shoulder-night upside.",
  },
];

export function PlatformOverviewSection() {
  return (
    <section id="platform" className="mx-auto max-w-[76rem] px-6 py-16 md:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Platform</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          One platform across guests, staff, managers, and owners.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {audienceCards.map(([title, copy]) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EngineSection() {
  return (
    <section className="mx-auto max-w-[76rem] px-6 py-16 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Telos Engine</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The engine behind hotel operations.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Telos Engine sits above the hotel stack. It listens to signals from calls, messages, PMS,
            room status, housekeeping, maintenance, reviews, payments, and revenue tools. Then Telos agents
            turn those signals into assigned tasks, recommended actions, automated reports, guest recovery,
            and owner intelligence.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {engineCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-2xl border border-border bg-card p-5">
                <Icon className="h-5 w-5 text-foreground" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AgentsSection() {
  return (
    <section className="mx-auto max-w-[76rem] px-6 py-16 md:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Hotel-safe agents</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Agents that do the operational work.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Telos agents operate inside property rules, human escalation paths, and audit logs. They make work visible before it becomes a miss.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {agents.map(([title, copy]) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-5">
            <ShieldCheck className="h-5 w-5 text-foreground" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-[76rem] px-6 py-16 md:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">How it works</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          From guest intent to owner decision.
        </h2>
      </div>
      <div className="grid gap-3">
        {flow.map(([title, copy], index) => (
          <div key={title} className="grid gap-4 rounded-2xl border border-border bg-card p-5 md:grid-cols-[90px_220px_1fr] md:items-center">
            <div className="text-sm font-semibold text-muted-foreground">Step {index + 1}</div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HorizonSection() {
  return (
    <section id="horizon" className="mx-auto max-w-[76rem] px-6 py-16 md:px-8">
      <div className="rounded-3xl bg-[#29261f] p-6 text-[#fbf6eb] md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#bcb3a3]">Telos Horizon</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Owner intelligence for hotel performance.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#d8d0c2]">
              Horizon turns daily hotel operations into owner-level decisions. It explains what changed,
              where money is leaking, what needs attention, and which action is worth the most.
            </p>
            <div className="mt-6 grid gap-3">
              {screenshotCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-xl border border-[#504a3e] bg-[#363229] p-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <p className="text-sm font-semibold">{card.title}</p>
                    </div>
                    <p className="mt-2 text-2xl font-semibold">{card.value}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#d8d0c2]">{card.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {horizonModules.map(([title, copy]) => (
              <div key={title} className="rounded-xl border border-[#504a3e] bg-[#312d25] p-4">
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#d8d0c2]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReportsSection() {
  return (
    <section className="mx-auto max-w-[76rem] px-6 py-16 md:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Reports</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Reports for every level of hotel operations.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {reports.map(([title, copy]) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-5">
            <FileText className="h-5 w-5 text-foreground" />
            <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function IntegrationsSection() {
  return (
    <section className="mx-auto max-w-[76rem] px-6 py-16 md:px-8">
      <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 md:p-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Integrations</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Works with the systems hotels already use.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Telos does not replace the hotel stack. It makes the existing stack intelligent and actionable.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {integrations.map((integration) => (
            <span key={integration} className="rounded-full border border-border bg-background px-3 py-2 text-sm text-foreground">
              {integration}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductArchitectureStrip() {
  const items = [
    { title: "Telos Engine", icon: Activity, copy: "Core platform layer" },
    { title: "Telos Watch", icon: Headphones, copy: "Staff operations" },
    { title: "Telos Haven", icon: BedDouble, copy: "Guest experience" },
    { title: "Telos Horizon", icon: BarChart3, copy: "Owner intelligence" },
  ];

  return (
    <section className="mx-auto max-w-[76rem] px-6 py-10 md:px-8">
      <div className="grid gap-4 md:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
              <Icon className="h-5 w-5 text-foreground" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.copy}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function OperationsMockSection() {
  const groups = [
    ["Operations", "Dashboard", "Live Requests", "Room Board", "Housekeeping", "Staff Schedule"],
    ["Copilot", "Call Copilot", "Guest Profiles", "AI Inbox"],
    ["Revenue", "Forecast", "Pricing", "Compset"],
    ["Owner Intelligence", "Portfolio", "Morning Brief", "Revenue Leaks", "Dynamic Pricing", "Labor Optimizer", "Reviews", "Market Pulse", "Group Quote", "Ask Horizon"],
    ["Reports", "Daily Report", "Analytics"],
  ];

  return (
    <section className="mx-auto max-w-[76rem] px-6 py-16 md:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Product structure</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          A hotel command center built around real workflows.
        </h2>
      </div>
      <div className="grid gap-4 rounded-3xl border border-border bg-card p-5 md:grid-cols-5">
        {groups.map(([label, ...items]) => (
          <div key={label} className="rounded-2xl bg-muted p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</h3>
            <div className="mt-4 space-y-2">
              {items.map((item) => (
                <div key={item} className="rounded-lg bg-background px-3 py-2 text-sm text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PlatformPageIntro() {
  return (
    <section className="mx-auto max-w-[76rem] px-6 pb-10 pt-28 md:px-8">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Platform</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          A system of action across the whole property.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Telos connects guest requests, staff workflows, property systems, and owner intelligence so hotels can move
          from fragmented activity to assigned actions, daily reports, recommendations, and automation.
        </p>
      </div>
    </section>
  );
}
