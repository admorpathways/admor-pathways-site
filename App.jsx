import React from "react";
import { motion } from "framer-motion";
import { Heart, Home, Users, CheckCircle2, Mail, ArrowRight, Shield, HandHeart } from "lucide-react";

const CONFIG = {
  brand: "Admor Pathways",
  tagline: "Opening doors to housing through trust, advocacy, and opportunity.",
  ctaPrimary: "Donate",
  ctaSecondary: "Get Help",
  phone: "(555) 123-4567",
  email: "info@admorpathways.org",
  address: "Austin, TX",
  logo: "/logo.png",
};

const navItems = [
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "impact", label: "Impact" },
  { id: "donate", label: "Donate" },
  { id: "contact", label: "Contact" },
];

function Button({ children, onClick, variant = "solid", className = "", disabled }) {
  const base = "px-4 py-2 rounded-2xl text-sm font-medium transition border";
  const styles = variant === "outline"
    ? "bg-transparent text-gray-900 border-gray-300 hover:bg-gray-100"
    : "bg-gray-900 text-white border-gray-900 hover:opacity-90";
  const disabledStyles = disabled ? "opacity-60 cursor-not-allowed" : "";
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${styles} ${disabledStyles} ${className}`}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl bg-white border shadow-sm ${className}`}>{children}</div>;
}
function CardHeader({ children }) { return <div className="p-6 border-b">{children}</div>; }
function CardTitle({ children }) { return <div className="text-lg font-semibold">{children}</div>; }
function CardContent({ children, className = "" }) { return <div className={`p-6 ${className}`}>{children}</div>; }

const Feature = ({ icon: Icon, title, children }) => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gray-100"><Icon className="h-6 w-6" /></div>
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="text-sm text-gray-600">{children}</CardContent>
  </Card>
);

const Stat = ({ label, value }) => (
  <div className="text-center p-6 rounded-2xl bg-white border shadow-sm">
    <div className="text-3xl font-semibold">{value}</div>
    <div className="text-gray-500 text-sm mt-1">{label}</div>
  </div>
);

