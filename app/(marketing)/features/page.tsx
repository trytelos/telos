import FeaturesSection from "@/components/landing/client-section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      <FeaturesSection />
      
      {/* Minimal CTA */}
      <section className="mx-auto max-w-[72rem] px-6 md:px-8 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl max-w-2xl mx-auto leading-tight mb-6">
          Ready to give your team an AI stay layer?
        </h2>
        <div className="flex justify-center gap-4">
          <Link href="/pricing">
            <Button className="h-12 px-8 rounded-full text-base font-medium gap-2 group">
              View Pricing
              <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="h-12 px-8 rounded-full text-base font-medium">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
