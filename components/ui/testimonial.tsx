"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import Image from "next/image";
import { useRef } from "react";

function ClientFeedback() {
  const testimonialRef = useRef(null);

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <main className="w-full bg-white">
      <section
        className="relative h-full container text-black mx-auto rounded-lg py-14 bg-white"
        ref={testimonialRef}
      >
        <article className="max-w-screen-md mx-auto text-center space-y-2">
          <TimelineContent
            as="h1"
            className="xl:text-4xl text-3xl font-display font-bold tracking-tight text-[#0B2545]"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Trusted by Startups and the world&apos;s largest companies
          </TimelineContent>
          <TimelineContent
            as="p"
            className="mx-auto text-gray-500 font-body text-[16px] sm:text-[17px]"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Let&apos;s hear how clients feel about our service
          </TimelineContent>
        </article>

        <div className="lg:grid lg:grid-cols-3 gap-3 flex flex-col w-full lg:py-10 pt-10 pb-4 lg:px-10 px-4">
          {/* Column 1 */}
          <div className="md:flex lg:flex-col lg:space-y-3 h-full lg:gap-0 gap-3">
            <TimelineContent
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-[#0B2545] text-white overflow-hidden rounded-2xl border border-slate-700/40 p-6 shadow-md"
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
                  `,
                  backgroundSize: "44px 44px",
                  WebkitMaskImage: "radial-gradient(ellipse 85% 60% at 50% 0%, #000 70%, transparent 100%)",
                  maskImage: "radial-gradient(ellipse 85% 60% at 50% 0%, #000 70%, transparent 100%)",
                }}
              />
              <article className="mt-auto relative z-10">
                <p className="font-body text-slate-100 text-[16px] sm:text-[17px] leading-relaxed">
                  &ldquo;FACET has been a game-changer for our cross-border transactions. Their investigative scrutiny is top-notch and their team is incredibly responsive.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-6">
                  <div>
                    <h2 className="font-display font-bold lg:text-xl text-base text-white">
                      Guillermo Rauch
                    </h2>
                    <p className="text-blue-200 text-sm font-medium">CEO of Enigma</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop&q=80"
                    alt="Guillermo Rauch"
                    width={80}
                    height={80}
                    className="w-14 h-14 rounded-xl object-cover border border-white/20 shadow-sm"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-2xl border border-blue-500/50 p-6 shadow-md"
            >
              <article className="mt-auto relative z-10">
                <p className="font-body text-blue-50 text-[15px] sm:text-[16px] leading-relaxed">
                  &ldquo;We&apos;ve seen incredible results with their due diligence reports. Their expertise and investigative dedication are unmatched.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-6">
                  <div>
                    <h2 className="font-display font-bold text-lg text-white">Rika Shinoda</h2>
                    <p className="text-blue-100 text-sm font-medium">Managing Partner, Kintsugi Capital</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop&q=80"
                    alt="Rika Shinoda"
                    width={80}
                    height={80}
                    className="w-14 h-14 rounded-xl object-cover border border-white/20 shadow-sm"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 2 */}
          <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-3 lg:gap-0 gap-3">
            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-[#0F172A] text-white overflow-hidden rounded-2xl border border-slate-800 p-6 shadow-md"
            >
              <article className="mt-auto relative z-10">
                <p className="font-body text-slate-200 text-sm sm:text-[15px] leading-relaxed">
                  &ldquo;Their team is highly professional, and their public-record litigation intelligence has truly transformed how we evaluate counterparty risk.&rdquo;
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className="font-display font-bold lg:text-lg text-base text-white">
                      Reacher Vance
                    </h2>
                    <p className="text-slate-400 text-sm">General Counsel, OdeaoLabs</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop&q=80"
                    alt="Reacher Vance"
                    width={80}
                    height={80}
                    className="lg:w-14 lg:h-14 w-12 h-12 rounded-xl object-cover border border-white/10"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-[#0F172A] text-white overflow-hidden rounded-2xl border border-slate-800 p-6 shadow-md"
            >
              <article className="mt-auto relative z-10">
                <p className="font-body text-slate-200 text-sm sm:text-[15px] leading-relaxed">
                  &ldquo;We&apos;re extremely satisfied with the speed and depth of their investigative dossiers. Their work exceeded our risk committee expectations.&rdquo;
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className="font-display font-bold lg:text-lg text-base text-white">John Davis</h2>
                    <p className="text-slate-400 text-sm">Head of Compliance, Labsbo</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&auto=format&fit=crop&q=80"
                    alt="John Davis"
                    width={80}
                    height={80}
                    className="lg:w-14 lg:h-14 w-12 h-12 rounded-xl object-cover border border-white/10"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={4}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-[#0F172A] text-white overflow-hidden rounded-2xl border border-slate-800 p-6 shadow-md"
            >
              <article className="mt-auto relative z-10">
                <p className="font-body text-slate-200 text-sm sm:text-[15px] leading-relaxed">
                  &ldquo;Their analyst support is absolutely exceptional. Always available, communicative, and transparent about source trails and jurisdictional limits.&rdquo;
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className="font-display font-bold lg:text-lg text-base text-white">
                      Steven Sunny
                    </h2>
                    <p className="text-slate-400 text-sm">VP of Investments, Boxefi</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&auto=format&fit=crop&q=80"
                    alt="Steven Sunny"
                    width={80}
                    height={80}
                    className="lg:w-14 lg:h-14 w-12 h-12 rounded-xl object-cover border border-white/10"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 3 */}
          <div className="h-full md:flex lg:flex-col lg:space-y-3 lg:gap-0 gap-3">
            <TimelineContent
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-2xl border border-blue-500/50 p-6 shadow-md"
            >
              <article className="mt-auto relative z-10">
                <p className="font-body text-blue-50 text-[15px] sm:text-[16px] leading-relaxed">
                  &ldquo;FACET has been a key strategic intelligence partner in our growth and acquisition journey.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-6">
                  <div>
                    <h2 className="font-display font-bold text-lg text-white">Sarah Jenkins</h2>
                    <p className="text-blue-100 text-sm font-medium">Chief Investment Officer, Odeao</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&auto=format&fit=crop&q=80"
                    alt="Sarah Jenkins"
                    width={80}
                    height={80}
                    className="w-14 h-14 rounded-xl object-cover border border-white/20 shadow-sm"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-[#0B2545] text-white overflow-hidden rounded-2xl border border-slate-700/40 p-6 shadow-md"
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
                  `,
                  backgroundSize: "44px 44px",
                  WebkitMaskImage: "radial-gradient(ellipse 85% 60% at 50% 0%, #000 70%, transparent 100%)",
                  maskImage: "radial-gradient(ellipse 85% 60% at 50% 0%, #000 70%, transparent 100%)",
                }}
              />
              <article className="mt-auto relative z-10">
                <p className="font-body text-slate-100 text-[16px] sm:text-[17px] leading-relaxed">
                  &ldquo;A true game-changer for institutional due diligence. Their exceptional investigative clarity, combined with deep multi-jurisdiction expertise, has made a decisive impact on our capital deployment.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-6">
                  <div>
                    <h2 className="font-display font-bold text-xl text-white">Paul Brauch</h2>
                    <p className="text-blue-200 text-sm font-medium">Head of Risk, Spectrum Capital</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&auto=format&fit=crop&q=80"
                    alt="Paul Brauch"
                    width={80}
                    height={80}
                    className="w-14 h-14 rounded-xl object-cover border border-white/20 shadow-sm"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
        </div>

        {/* Decorative Bottom Bar */}
        <div className="relative border-b-2 border-slate-200 mt-8 mb-4 h-8 z-[2] w-full max-w-5xl mx-auto">
          <div className="w-full h-full relative before:absolute before:-left-2 before:-bottom-2 before:w-4 before:h-4 before:bg-white before:shadow-sm before:border before:border-slate-300 after:absolute after:-right-2 after:-bottom-2 after:w-4 after:h-4 after:bg-white after:shadow-sm after:border after:border-slate-300" />
        </div>
      </section>
    </main>
  );
}

export default ClientFeedback;
