import Link from "next/link";
import { Linkedin, Twitter, Youtube, Instagram, Globe } from "lucide-react";

const footerLinks = [
  {
    label: "Product",
    items: [
      { name: "Pricing", href: "/pricing" },
      { name: "Platform", href: "/features" },
      { name: "Telos Engine", href: "/features" },
      { name: "Telos Watch", href: "/features" },
      { name: "Telos Haven", href: "/features" },
      { name: "Telos Horizon", href: "/features#horizon" },
    ],
  },
  {
    label: "Resources",
    items: [
      { name: "Blog", href: "#" },
      { name: "Docs", href: "#" },
      { name: "Updates", href: "#" },
      { name: "Help center", href: "#" },
      { name: "Integrations", href: "#" },
    ],
  },
  {
    label: "Compare",
    items: [
      { name: "VS legacy guest apps", href: "#" },
      { name: "VS call centers", href: "#" },
      { name: "VS disconnected reporting", href: "#" },
    ],
  },
  {
    label: "Business",
    items: [
      { name: "Property plan", href: "/pricing" },
      { name: "Portfolio plan", href: "/pricing" },
      { name: "Enterprise", href: "/contact" },
    ],
  },
  {
    label: "Company",
    items: [
      { name: "About us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "/contact" },
      { name: "Terms of service", href: "#" },
      { name: "Privacy policy", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#1A1918] text-[#F0F0EE] pt-16 pb-8">
      <div className="mx-auto max-w-[72rem] px-6 md:px-8">
        
        {/* Slogan */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Guest intent to staff action to owner intelligence.
          </h2>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {footerLinks.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#9A9890] hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials & Language */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#3A3835] pb-6 mb-6 gap-4">
          <div className="flex items-center gap-5 text-[#9A9890]">
            <Link href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Youtube className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#3A3835] text-sm text-[#9A9890] hover:text-white transition-colors">
            <Globe className="h-4 w-4" />
            English
          </button>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-[#9A9890] gap-4">
          <div className="flex items-center gap-1.5">
            <span>from</span>
            <span className="font-semibold text-white flex items-center gap-1.5">
              <img src="/watticon_transparent.png" alt="Telos" className="h-4 w-4 object-contain invert" /> Telos
            </span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Telos
          </div>
        </div>

      </div>
    </footer>
  );
}
