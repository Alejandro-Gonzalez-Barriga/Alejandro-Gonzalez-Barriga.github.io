"use client";

import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { useLenisGsap } from "@/lib/useLenisGsap";

const palette = {
  ink: "#05060A",
  surface: "#0B1020",
  surface2: "#0A0F1A",
  cyan: "#22D3EE",
  violet: "#A78BFA",
  rose: "#FB7185",
  text: "#F4F7FF",
} as const;

export default function StoryHome() {
  useLenisGsap();

  return (
    <FlowArt aria-label="Alejandro Gonzalez-Barriga — Story Scroll">
      <FlowSection
        aria-label="Hero"
        style={{
          color: "#FFFFFF",
          backgroundColor: "#fd5200",
        }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
          01 — Technical discovery
        </p>
        <hr className="my-[2vw] border-none border-t border-black opacity-100" />

        <div>
          <h1 className="text-[clamp(3.25rem,10vw,9rem)] font-semibold leading-[0.9] tracking-tight text-white">
            Alejandro
            <br />
            Gonzalez-
            <br />
            Barriga
          </h1>
        </div>

        <hr className="my-[2vw] border-none border-t border-black opacity-100" />

        <p className="mt-auto max-w-[55ch] text-[clamp(1.05rem,2.2vw,1.75rem)] font-normal leading-relaxed text-white/85">
          Bridging the gap between core infrastructure and bespoke client needs.
        </p>
      </FlowSection>

      <FlowSection
        aria-label="Forward Deployment Philosophy"
        style={{
          // Match example: black section
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
          02 — Forward Deployment
        </p>
        <hr className="my-[2vw] border-none border-t border-white/60 opacity-100" />

        <div>
          <h2 className="text-[clamp(3rem,9.5vw,10rem)] font-semibold leading-[0.85] tracking-tight text-white">
            Ship
            <br />
            Where
            <br />
            It
            <br />
            Hurts
          </h2>
        </div>

        <hr className="my-[2vw] border-none border-t border-white/60 opacity-100" />

        <p className="max-w-[55ch] text-[clamp(1rem,2.2vw,1.65rem)] leading-relaxed text-white/75">
          Strategic engineering specializing in AI integrations—operationalizing AI data engines and
          reducing time-to-value for enterprise clients by translating bespoke requirements into
          durable platform capabilities.
        </p>

        <hr className="my-[2vw] border-none border-t border-white/60 opacity-100" />

        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Discovery</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Forward deployed delivery that turns ambiguity into working product surfaces.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Community</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Reusable primitives that survive the next customer, not just this one.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Value</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              High-signal interfaces and tooling that keep teams shipping.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection
        aria-label="Timeline"
        style={{
          // High-contrast "paper" scene
          color: "#0A0A0C",
          backgroundColor: "#F5F0E8",
        }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/70">
          03 — Timeline
        </p>
        <hr className="my-[2vw] border-none border-t border-black/60 opacity-100" />

        <div>
          <h2 className="text-[clamp(3rem,9.5vw,10rem)] font-semibold leading-[0.85] tracking-tight text-black">
            Build.
            <br />
            Harden.
            <br />
            Scale.
          </h2>
        </div>

        <hr className="my-[2vw] border-none border-t border-black/60 opacity-100" />

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5">
            <p className="text-sm font-semibold text-black">
              Achoque Tech Solutions — Founder/Lead
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-black/70">
              <li>Led UI development at Resla.</li>
              <li>Spearheaded end-to-end features for Sevenly.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5">
            <p className="text-sm font-semibold text-black">
              Scale AI — Forward Deployed Engineer
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-black/70">
              <li>Shipped critical Python SDK updates.</li>
              <li>Led the developer-centric documentation platform.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5">
            <p className="text-sm font-semibold text-black">
              Sentium Consulting — Senior Full-Stack Engineer
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-black/70">
              <li>Mission-critical pharmaceutical authoring tool.</li>
              <li>Regulated workflows with auditability as a constraint.</li>
            </ul>
          </div>
        </div>

        <p className="mt-auto max-w-[60ch] text-[clamp(0.95rem,2vw,1.35rem)] leading-relaxed text-black/60">
          This portfolio keeps the narrative crisp and the system durable: AI integrations,
          high-performance frontend architecture, and operational delivery.
        </p>
      </FlowSection>

      <FlowSection
        aria-label="Technical Arsenal"
        style={{
          // High-contrast "electric blue" scene
          color: "#FFFFFF",
          backgroundColor: "#1A3DE8",
        }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
          04 — Technical Arsenal
        </p>
        <hr className="my-[2vw] border-none border-t border-white/50 opacity-100" />

        <div>
          <h2 className="text-[clamp(3rem,9.5vw,10rem)] font-semibold leading-[0.85] tracking-tight text-white">
            React.
            <br />
            Next.
            <br />
            TypeScript.
          </h2>
        </div>

        <hr className="my-[2vw] border-none border-t border-white/50 opacity-100" />

        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Python",
            "Claude Code",
            "GitHub Copilot",
            "LLM implementation",
            "OAuth2/JWT",
            "Docker",
            "AWS/GCP",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-auto max-w-[55ch] text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-white/70">
          Tooling is leverage. I optimize for developer experience, security posture, and
          performance budgets that stay intact at scale.
        </p>
      </FlowSection>

      <FlowSection
        aria-label="Proof of Concept"
        style={{
          // Match example: final black section
          color: "#fff",
          backgroundColor: "#000000",
        }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
          05 — Proof
        </p>
        <hr className="my-[2vw] border-none border-t border-white/60 opacity-100" />

        <div>
          <h2 className="text-[clamp(3rem,9.5vw,10rem)] font-semibold leading-[0.85] tracking-tight text-white">
            Quality
            <br />
            That
            <br />
            Ships.
          </h2>
        </div>

        <hr className="my-[2vw] border-none border-t border-white/60 opacity-100" />

        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[200px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">90%+ code coverage</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Tests that protect refactors and keep shipping velocity high.
            </p>
          </div>
          <div className="min-w-[200px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">
              Core Web Vitals audits
            </p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Architecture reviews that translate into measurable, user-perceived performance.
            </p>
          </div>
          <div className="min-w-[200px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">AI integrations</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Production-grade implementations that balance reliability, security, and time-to-value.
            </p>
          </div>
        </div>

        <p className="mt-auto max-w-[60ch] text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-white/70">
          Strategic Senior Engineer. Forward deployed execution. High-performance systems.
        </p>
      </FlowSection>
    </FlowArt>
  );
}

