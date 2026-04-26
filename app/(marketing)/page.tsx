import QueueJourney from "@/components/landing/queue-journey";
import HeroSection from "@/components/landing/hero-section";
import ModelsSection from "@/components/landing/models-section";
import FAQSection from "@/components/landing/faq-section";
import { SphereMask } from "@/components/magicui/sphere-mask";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function Page() {
  return (
    <main className="relative bg-background">
      <HeroSection />
      <ModelsSection />
      <QueueJourney />
      <SphereMask />
      
      <FAQSection />

      {/* Minimal CTA to bridge to the new pages */}
      <section className="mx-auto max-w-[72rem] px-6 md:px-8 py-12 mb-12">
        <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
          {/* Background Image - Add sunset-grid.png to public folder */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/sunset-grid.png')" }}
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          
          <div className="relative z-10 p-12 md:p-20 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl max-w-2xl mx-auto leading-tight mb-6">
              Ready to modernize every guest touchpoint?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
              Explore hotel-ready pricing or get in touch to map Telos Watch and Telos Haven to your property.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/pricing">
                <Button className="h-12 px-8 rounded-full text-base font-medium gap-2 group bg-white text-black hover:bg-white/90 border-0">
                  View Pricing
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="h-12 px-8 rounded-full text-base font-medium border-white/20 text-white hover:bg-white/10 bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