export default function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              {CONFIG.logo ? (
                <img src={CONFIG.logo} alt={CONFIG.brand} className="h-10 w-auto" />
              ) : (
                <div className="h-9 w-9 rounded-xl bg-gray-900 text-white grid place-items-center font-bold">AP</div>
              )}
              <div className="leading-tight">
                <div className="font-semibold">{CONFIG.brand}</div>
                <div className="text-xs text-gray-500">Nonprofit</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm hover:text-gray-900 text-gray-600">
                  {n.label}
                </button>
              ))}
            </nav>
            <div className="hidden md:flex gap-2">
              <Button onClick={() => scrollTo("donate")}>{CONFIG.ctaPrimary}</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10">
          {CONFIG.logo && (
            <img src={CONFIG.logo} alt="" className="w-[900px] max-w-none absolute -right-40 -top-24 rotate-6" />
          )}
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center py-16">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                A pathway to a <span className="underline decoration-amber-300">stable home</span>
              </h1>
              <p className="mt-4 text-gray-600 text-lg max-w-prose">{CONFIG.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={() => scrollTo("donate")}>
                  {CONFIG.ctaPrimary} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button onClick={() => scrollTo("contact")} variant="outline">{CONFIG.ctaSecondary}</Button>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
                <CheckCircle2 className="h-4 w-4" /> 501(c)(3) pending • Transparent reporting • Community-first
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="aspect-[4/3] rounded-3xl bg-white/70 backdrop-blur shadow-lg border grid place-items-center">
                <div className="p-6 text-center max-w-sm">
                  {CONFIG.logo && <img src={CONFIG.logo} alt={CONFIG.brand} className="mx-auto h-24 w-auto mb-4" />}
                  <p className="text-xl font-medium">{CONFIG.brand}</p>
                  <p className="text-gray-700 mt-1">{CONFIG.tagline}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-2xl font-semibold">About Admor Pathways</h2>
            <p className="text-gray-600 mt-2">We bridge the gap between qualified renters and compassionate landlords by building trusted tenant profiles and supporting fair, stable placements.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Feature icon={Home} title="Tenant Profiles">
              Comprehensive, context-rich renter profiles: credit context, verified employment & income, and testimonials from prior housing providers and employers.
            </Feature>
            <Feature icon={Users} title="Landlord Partnerships">
              A growing network of property owners who believe in second chances and evidence-based screening—reducing vacancies and improving retention.
            </Feature>
            <Feature icon={Shield} title="Advocacy & Education">
              Rights education and navigation support so families can secure housing and keep it—plus fair-chance housing guidance for owners.
            </Feature>
            <Feature icon={HandHeart} title="Stabilization Support">
              Post-placement check-ins, resource referrals, and coordination with community partners to promote long-term housing stability.
            </Feature>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-14 bg-white">
        <div className="max-w-6xl mx_auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Programs</h2>
            <p className="text-gray-600">Tailored pathways that meet people where they are.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader><CardTitle>Tenant Vetting & Profiles</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-600">
                Holistic profiles highlighting responsibility and readiness: verified income & employment, prior-housing testimonials, and context for credit history.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Reentry & Fair-Chance Support</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-600">
                Advocacy for applicants with non-violent records, with owner education and risk-mitigation options to enable safe, equitable placements.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Landlord Concierge</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-600">
                Matched placements from a pool of pre-vetted renters, faster lease-up timelines, and ongoing communication to reduce turnover.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Financial Coaching & Rent Reporting</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-600">
                Budgeting and credit-building support, including optional rent-reporting to help residents strengthen credit over time.
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Community Resource Navigation</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-600">
                Warm referrals to workforce programs, legal aid, and public/nonprofit assistance for stability during and after move-in.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Impact snapshot</h2>
            <p className="text-gray-600">Transparent metrics donors and partners can trust.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <Stat label="Families Housed" value="128" />
            <Stat label="Avg. Time to Lease" value="21 days" />
            <Stat label="Landlord Partners" value="64" />
            <Stat label="Retention @ 12 mo" value="92%" />
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="relative py-14 bg-white overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-5 grid place-items-center">
          {CONFIG.logo && <img src={CONFIG.logo} alt="" className="h-[600px] w-auto" />}
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Fuel the mission</h2>
              <p className="text-gray-600 mt-2">Every dollar expands housing access. Make a one-time gift or become a monthly supporter.</p>
              <div className="mt-5 flex gap-3">
                <Button disabled>Donations Opening Soon</Button>
                <Button variant="outline" onClick={() => scrollTo("contact")}>Get Notified</Button>
              </div>
              <p className="text-xs text-gray-500 mt-3">We're finalizing payment processing. In the meantime, use the contact form to be notified when donations open.</p>
            </div>
            <Card>
              <CardHeader><CardTitle>Where your gift goes</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-600 space-y-3">
                <div className="flex items-center gap-3"><Heart className="h-4 w-4" /> Application & profile creation</div>
                <div className="flex items-center gap-3"><Users className="h-4 w-4" /> Landlord outreach & placements</div>
                <div className="flex items-center gap-3"><Home className="h-4 w-4" /> Stabilization & follow-up support</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="text-gray-600">We work with renters, landlords, and community partners.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input className="w-full p-3 rounded-xl border" placeholder="First name" />
                <input className="w-full p-3 rounded-xl border" placeholder="Last name" />
              </div>
              <input className="w-full p-3 rounded-xl border" placeholder="Email" type="email" />
              <textarea className="w-full p-3 rounded-xl border min-h-[120px]" placeholder="How can we help? Or write \"Notify me when donations open\"" />
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="h-4 w-4" /> Notify me when donations open
              </label>
              <Button><Mail className="h-4 w-4 mr-2" /> Send</Button>
              <p className="text-xs text-gray-500">Hook this up to Formspree, Zapier, or your backend.</p>
            </form>
            <div className="space-y-4">
              <Card>
                <CardContent className="text-sm text-gray-600">
                  <div className="font-medium text-gray-900">{CONFIG.brand}</div>
                  <div>{CONFIG.address}</div>
                  <div>{CONFIG.phone}</div>
                  <div>{CONFIG.email}</div>
                </CardContent>
              </Card>
              <div className="flex items-center gap-3">
                {CONFIG.logo && <img src={CONFIG.logo} alt={CONFIG.brand} className="h-8 w-auto" />}
                <div className="text-xs text-gray-500">© {new Date().getFullYear()} {CONFIG.brand}. All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
