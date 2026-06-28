"use client";
import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import FormAlert from "@/components/ui/FormAlert";
import { submitForm } from "@/lib/utils";

const articles = [
  { tag: "Market Report", title: "NSE Monthly Performance: May 2026", desc: "The NSE 20 Index gained 4.2% in May, led by banking and telecommunications sectors.", date: "Jun 2026", category: "Kenya" },
  { tag: "Insights", title: "Why Now Is a Historic Opportunity for African ETFs", desc: "Africa's equity markets are significantly undervalued relative to fundamentals.", date: "May 2026", category: "Africa" },
  { tag: "Education", title: "The Diaspora Investor's Guide to Kenyan Stocks", desc: "Everything you need to invest in Kenya from abroad.", date: "May 2026", category: "Diaspora" },
  { tag: "Market Report", title: "East Africa Macro Outlook: Q2 2026", desc: "GDP growth, inflation, and FX trends across Kenya, Uganda, and Tanzania.", date: "Apr 2026", category: "Africa" },
  { tag: "Education", title: "What is an ETF? A Guide for Kenyan Investors", desc: "Simple, clear explanation of exchange-traded funds for first-time investors.", date: "Apr 2026", category: "ETFs" },
  { tag: "Product Update", title: "Zanari Beta: What Our Testers Are Saying", desc: "Insights from our closed beta cohort and what we learned.", date: "Mar 2026", category: "Kenya" },
];

const categories = ["All", "Kenya", "Africa", "Diaspora", "ETFs"];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<{ status: "idle" | "loading" | "done"; success?: boolean; message?: string }>({ status: "idle" });

  const filtered = activeCategory === "All" ? articles : articles.filter((a) => a.category === activeCategory);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: "loading" });
    const result = await submitForm("/api/newsletter", { email });
    setState({ status: "done", success: result.success, message: result.message });
    if (result.success) setEmail("");
  };

  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Insights &amp; Research</h1>
          <p className="text-white/70 text-xl max-w-2xl">Market intelligence, financial education, and analysis from Africa&apos;s most ambitious investment platform.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? "bg-[#0a4f3c] text-white" : "bg-[#f8f5ef] text-gray-600 hover:bg-gray-100"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <div key={article.title} className="bg-[#f8f5ef] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all cursor-pointer group">
                <div className="h-40 bg-gradient-to-br from-[#0a4f3c] to-[#063328]" />
                <div className="p-5">
                  <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wider">{article.tag}</span>
                  <h3 className="font-bold text-[#063328] mt-1 mb-2 group-hover:text-[#0a4f3c] transition-colors leading-snug">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{article.desc}</p>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#063328] py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <Mail className="w-10 h-10 text-[#c9a84c] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-3">Weekly Market Digest</h2>
          <p className="text-white/60 mb-8">NSE performance, African macro trends, and Olkasis insights — every Friday morning.</p>
          {state.status === "done" && state.message && (
            <div className="mb-4"><FormAlert type={state.success ? "success" : "error"} message={state.message} onClose={() => setState({ status: "idle" })} /></div>
          )}
          <form onSubmit={handleNewsletter} className="flex gap-3">
            <input type="email" required placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c9a84c]" />
            <Button type="submit" variant="secondary" className="gap-2 flex-shrink-0" disabled={state.status === "loading"}>
              Subscribe <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
