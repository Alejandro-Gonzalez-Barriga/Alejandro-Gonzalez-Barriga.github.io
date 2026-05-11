"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlowArt, { FlowSection } from "@/components/FlowArt/FlowArt";
import { useLenisGsap } from "@/lib/useLenisGsap";

gsap.registerPlugin(ScrollTrigger);

type TimelineItem = {
  org: string;
  title: string;
  highlights: string[];
};

const ARSENAL = [
  { title: "Frontend Core", items: ["React", "Next.js", "TypeScript"] },
  { title: "Backend & Platform", items: ["Node.js", "Python"] },
  { title: "AI Productivity", items: ["Claude Code", "GitHub Copilot", "LLM implementation"] },
  { title: "Security & Ops", items: ["OAuth2/JWT", "Docker", "AWS/GCP"] },
] as const;

export default function StoryFlowPage() {
  useLenisGsap();

  const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
  const heroSubRef = useRef<HTMLParagraphElement | null>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);

  const timelineSectionRef = useRef<HTMLElement | null>(null);
  const timelineWrapRef = useRef<HTMLDivElement | null>(null);
  const timelineTrackRef = useRef<HTMLDivElement | null>(null);

  const timeline: TimelineItem[] = useMemo(
    () => [
      {
        org: "Achoque Tech Solutions",
        title: "Founder / Lead",
        highlights: [
          "Led UI development at Resla, focusing on high-performance interaction patterns and resilient component architecture.",
          "Spearheaded end-to-end feature delivery for Sevenly—from concept through production hardening.",
          "Operated as a client-facing engineering lead, bridging stakeholder goals with pragmatic, maintainable systems.",
        ],
      },
      {
        org: "Scale AI",
        title: "Forward Deployed Engineer",
        highlights: [
          "Engineered critical Python SDK updates to improve reliability, usability, and developer trust in high-stakes environments.",
          "Led a developer-centric documentation platform—treating docs as product and accelerating time-to-value.",
          "Embedded with customers to translate bespoke requirements into durable platform capabilities.",
        ],
      },
      {
        org: "Sentium Consulting",
        title: "Senior Full-Stack Engineer",
        highlights: [
          "Delivered a mission-critical authoring tool for the pharmaceutical industry where correctness and auditability are non-negotiable.",
          "Built robust workflows and guardrails to support regulated content creation at scale.",
        ],
      },
    ],
    [],
  );

  useEffect(() => {
    // Keep this lightweight: FlowArt handles the big pin/stack/rotation behavior.
    // Here we only add the hero blur emerge + timeline horizontal scrub.
    const ctx = gsap.context(() => {
      if (heroSectionRef.current && heroTitleRef.current && heroSubRef.current) {
        gsap.set([heroTitleRef.current, heroSubRef.current], {
          filter: "blur(18px)",
          opacity: 0,
          y: 18,
        });

        gsap.to(heroTitleRef.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top 70%",
            end: "top 25%",
            scrub: true,
          },
        });

        gsap.to(heroSubRef.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top 66%",
            end: "top 20%",
            scrub: true,
          },
        });
      }

      // Horizontal timeline scrub (no pin; pinning is handled by FlowArt).
      if (timelineSectionRef.current && timelineWrapRef.current && timelineTrackRef.current) {
        const wrap = timelineWrapRef.current;
        const track = timelineTrackRef.current;

        const getMaxX = () => Math.max(0, track.scrollWidth - wrap.clientWidth);

        gsap.to(track, {
          x: () => -getMaxX(),
          ease: "none",
          scrollTrigger: {
            trigger: timelineSectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-black text-zinc-100">
      {/* Cinematic background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-[0.65] [background:radial-gradient(1200px_800px_at_20%_20%,rgba(255,255,255,0.09),transparent_55%),radial-gradient(1100px_700px_at_80%_30%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(900px_600px_at_55%_85%,rgba(16,185,129,0.12),transparent_60%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] opacity-[0.12]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>

      <FlowArt className="relative">
        <FlowSection aria-label="Hero" className="bg-transparent">
          <header
            ref={heroSectionRef}
            className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center"
          >
            <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
              Strategic engineering specializing in AI integrations
              <span className="inline-block h-1 w-1 rounded-full bg-white/40" />
              Forward Deployed mindset
            </p>

            <h1
              ref={heroTitleRef}
              className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl"
            >
              Alejandro Gonzalez-Barriga
            </h1>

            <p
              ref={heroSubRef}
              className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/70 sm:text-xl"
            >
              Bridging the gap between core infrastructure and bespoke client needs.
              <span className="ml-2 text-white/50">Technical discovery, operationalized.</span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-white/60">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                AI data engines → product outcomes
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                Frontend performance & Core Web Vitals
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                Developer experience at scale
              </span>
            </div>

            <div className="mt-auto pt-10">
              <div className="flex items-center gap-3 text-xs text-white/50">
                <span className="h-px w-10 bg-white/15" />
                Scroll to begin
                <span className="h-px w-10 bg-white/15" />
              </div>
            </div>
          </header>
        </FlowSection>

        <FlowSection aria-label="Forward Deployment Philosophy">
          <div className="mx-auto w-full max-w-6xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-12">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                Forward Deployment Philosophy
              </p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                I embed where the stakes are real—
                <span className="text-white/70"> then ship systems that reduce time-to-value.</span>
              </h2>
              <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-white/70">
                Strategic engineering specializing in AI integrations—operationalizing AI data engines, hardening
                delivery paths, and turning ambiguous requirements into durable platform capabilities for enterprise
                clients.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">Method</p>
                  <p className="mt-3 text-sm font-semibold text-white sm:text-base">
                    Discovery → Prototype → Production
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Client context to maintainable systems
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">Outcome focus</p>
                  <p className="mt-3 text-sm font-semibold text-white sm:text-base">Time-to-value reduction</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">Aligned to user journeys and metrics</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">Engineering posture</p>
                  <p className="mt-3 text-sm font-semibold text-white sm:text-base">High-signal execution</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">DX, performance, and reliability</p>
                </div>
              </div>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Timeline (Horizontal Scroll)">
          <section ref={timelineSectionRef} className="mx-auto w-full max-w-6xl">
            <div className="mb-10">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">Timeline</p>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Teams shipped with—systems left better than I found them.
              </h2>
              <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-white/70">
                A horizontal scroll through roles where AI integrations, platform rigor, and frontend performance
                weren’t optional—they were the job.
              </p>
            </div>

            <div
              ref={timelineWrapRef}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/70 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/70 to-transparent" />

              <div ref={timelineTrackRef} className="flex gap-6 p-6 sm:p-10">
                {timeline.map((item) => (
                  <article
                    key={`${item.org}-${item.title}`}
                    className="w-[82vw] max-w-[760px] shrink-0 rounded-2xl border border-white/10 bg-black/40 p-7 sm:p-10"
                  >
                    <p className="text-sm font-medium text-white/70">{item.org}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {item.title}
                    </h3>
                    <ul className="mt-6 space-y-3 text-sm leading-7 text-white/70 sm:text-base">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex gap-3">
                          <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-white/40" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </FlowSection>

        <FlowSection aria-label="Technical Arsenal">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">Technical Arsenal</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Tools, systems, and operating principles.
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-white/70">
              Built for speed, correctness, and clean handoffs—especially when AI workflows and security constraints
              show up together.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ARSENAL.map((block) => (
                <div
                  key={block.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/7"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 [background:radial-gradient(500px_200px_at_40%_0%,rgba(255,255,255,0.12),transparent_55%)]" />
                  <h3 className="relative text-sm font-semibold tracking-tight text-white">{block.title}</h3>
                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {block.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-white/70"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Proof of Concept">
          <div className="mx-auto w-full max-w-6xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-12">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">Proof of Concept</p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                Cinematic outcomes—grounded in engineering discipline.
              </h2>
              <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-white/70">
                A track record of building fast, testable product surfaces: achieving{" "}
                <span className="font-semibold text-white">90%+ code coverage</span> and auditing frontend
                architectures to improve <span className="font-semibold text-white">Core Web Vitals</span>.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">Quality bar</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-white">90%+ coverage</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Tests that protect refactors and accelerate shipping cadence.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/35 p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">Performance</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-white">Core Web Vitals</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Audits that translate into measurable user-perceived speedups.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/35 p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">Architecture</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-white">Durable systems</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Clean seams between platform primitives and bespoke client needs.
                  </p>
                </div>
              </div>
            </div>

            <footer className="mt-10 text-sm text-white/50">
              <div className="flex flex-col gap-2 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-white/50">
                  Alejandro Gonzalez-Barriga — Forward Deployed Engineer · Sr. Full-Stack Engineer
                </p>
                <p className="text-white/40">Built with GSAP ScrollTrigger and Lenis</p>
              </div>
            </footer>
          </div>
        </FlowSection>
      </FlowArt>
    </div>
  );
}

