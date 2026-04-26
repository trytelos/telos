"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function QueueJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: Guest arrival (0 to 0.33)
  const section1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 0, -50]);

  // Section 2: Front desk surge (0.33 to 0.66)
  const section2Opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.7], [0, 1, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.7], [50, 0, 0, -50]);

  // Section 3: Stay resolution (0.66 to 1)
  const section3Opacity = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);
  const section3Y = useTransform(scrollYProgress, [0.65, 0.8, 1], [50, 0, 0]);

  // Indicator Transforms
  const dot1Width = useTransform(scrollYProgress, [0, 0.25, 0.35], ["24px", "24px", "8px"]);
  const dot2Width = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], ["8px", "24px", "24px", "8px"]);
  const dot3Width = useTransform(scrollYProgress, [0.55, 0.65, 1], ["8px", "24px", "24px"]);

  const dot1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0.3]);
  const dot2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0.3, 1, 1, 0.3]);
  const dot3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 1], [0.3, 1, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-background -mt-20">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] min-h-[600px] flex flex-col md:flex-row items-start pt-12 md:pt-20 justify-center px-6 md:px-20 max-w-[80rem] mx-auto gap-12 md:gap-24 overflow-hidden">
        
        {/* Apple Vision Pro Style Indicator */}
        <div className="absolute bottom-[20%] md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-3 rounded-full bg-background/50 backdrop-blur-xl border border-border shadow-lg z-50">
          <motion.div style={{ width: dot1Width, opacity: dot1Opacity }} className="h-2 rounded-full bg-foreground" />
          <motion.div style={{ width: dot2Width, opacity: dot2Opacity }} className="h-2 rounded-full bg-foreground" />
          <motion.div style={{ width: dot3Width, opacity: dot3Opacity }} className="h-2 rounded-full bg-foreground" />
        </div>

        {/* Left: Text Content */}
        <div className="relative w-full md:w-1/2 h-[200px] md:h-[400px] flex items-start mt-4 md:mt-20">
          
          {/* Phase 1 Text */}
          <motion.div style={{ opacity: section1Opacity, y: section1Y }} className="absolute inset-x-0 top-0 flex flex-col">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Phase 1</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6 leading-tight">
              Every stay starts on the screen
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Telos Haven turns the in-room TV into a welcome hub, then lets guests scan a QR code or tap their phone to control entertainment, room requests, and stay preferences.
            </p>
          </motion.div>

          {/* Phase 2 Text */}
          <motion.div style={{ opacity: section2Opacity, y: section2Y }} className="absolute inset-x-0 top-0 flex flex-col pointer-events-none">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Phase 2</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6 leading-tight">
              When the desk is slammed
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Telos Watch answers overflow calls, handles common service questions, and gives managers a live queue of suggested actions tied to each guest profile.
            </p>
          </motion.div>

          {/* Phase 3 Text */}
          <motion.div style={{ opacity: section3Opacity, y: section3Y }} className="absolute inset-x-0 top-0 flex flex-col pointer-events-none">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Phase 3</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6 leading-tight">
              Actions sync back to operations
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Housekeeping, DND, late checkout, towels, food options, local offers, and front desk messages stay connected to the PMS so teams can move without tab-hopping.
            </p>
          </motion.div>
        </div>

        {/* Right: Visual Content */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] flex items-start justify-center mt-4 md:mt-20">
          
          {/* Visual 1: Room TV welcome */}
          <motion.div style={{ opacity: section1Opacity }} className="absolute inset-x-0 top-0 flex justify-center">
            <div className="w-72 h-80 bg-card border border-border rounded-2xl shadow-2xl p-6 flex flex-col gap-5 relative overflow-hidden">
              <div className="rounded-xl bg-foreground text-background p-5">
                <div className="text-xs font-semibold uppercase tracking-widest opacity-70">Room 1208</div>
                <div className="mt-2 text-2xl font-semibold">Welcome, Maya</div>
                <div className="mt-1 text-sm opacity-80">Scan to control your stay</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["TV", "DND", "Towels", "Food"].map((item) => (
                  <div key={item} className="rounded-xl bg-muted p-3 text-sm font-medium text-foreground">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-3 rounded-xl border border-border p-3">
                <CheckCircle2 className="w-5 h-5 text-foreground" />
                <div>
                  <div className="text-sm font-medium">PMS connected</div>
                  <div className="text-xs text-muted-foreground">Stay status synced</div>
                </div>
              </div>
              {/* Phone pairing scan */}
              <motion.div
                animate={{ y: [-20, 320, -20] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-0.5 bg-foreground shadow-[0_0_15px_2px_var(--color-foreground)]"
              />
            </div>
          </motion.div>

          {/* Visual 2: Front desk command grid */}
          <motion.div style={{ opacity: section2Opacity }} className="absolute inset-x-0 top-0 flex justify-center pointer-events-none">
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {Array.from({length: 9}).map((_, i) => {
                const isCenter = i === 4;
                const isEscalated = i === 0 || i === 2 || i === 7;
                return (
                  <motion.div
                    key={i}
                    animate={
                      isEscalated
                        ? { scale: [1, 0.92, 1], opacity: [1, 0.55, 1] }
                        : isCenter
                          ? { scale: [1, 1.1, 1], boxShadow: ["0px 0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px 5px var(--color-foreground)", "0px 0px 0px 0px rgba(0,0,0,0)"] }
                          : { scale: 1 }
                    }
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center ${
                      isCenter ? 'bg-foreground text-background font-bold shadow-xl' : 'bg-card border border-border'
                    }`}
                  >
                    {isCenter && "Desk"}
                    {isEscalated && <XCircle className="w-6 h-6 text-muted-foreground" />}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Visual 3: Stay dashboard */}
          <motion.div style={{ opacity: section3Opacity }} className="absolute inset-x-0 top-0 flex justify-center pointer-events-none">
            <div className="w-80 bg-card border border-border rounded-2xl shadow-2xl p-8 flex flex-col gap-8">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Open Requests</span>
                  <div className="text-3xl font-bold tracking-tight">18</div>
                </div>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="text-xs font-bold text-foreground bg-foreground/10 px-2 py-1 rounded-md"
                >
                  6 auto
                </motion.span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-muted-foreground">Resolved by Telos</span>
                  <span className="text-foreground">72%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: ["52%", "72%", "52%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="h-full bg-foreground"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-border flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Next action</span>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 rounded-md bg-muted text-muted-foreground text-xs font-semibold">Hold</div>
                  <div className="px-3 py-1.5 rounded-md bg-foreground text-background text-xs font-semibold shadow-md">Send towels</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
