"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import FormAlert from "@/components/ui/FormAlert";
import { submitForm } from "@/lib/utils";

export default function AdvisorsPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [state, setState] = useState<{ status: "idle" | "loading" | "done"; success?: boolean; message?: string }>({ status: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: "loading" });
    const result = await submitForm("/api/partner", { ...form, type: "IFA" });
    setState({ status: "done", success: result.success, message: result.message });
    if (result.success) setForm({ name: "", company: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">For Financial Advisors.<br /><span className="text-[#c9a84c]">Grow with us.</span></h1>
          <p className="text-white/70 text-xl max-w-2xl">Independent financial advisors and IFAs who want to offer Zanari and Olkasis Capital products to their clients.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0a4f3c] mb-6">The advisor opportunity</h2>
              <p className="text-gray-600 leading-relaxed mb-6">We&apos;re building the African equivalent of Vanguard Advisor Services — a dedicated IFA distribution channel for our platform.</p>
              <ul className="space-y-3">
                {[
                  "Access Zanari products for your retail clients",
                  "Institutional ETF and mandate access",
                  "White-label options for larger practices",
                  "Dedicated advisor portal with client dashboards",
                  "Revenue sharing on client AUM",
                  "Co-marketing support and lead sharing",
                  "Quarterly advisor briefings and research",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-[#0a4f3c] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f8f5ef] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#0a4f3c] mb-6">Partner inquiry</h3>
              {state.status === "done" && state.message && (
                <div className="mb-4"><FormAlert type={state.success ? "success" : "error"} message={state.message} onClose={() => setState({ status: "idle" })} /></div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "Full name", type: "text", required: true },
                  { id: "company", label: "Practice / firm name", type: "text", required: true },
                  { id: "email", label: "Email address", type: "email", required: true },
                  { id: "phone", label: "Phone number", type: "tel", required: false },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                    <input type={f.type} required={f.required} value={form[f.id as keyof typeof form]} onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm" />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your practice</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2" disabled={state.status === "loading"}>
                  {state.status === "loading" ? "Sending..." : <><span>Send Inquiry</span><ArrowRight className="w-4 h-4" /></>}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
