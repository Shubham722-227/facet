"use client";

import Link from "next/link";
import { GradientWave } from "@/components/ui/gradient-wave";

export default function Hero({ onOpenConsultation }) {
  return (
    <div className="relative w-full overflow-hidden bg-[#0B2545] text-white min-h-[680px] lg:min-h-[760px] flex items-center">
      {/* 1. Dynamic WebGL Gradient Wave Background */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <GradientWave
          colors={["#0B2545", "#133966", "#1D4ED8", "#081B33", "#1E3A8A", "#0B2545"]}
          noiseSpeed={0.000015}
          noiseFrequency={[0.0001, 0.0007]}
          deform={{ incline: 0.35, noiseAmp: 220, noiseFlow: 3.5 }}
        />
      </div>

      {/* 2. Soft Dark Vignette / Contrast Gradient for Maximum Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#07172B]/90 via-[#0B2545]/60 to-transparent pointer-events-none" />

      {/* 3. Soft Blue Ambient Glow Behind Dashboard (Upper-Right) */}
      <div className="absolute -top-24 right-0 w-[700px] h-[700px] rounded-full bg-sky-400/[0.14] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-[25%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.12] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-100px] w-[450px] h-[450px] rounded-full bg-blue-900/[0.2] blur-[90px] pointer-events-none" />

      {/* 4. Main Hero Section Content Container */}
      <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-28 pb-16 lg:pt-32 lg:pb-24 z-10 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow, Headline, Supporting Copy, CTAs, Credibility Strip */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start z-20 max-w-xl">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="font-display font-semibold text-[11px] sm:text-[12px] tracking-widest text-blue-100 uppercase">
                Due Diligence · Investigative Intelligence
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-[42px] sm:text-[54px] lg:text-[62px] xl:text-[68px] text-white tracking-tight leading-[1.08] mb-6">
              Look Beyond <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-200 to-white">
                the Surface.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="font-body text-[17px] sm:text-[18px] lg:text-[19px] text-slate-200 max-w-xl mb-8 leading-relaxed font-light">
              FACET helps organisations investigate relevant risks, understand ownership and relationships, and make more informed decisions through structured due diligence and investigative intelligence.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-[#0B2545] font-display font-bold text-[15px] tracking-wide hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Request a Consultation</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-display font-semibold text-[15px] tracking-wide hover:bg-white/15 transition-all border border-white/20"
              >
                <span>Explore Our Services</span>
                <span className="material-symbols-outlined text-[18px] text-blue-200">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Compact Credibility Strip (4 items strictly as instructed) */}
            <div className="w-full pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2.5 gap-x-5 text-[12px] sm:text-[13px] text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-emerald-400 text-[17px]">verified</span>
                Source-Linked Evidence
              </span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sky-300 text-[17px]">person_search</span>
                Investigator-Led Research
              </span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-blue-300 text-[17px]">description</span>
                Structured Reporting
              </span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-teal-300 text-[17px]">public</span>
                Global Perspective
              </span>
            </div>
          </div>

          {/* Right Column (Tablet / Mobile Inline Fallback) */}
          <div className="lg:hidden col-span-1 w-full mt-6 z-10">
            <div className="rounded-2xl p-1 bg-gradient-to-b from-white/20 to-white/5 shadow-2xl">
              <div className="rounded-xl overflow-hidden border border-white/20 bg-[#0B2545]">
                <img
                  src="/facet_dashboard.png"
                  alt="FACET Property Due Diligence Dashboard"
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Right-Side Oversized Dashboard Interface */}
      <div
        className="hidden lg:block absolute top-[52%] -translate-y-1/2 left-[56%] xl:left-[55%] 2xl:left-[53%] w-[56vw] min-w-[780px] max-w-[1200px] z-10 select-none pointer-events-none"
        aria-hidden="true"
      >
        <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent shadow-[0_30px_90px_-20px_rgba(7,23,43,0.9),0_0_60px_rgba(56,189,248,0.2)]">
          <div className="rounded-xl overflow-hidden border border-white/20 bg-[#0B2545]">
            <img
              src="/facet_dashboard.png"
              alt="FACET Property Due Diligence Dashboard"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-cover object-left block"
            />
          </div>
        </div>
      </div>

      {/* 6. Soft Transition Toward Page Background (#F7F8FA) at Hero Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-[#F7F8FA] pointer-events-none z-10" />
    </div>
  );
}
