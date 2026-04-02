import SiteFooter from "@/components/site-footer";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = SITE_URL;

export const metadata: Metadata = {
  title: "Contributing",
  description:
    "How to contribute to Akku-Craft, where to start, and which project areas are open for help.",
  alternates: {
    canonical: "/contributing",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contributing | Akku-Craft",
    description:
      "How to contribute to Akku-Craft, where to start, and which project areas are open for help.",
    type: "website",
    url: `${baseUrl}/contributing`,
  },
  twitter: {
    title: "Contributing to Akku-Craft",
    description:
      "How to contribute to Akku-Craft, where to start, and which project areas are open for help.",
  },
};

export default function ContributingPage() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 pb-0 md:px-8 md:pb-0">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[36px_36px] opacity-10" />

      <section className="mb-8 rounded-base border-2 border-border bg-main p-6 text-main-foreground shadow-shadow md:p-8">
        <h1 className="mb-3 text-3xl font-heading uppercase tracking-wide md:text-4xl">
          Contributing to Akku-Craft
        </h1>
        <p className="max-w-4xl text-sm leading-relaxed md:text-base">
          Thanks for your interest in contributing. Akku-Craft is a small
          project, and outside help genuinely makes a difference — whether
          you're into embedded systems, web development, PCB design, or CAD.
        </p>
      </section>

      <section className="mb-8 rounded-base border-2 border-border bg-[#ff4b2a] p-5 text-black shadow-shadow md:p-6">
        <p className="text-sm font-heading uppercase tracking-wide md:text-base">
          This is a brief overview. For detailed contribution guidelines, check
          the CONTRIBUTING.md in the relevant repository.
        </p>
      </section>

      <article className="mb-8 rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow md:p-8">
        <section className="mb-6 rounded-base border-2 border-border bg-background p-5 shadow-shadow">
          <h2 className="mb-3 text-xl font-heading uppercase tracking-wide">
            Before anything else: read the wiki
          </h2>
          <p className="text-sm leading-relaxed md:text-base">
            Please do this before diving into any repository. The wiki explains
            the architecture, design decisions, and conventions that keep
            everything consistent. Skipping it tends to create more back-and-
            forth later.
          </p>
          <div className="mt-4">
            <Link
              href="/wiki"
              className="inline-flex items-center gap-2 rounded-base border-2 border-border bg-main px-4 py-2 text-sm font-heading uppercase tracking-wide text-main-foreground shadow-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              Akku-Craft Wiki
            </Link>
          </div>
        </section>

        <section className="mb-6 rounded-base border-2 border-border bg-background p-5 shadow-shadow">
          <h2 className="mb-3 text-xl font-heading uppercase tracking-wide">
            How to get in touch
          </h2>
          <p className="mb-4 text-sm leading-relaxed md:text-base">
            The easiest way is via <strong>Discord</strong>. Message either:
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-5 text-sm leading-relaxed md:text-base">
            <li>
              <span className="font-mono">jumpstone4477</span>{" "}
              <em>(preferred)</em>
            </li>
            <li>
              <span className="font-mono">akku_craft</span>
            </li>
          </ul>
          <p className="text-sm leading-relaxed md:text-base">
            If Discord doesn't work for you, send an email to us via the{" "}
            <a style={{ textDecoration: "underline" }} href="/contact">
              Contact page
            </a>
            .
          </p>
          <p className="mt-4 text-sm leading-relaxed md:text-base">
            Either way, please mention which area you'd like to work on when you
            reach out. It helps us point you in the right direction straight
            away.
          </p>
        </section>

        <section className="mb-6 rounded-base border-2 border-border bg-background p-5 shadow-shadow">
          <h2 className="mb-4 text-xl font-heading uppercase tracking-wide">
            Areas of contribution
          </h2>

          <div className="mb-4 rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">
            <h3 className="mb-2 text-lg font-heading uppercase tracking-wide">
              Firmware
            </h3>
            <p className="mb-3 text-sm leading-relaxed md:text-base">
              <span className="font-heading">Repository:</span>{" "}
              <a
                href="https://github.com/Akku-Craft/ArduinoBms"
                target="_blank"
                rel="noreferrer"
                className="font-heading underline underline-offset-2"
              >
                Akku-Craft/ArduinoBms
              </a>
            </p>
            <p className="mb-3 text-sm leading-relaxed md:text-base">
              The brain of the system. We work primarily in <strong>C++</strong>
              , with some C where it makes sense.
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed md:text-base">
              <li>Arduino / PlatformIO environment</li>
              <li>Real-time BMS logic (SoC, SoH, protection circuits)</li>
              <li>I²C / CAN communication</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              A good fit if you're comfortable with embedded C++ and want to
              work close to the hardware.
            </p>
          </div>

          <div className="mb-4 rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">
            <h3 className="mb-2 text-lg font-heading uppercase tracking-wide">
              Website
            </h3>
            <p className="mb-3 text-sm leading-relaxed md:text-base">
              <span className="font-heading">Repository:</span>{" "}
              <a
                href="https://github.com/Akku-Craft/website"
                target="_blank"
                rel="noreferrer"
                className="font-heading underline underline-offset-2"
              >
                Akku-Craft/website
              </a>
            </p>
            <p className="mb-3 text-sm leading-relaxed md:text-base">
              Probably the most accessible entry point, especially if you're new
              to the project and don't have a hardware background.
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed md:text-base">
              <li>Next.js + TypeScript</li>
              <li>UI improvements, content, and documentation pages</li>
            </ul>
          </div>

          <div className="mb-4 rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">
            <h3 className="mb-2 text-lg font-heading uppercase tracking-wide">
              Schematics
            </h3>
            <p className="mb-3 text-sm leading-relaxed md:text-base">
              <span className="font-heading">Repository:</span>{" "}
              <a
                href="https://github.com/Akku-Craft/schematics"
                target="_blank"
                rel="noreferrer"
                className="font-heading underline underline-offset-2"
              >
                Akku-Craft/schematics
              </a>
            </p>
            <p className="mb-3 text-sm leading-relaxed md:text-base">
              Right now, the focus here is on cleanup and optimization rather
              than new features. If you have experience with PCB design and
              enjoy making things tidy and correct, this is where you'd fit in.
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed md:text-base">
              <li>KiCad (or compatible tooling)</li>
              <li>Improving layout, annotations, and overall readability</li>
            </ul>
          </div>

          <div className="rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">
            <h3 className="mb-2 text-lg font-heading uppercase tracking-wide">
              3D Models
            </h3>
            <p className="mb-3 text-sm leading-relaxed md:text-base">
              <span className="font-heading">Repository:</span>{" "}
              <a
                href="https://github.com/Akku-Craft/3d-models"
                target="_blank"
                rel="noreferrer"
                className="font-heading underline underline-offset-2"
              >
                Akku-Craft/3d-models
              </a>
            </p>
            <p className="mb-3 text-sm leading-relaxed md:text-base">
              Enclosure design built around FDM printing. If you're into CAD and
              care about parts that actually assemble cleanly, we'd be happy to
              have you.
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed md:text-base">
              <li>PETG / ASA / ABS preferred for functional builds</li>
              <li>
                Thermal management and assembly ergonomics are the main concerns
              </li>
            </ul>
          </div>
        </section>

        <section className="rounded-base border-2 border-border bg-background p-5 shadow-shadow">
          <h2 className="mb-3 text-xl font-heading uppercase tracking-wide">
            One last thing
          </h2>
          <p className="mb-4 text-sm leading-relaxed md:text-base">
            Akku-Craft is intentionally scoped. We're not trying to do
            everything — we're trying to do a few things well. If you're unsure
            whether something fits, just ask before building it.
          </p>
          <p className="text-sm leading-relaxed md:text-base">
            We look forward to hearing from you.
          </p>
          <p className="mt-4 text-sm leading-relaxed md:text-base">
            — <em>The Akku-Craft Team</em>
          </p>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
