import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = { title: "For Institutions — Olkasis Capital" };

export default function InstitutionsPage() {
  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">For Institutions.<br /><span className="text-[#c9a84c]">Mandates built for Africa.</span></h1>
          <p className="text-white/70 text-xl max-w-2xl">SACCOs, pension funds, corporates, and endowments. Institutional-quality investment management for every size.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-10">Who we work with</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["SACCOs", "Pension Funds", "Corporate Treasuries", "NGO Endowments", "Insurance Companies", "Family Offices", "Cooperative Societies", "Universities"].map((type) => (
              <div key={type} className="bg-[#f8f5ef] rounded-xl px-5 py-4 font-medium text-[#063328] text-sm border border-gray-100">{type}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-8">What you get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Dedicated relationship manager — one point of contact",
              "Monthly portfolio statements, quarterly reviews",
              "Annual audited performance reports to RBA/CMA standards",
              "Full mandate customisation: equity, fixed income, or balanced",
              "Independent third-party custodian for asset segregation",
              "CMA Kenya and Retirement Benefits Authority compliant",
              "AML/KYC documentation support for your trustees",
              "Direct NSE market access and CDSC settlement",
            ].map((item) => (
              <div key={item} className="flex gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle className="w-5 h-5 text-[#0a4f3c] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#063328] py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s talk mandates</h2>
          <p className="text-white/60 mb-8">Minimum AUM: KES 10,000,000. Our institutional team responds within 1 business day.</p>
          <Link href="/products/asset-management">
            <Button variant="secondary" size="lg" className="gap-2">Make an Enquiry <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </>
  );
}
