import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = { title: "Careers — Olkasis Capital" };

export default function CareersPage() {
  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Build Africa&apos;s financial<br /><span className="text-[#c9a84c]">future with us.</span></h1>
          <p className="text-white/70 text-xl max-w-2xl">We are assembling an exceptional team to build Kenya and Africa&apos;s most impactful investment platform.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-[#0a4f3c] mb-4">Why Olkasis Capital?</h2>
              <div className="space-y-4 text-gray-600">
                <p>We are a mission-driven company at the intersection of fintech, capital markets, and Africa&apos;s economic transformation. Every team member&apos;s work directly contributes to democratising wealth creation for millions of Africans.</p>
                <p>We are early-stage and pre-Series A, which means you get to shape the culture, the product, and the company direction from the ground up.</p>
                <p>We are based in Nairobi with a distributed, global team — a reflection of the diaspora community we serve.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Remote-friendly", sub: "Work from Nairobi or anywhere" },
                { label: "Mission-driven", sub: "Building for Africa" },
                { label: "Early equity", sub: "Meaningful ownership" },
                { label: "Growth", sub: "Learn from the best in African fintech" },
              ].map(({ label, sub }) => (
                <div key={label} className="bg-[#f8f5ef] rounded-xl p-4 border border-gray-100">
                  <div className="font-bold text-[#063328] text-sm">{label}</div>
                  <div className="text-gray-500 text-xs mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f8f5ef] rounded-2xl p-10 text-center border border-gray-100">
            <Briefcase className="w-12 h-12 text-[#0a4f3c]/30 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#0a4f3c] mb-3">No open roles listed yet</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              We are building the team. If you are exceptional in your field — engineering, product, finance, compliance, design, or sales — we want to hear from you.
            </p>
            <a href="mailto:careers@olkasiscapital.com">
              <Button size="lg" className="gap-2">Send your CV <ArrowRight className="w-5 h-5" /></Button>
            </a>
            <p className="text-gray-400 text-sm mt-4">careers@olkasiscapital.com · Subject: &quot;[Role you&apos;d build] — [Your name]&quot;</p>
          </div>
        </div>
      </section>

      <section className="bg-[#063328] py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-2">Not a fit right now?</h2>
          <p className="text-white/60 mb-6">Follow us on LinkedIn to be first to know when we open roles.</p>
          <Link href="/contact"><Button variant="secondary" size="sm">Stay in touch</Button></Link>
        </div>
      </section>
    </>
  );
}
