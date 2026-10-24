"use client";

import Navbar from "../components/layout/Navbar";
import Image from "next/image";

import ProjectHeader from "../components/project/ProjectHeader";
import SideNav from "@/app/components/project/SideNav";
import { FORE_PROJECT_SECTIONS } from "@/app/components/project/navigation";
import FigmaToSwiftUI from "../components/project/FigmaToSwiftUI";
import { useScrollObserver } from "../components/hooks/useScrollObserver";
import Counter from "../components/project/Counter";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircledIcon,
  Cross2Icon,
  CheckIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const fadeIn = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: {
    type: "spring",
    stiffness: 150,
    damping: 20,
    duration: 0.8,
  },
} as const;

export type SectionId =
  | "tldr"
  | "overview"
  | "finalsolution"
  | "problem"
  | "problemspace"
  | "5whys"
  | "marketgap"
  | "hmwstatement"
  | "research"
  | "painpoint"
  | "hypothesis"
  | "keyinsight"
  | "designprinciples"
  | "development"
  | "conceptexploration"
  | "howitworks"
  | "designsystem"
  | "solution"
  | "reflection";

export default function ForeProject() {
  const { activeSection, isParentActive } = useScrollObserver<SectionId>();

  return (
    <main className="pt-4 flex flex-col justify-center items-center w-full overflow-x-clip page-gradient scroll-smooth">
      <Navbar />
      <ProjectHeader
        title="FO/RE"
        role={["UI/UX Designer", "Full Stack Developer"]}
        timeline={["From August 2025", "To April 2026"]}
        team="Solo project"
        tools={["Figma, XCode,", "ShortCuts, Claude Code"]}
        link="/fore"
      />

      <div className="flex h-screen w-full items-center justify-center bg-black">
        <div className="relative aspect-[9/16] w-full h-full max-h-screen overflow-hidden">
          <Image
            alt="Fore"
            src="/images/fore.jpg"
            fill
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="pt-0 px-4 w-full md:pt-12 md:px-48 flex max-w-[1500px]">
        <SideNav
          activeSection={activeSection}
          isParentActive={isParentActive}
          sections={FORE_PROJECT_SECTIONS}
        />

        <div className="flex-[9] min-w-0 pt-12 md:pt-0">
          {/* TL;DR */}
          <motion.section
            {...fadeIn}
            id="tldr"
            className="flex flex-col gap-[64px] md:gap-[120px] mb-[80px] md:mb-[100px] scroll-mt-20"
          >
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< TL;DR >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>

            <article
              id="overview"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>Overview</h3>
              <div>
                <strong>
                  Transition into and out of work effortlessly with a simple
                  tap.
                </strong>
                <br />
                <br />
                While most productivity tools focus on managing the environment
                by adding more features like timers, blockers, and notification
                settings, FO/RE takes a different approach:{" "}
                <strong>
                  <i>shifting the focus.</i>
                </strong>{" "}
                This is specifically designed for remote workers who lack the
                environmental cues that signal the boundary between work and
                personal time.
                <br />
                <br />
                This project delivers{" "}
                <strong>
                  an intuitive experience with a frictionless user flow,
                </strong>{" "}
                helping remote workers seamlessly switch their mindset. It is
                designed to guide them smoothly into and out of their workday.
                <br />
                <br />
                It is built with Xcode and Apple Shortcuts, and has been tested
                in real environments through two academic semesters.
              </div>
            </article>

            <article
              id="finalsolution"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h2>Final Solution</h2>
              <div className="flex h-full w-full flex-col md:flex-row">
                <div className="relative aspect-video h-full w-full">
                  <Image
                    alt="preview"
                    src="/images/fore/thumbnail.png"
                    fill
                    className="h-full w-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </article>
          </motion.section>

          {/* PROBLEM */}
          <motion.section
            {...fadeIn}
            id="problem"
            className="flex flex-col gap-[64px] md:gap-[120px] mb-[80px] md:mb-[100px] scroll-mt-20"
          >
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< PROBLEM >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>

            <article
              id="problemspace"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>Problem</h3>
              <div>
                <p>
                  <strong>
                    There is no enough ways to keep engaged to the work when
                    people work at home.
                  </strong>
                </p>
                <br />
                <p>
                  These days, remote work participation continues to grow.
                  Around 50–55% of work models are hybrid, while fully remote
                  work models account for 15–27%. However, there are still
                  problems: remote workers struggle to separate their work and
                  personal life, often checking email outside official hours or
                  working on weekends. (Gallup; SearchLab.)
                </p>
                <br />
                <div className="flex gap-4 md:gap-12 flex-col md:flex-row">
                  <div className="flex flex-col items-left border border-white bg-white/50 text-white p-6 md:p-10 flex-1 rounded-2xl">
                    <h4 className="text-5xl md:text-7xl font-bold text-[#6D8EEB] font-archivo mb-2">
                      69%
                    </h4>
                    <p className="text-base md:text-lg text-black">
                      of remote workers report burnout from{" "}
                      <b>blurred work boundaries.</b>
                    </p>
                  </div>
                  <div className="flex flex-col items-left border border-white bg-white/50 text-white p-6 md:p-10 flex-1 rounded-2xl">
                    <h4 className="text-5xl md:text-7xl font-bold text-[#6D8EEB] font-archivo mb-2">
                      72%
                    </h4>
                    <p className="text-base md:text-lg text-black">
                      of remote/hybrid workers{" "}
                      <b>use their bedroom or living room</b> for work.
                    </p>
                  </div>
                </div>
                <br />
                <p>
                  These statistics show that the main point is that it is hard
                  to separate work and personal space in their home offices.
                  This means physical spaces; something that cannot be fixed
                  easily. Then, how can we improve physical space through a
                  digital solution?
                </p>
              </div>
            </article>

            <article
              id="5whys"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>5 Whys</h3>
              <div className="w-full">
                <p>
                  The 5 Whys helped figure out why physical spaces directly
                  affect focus while working from home. It showed that it is
                  important to have clear environmental triggers and properly
                  separate spaces for better focus.
                </p>
                <br />
                <p>A 5 Whys analysis confirmed this:</p>
                <br />
                <div className="relative -mx-4 px-4 overflow-x-auto md:mx-0 md:px-0 md:overflow-visible">
                  <Image
                    alt="5 Whys"
                    src="/images/fore/5whys.svg"
                    width={745}
                    height={495}
                    className="w-full min-w-[560px] md:min-w-0 h-auto object-contain"
                  />
                </div>
              </div>
            </article>

            <article
              id="marketgap"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>Market Gap</h3>
              <div className="flex flex-col md:flex-row gap-6 md:gap-[40px]">
                <div className="flex-1">
                  <p>
                    <strong>
                      The problem isn't a lack of tools; <br />
                      It's a missing signal.
                    </strong>
                  </p>
                  <br />
                  <p>
                    Existing tools try to fill this gap with more features.
                    However, managing all those tools becomes its own cognitive
                    load, leading to user frustration. It highlighted the
                    importance of an intuitive experience.
                  </p>
                </div>
                <div className="aspect-auto relative flex-1">
                  <Image
                    alt="Market Gap"
                    src="/images/fore/marketgap.svg"
                    width={323}
                    height={225}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </article>

            {/* Opportunity */}
            <article
              id="hmwstatement"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <div className="flex flex-col gap-3 bg-[#6D8EEB] text-white/80 rounded-xl px-6 py-8 md:px-[30px] md:py-[40px]">
                <p className="flex items-center text-xl md:text-2xl font-medium gap-2">
                  <CheckCircledIcon className="w-[22px] h-[22px]" />
                  Opportunity
                </p>
                <p className="text-base md:text-lg">
                  The opportunity wasn't to build another productivity app. It
                  was to design the signal itself.
                </p>
              </div>
            </article>

            <article className="flex flex-col gap-[10px] text-center">
              <p className="text-xs text-[#6D8EEB]">HOW MIGHT WE...</p>
              <p className="text-xl md:text-3xl leading-[160%]">
                incorporate physical cues to help users{" "}
                <strong>
                  switch <br className="hidden md:block" /> seamlessly between
                  work and personal modes
                </strong>{" "}
                in digital spaces for better work–life balance?
              </p>
            </article>
          </motion.section>

          {/* RESEARCH */}
          <motion.section
            {...fadeIn}
            id="research"
            className="flex flex-col gap-[64px] md:gap-[120px] mb-[80px] md:mb-[100px] scroll-mt-20"
          >
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< Research >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>

            <article
              id="painpoint"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>Pain Point</h3>
              <div>
                <p>
                  Through user interviews and surveys, I found 4 main pain
                  points of the users:
                </p>
                <br />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                  <div className="flex flex-col gap-2 items-left border border-white bg-white/50 text-white p-5 md:p-8 rounded-xl">
                    <Image
                      src="/images/fore/staricon.svg"
                      alt="Star Icon"
                      width={14}
                      height={14}
                    />
                    <p className="text-sm text-black">
                      Work mode <strong>bleeding into</strong> personal space
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-left border border-white bg-white/50 text-white p-5 md:p-8 rounded-xl">
                    <Image
                      src="/images/fore/staricon.svg"
                      alt="Star Icon"
                      width={14}
                      height={14}
                    />
                    <p className="text-sm text-black">
                      Constant <strong>minor interruptions</strong>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-left border border-white bg-white/50 text-white p-5 md:p-8 rounded-xl">
                    <Image
                      src="/images/fore/staricon.svg"
                      alt="Star Icon"
                      width={14}
                      height={14}
                    />
                    <p className="text-sm text-black">
                      <strong>Unstructured</strong> and{" "}
                      <strong>unrefreshing</strong> breaks
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-left border border-white bg-white/50 text-white p-5 md:p-8 rounded-xl">
                    <Image
                      src="/images/fore/staricon.svg"
                      alt="Star Icon"
                      width={14}
                      height={14}
                    />
                    <p className="text-sm text-black">
                      <strong>Lack of</strong> a definitive end-of-work signal
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article
              id="hypothesis"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>Hypothesis</h3>
              <p>
                I came in with four hypotheses. One of them was completely wrong
                — and that wrong turn shaped everything. <br /> <br /> Over one
                year, I conducted research across discovery, synthesis, and
                validation phases — surveys, interviews, competitive analysis,
                Reddit analysis, co-creation sessions, and scenario
                walkthroughs. <br /> <br />
                Here's what I expected, and where the research pushed back.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Hypothesis 1 */}
                <div className="relative p-6 rounded-2xl flex flex-col text-black border border-white bg-white/50 gap-[6px]">
                  <h3>HYPOTHESIS 01</h3>
                  <p>
                    <strong>
                      Feature-rich tools help users stay organized.
                    </strong>
                    <span className="block">&nbsp;</span>
                  </p>
                  <div className="inline-flex w-fit text-sm text-[#A32D2D] gap-[5px] items-center px-[12px] py-[6px] bg-[#FCEBEB] rounded-md mt-[20px]">
                    <Cross2Icon width={12} height={12} />
                    Invalidated
                  </div>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    Participants consistently found feature-heavy tools
                    overwhelming. More to manage meant more cognitive load — the
                    opposite of the goal.
                  </p>
                </div>
                {/* Hypothesis 2 */}
                <div className="relative p-6 rounded-2xl flex flex-col text-black border border-white bg-white/50 gap-[6px]">
                  <h3>HYPOTHESIS 02</h3>
                  <p>
                    <strong>
                      Proper break time matters more than I assumed.
                    </strong>
                  </p>
                  <div className="inline-flex w-fit text-sm text-[#3B6D11] gap-[5px] items-center px-[12px] py-[6px] bg-[#EAF3DE] rounded-md mt-[20px]">
                    <CheckIcon width={12} height={12} />
                    Validated
                  </div>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    Every participant raised breaks unprompted - not as a
                    nice-to-have, but as a source of genuine daily frustration.
                  </p>
                </div>
                {/* Hypothesis 3 */}
                <div className="relative p-6 rounded-2xl flex flex-col text-black border border-white bg-white/50 gap-[6px]">
                  <h3>HYPOTHESIS 03</h3>
                  <p>
                    <strong>
                      A physical gesture carries more weight than a digital
                      button.
                    </strong>
                  </p>
                  <div className="inline-flex w-fit text-sm text-[#3B6D11] gap-[5px] items-center px-[12px] py-[6px] bg-[#EAF3DE] rounded-md mt-[20px]">
                    <CheckIcon width={12} height={12} />
                    Validated
                  </div>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    Initial concern: would tapping a card feel gimmicky? All
                    five co-creation participants said it would actually help
                    them switch mindsets.
                  </p>
                </div>
                {/* Hypothesis 4 */}
                <div className="relative p-6 rounded-2xl flex flex-col text-black border border-white bg-white/50 gap-[6px]">
                  <h3>HYPOTHESIS 04</h3>
                  <p>
                    <strong>
                      Users want intentionality after work, not just during it.
                    </strong>
                  </p>
                  <div className="inline-flex w-fit text-sm text-[#3B6D11] gap-[5px] items-center px-[12px] py-[6px] bg-[#EAF3DE] rounded-md mt-[20px]">
                    <CheckIcon width={12} height={12} />
                    Validated
                  </div>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    4 of 5 participants ended their day doomscrolling. 3 of 4
                    wanted something more intentional-but had no cue to make the
                    shift.
                  </p>
                </div>
              </div>
            </article>

            <article
              id="keyinsight"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>Key insights</h3>
              <div className="flex flex-col gap-[20px]">
                <p>Across all four hypotheses, one pattern kept emerging:</p>
                <div className="flex flex-col gap-3 bg-[#FFDB6E] text-black/80 rounded-xl px-6 py-8 md:px-[30px] md:py-[40px]">
                  <p className="flex items-start md:items-center text-base md:text-lg font-medium gap-3">
                    <ExclamationTriangleIcon className="shrink-0 mt-1 md:mt-0" />
                    People don't need more features. They need a clearer signal.
                  </p>
                </div>
                <p>
                  The most effective transition isn't a checklist or a timer —
                  it's a <strong>ritual.</strong> Something small, repeatable,
                  and physical enough to register as a meaningful boundary.
                </p>
              </div>
            </article>

            <article
              id="designprinciples"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>Design Principles</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {/* Design Principles 1 */}
                <div className="relative p-6 rounded-2xl flex flex-col text-black border border-white bg-white/50">
                  <h3>01</h3>
                  <h4 className="font-bold text-lg mb-2 leading-snug text-[#6D8EEB]">
                    Enable intentional transitions
                  </h4>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    Support deliberate switching between work and personal modes
                    - in both directions. Entering focus and exiting it are
                    equally important.
                  </p>
                </div>
                {/* Design Principles 2 */}
                <div className="relative p-6 rounded-2xl flex flex-col text-black border border-white bg-white/50">
                  <h3>02</h3>
                  <h4 className="font-bold text-lg mb-2 leading-snug text-[#6D8EEB]">
                    Keep interactions minimal
                  </h4>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    One physical action triggers the full environment change. No
                    extra steps, no ongoing management. The ritual should be
                    effortless.
                  </p>
                </div>
                {/* Design Principles 3 */}
                <div className="relative p-6 rounded-2xl flex flex-col text-black border border-white bg-white/50">
                  <h3>03</h3>
                  <h4 className="font-bold text-lg mb-2 leading-snug text-[#6D8EEB]">
                    Use physical cues as behavioral anchors
                  </h4>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    The NFC tap isn't just a shortcut. It's a signal the brain
                    can learn to associate with context - the same way a commute
                    once was.
                  </p>
                </div>
              </div>
            </article>
          </motion.section>

          {/* DEVELOPMENT */}
          <motion.section
            {...fadeIn}
            id="development"
            className="flex flex-col gap-[64px] md:gap-[120px] mb-[80px] md:mb-[100px] scroll-mt-20"
          >
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< DEVELOPMENT >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>

            <article
              id="conceptexploration"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>Concept Exploration</h3>
              <div className="flex flex-col gap-[20px]">
                <p>Three directions were evaluated:</p>
                <div className="relative -mx-4 px-4 overflow-x-auto md:mx-0 md:px-0 md:overflow-visible">
                  <Image
                    alt="Concept Exploration"
                    src="/images/fore/conceptexplo.svg"
                    width={745}
                    height={495}
                    className="w-full min-w-[560px] md:min-w-0 h-auto object-contain"
                  />
                </div>
                <p>
                  The final concept combines <strong>NFC cards</strong> with{" "}
                  <strong>Apple Shortcuts.</strong> Neither works as well alone
                  — together, they create a seamless physical-to-digital ritual.
                </p>
              </div>
            </article>

            <article
              id="howitworks"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>How it works</h3>
              <p>
                From a one-time setup to a single daily tap: what the user does,
                and what runs behind it.
              </p>
              <div className="w-full rounded-2xl text-black border border-white bg-white/50 overflow-x-auto md:overflow-visible">
                <Image
                  alt="System Flow"
                  src="/images/fore/flow.svg"
                  width={1320}
                  height={1012}
                  className="w-full min-w-[760px] md:min-w-0 h-auto object-contain"
                />
              </div>
              <p className="md:hidden -mt-2 font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[1px] text-[#A3A3A3]">
                SWIPE TO SEE THE FULL FLOW →
              </p>
              <div className="flex gap-3 items-start md:items-center p-4 bg-[#EBEBEB] text-[#A3A3A3] border border-[#A3A3A3] border-dashed rounded-lg w-full md:w-fit">
                <div className="aspect-square relative shrink-0 bg-white rounded-sm p-2">
                  <Image
                    alt="Gemini API icon"
                    src="/images/gemini.svg"
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>
                <p>
                  The Gemini API suggests work-app and blocked-app presets based
                  on the user’s job.
                </p>
              </div>
            </article>

            <article
              id="designsystem"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>Design System</h3>
              <p className="max-w-[760px] leading-relaxed opacity-90">
                I translated the Figma variables into one SwiftUI file: colour,
                type, spacing and radius as tokens, with core components built
                on top. Every screen pulls from the same source.
              </p>
              <FigmaToSwiftUI showHeader={false} />
            </article>
          </motion.section>

          {/* SOLUTION */}
          <motion.section
            {...fadeIn}
            id="solution"
            className="flex flex-col gap-[64px] md:gap-[120px] mb-[80px] md:mb-[100px] scroll-mt-20"
          >
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< SOLUTION >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>

            <article className="flex flex-col gap-[20px] scroll-mt-20">
              <h3>solution</h3>
              <div className="flex gap-3 items-start md:items-center p-4 bg-[#EBEBEB] text-[#A3A3A3] border border-[#A3A3A3] border-dashed rounded-lg w-full md:w-fit">
                <div className="aspect-square relative shrink-0">
                  <Image
                    alt="Xcode"
                    src="/images/fore/Xcode.svg"
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </div>
                <p>
                  I built FO/RE in Xcode — a fully functional iOS app, not a
                  prototype.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {/* 1 */}
                <div className="relative p-5 rounded-2xl flex flex-col text-black border border-white bg-white/50 md:aspect-square gap-[10px]">
                  <div className="bg-[#6D8EEB] p-2 w-fit rounded-sm">
                    <p className="w-[12px] h-[12px] text-white text-sm flex items-center justify-center">
                      1
                    </p>
                  </div>
                  <h4 className="font-bold text-xl leading-snug">
                    Mode Switching
                  </h4>
                  <p className="leading-relaxed opacity-90 flex-grow text-sm">
                    One tap transitions the full digital environment between
                    work and personal contexts.
                  </p>
                </div>

                {/* 2 */}
                <div className="relative p-5 rounded-2xl flex flex-col text-black border border-white bg-white/50 md:aspect-square gap-[10px]">
                  <div className="bg-[#6D8EEB] p-2 w-fit rounded-sm">
                    <p className="w-[12px] h-[12px] text-white text-sm flex items-center justify-center">
                      2
                    </p>
                  </div>
                  <h4 className="font-bold text-xl leading-snug">
                    Focus Blocking
                  </h4>
                  <p className="leading-relaxed opacity-90 flex-grow text-sm">
                    During Work mode, distracting apps and notifications are
                    automatically suppressed. Focus is the default state, not
                    something to fight for.
                  </p>
                </div>

                {/* 3 */}
                <div className="relative p-5 rounded-2xl flex flex-col text-black border border-white bg-white/50 md:aspect-square gap-[10px]">
                  <div className="bg-[#6D8EEB] p-2 w-fit rounded-sm">
                    <p className="w-[12px] h-[12px] text-white text-sm flex items-center justify-center">
                      3
                    </p>
                  </div>
                  <h4 className="font-bold text-xl leading-snug">
                    Intentional rest
                  </h4>
                  <p className="leading-relaxed opacity-90 flex-grow text-sm">
                    After Work mode surfaces energy-based activity suggestions —
                    High, Mid, or Low — so rest is designed, not just the
                    absence of work.
                  </p>
                </div>
              </div>

              <div className="mt-[30px] flex flex-col gap-6 md:gap-[50px]">
                {/* 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-5 gap-6 items-center w-full rounded-2xl text-black border border-white bg-white/50">
                  <div className="order-first md:order-none relative p-5 rounded-2xl flex flex-col text-black border border-white bg-white/50 justify-center gap-[10px]">
                    <div className="bg-[#6D8EEB] p-2 w-fit rounded-sm">
                      <p className="w-[8px] h-[8px] text-white text-sm flex items-center justify-center">
                        1
                      </p>
                    </div>
                    <h4 className="font-bold text-sm leading-snug">
                      NFC card as a ritual
                    </h4>
                    <p className="leading-relaxed opacity-90 text-sm">
                      A physical NFC card triggers the transition between Work
                      and Personal modes. The point isn't automation, it's the
                      small, intentional gesture itself.
                    </p>
                  </div>

                  <div className="relative w-full max-w-[220px] md:max-w-[280px] aspect-[9/19] mx-auto flex items-center justify-center">
                    <video
                      src="/images/fore/screenRecord/1.mov"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute top-[3%] left-[4%] w-[92%] h-[94%] object-cover rounded-[38px] overflow-hidden m-auto"
                    />

                    <img
                      src="/images/fore/iphoneMockup.svg"
                      alt="iPhone Mockup"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
                    />
                  </div>

                  <div className="hidden md:block"></div>
                </div>

                {/* 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-5 gap-6 items-center w-full rounded-2xl text-black border border-white bg-white/50">
                  <div className="hidden md:block"></div>

                  <div className="relative w-full max-w-[220px] md:max-w-[280px] aspect-[9/19] mx-auto flex items-center justify-center">
                    <video
                      src="/images/fore/screenRecord/2.mov"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute top-[3%] left-[4%] w-[92%] h-[94%] object-cover rounded-[38px] overflow-hidden m-auto"
                    />

                    <img
                      src="/images/fore/iphoneMockup.svg"
                      alt="iPhone Mockup"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
                    />
                  </div>

                  <div className="order-first md:order-none relative p-5 rounded-2xl flex flex-col text-black border border-white bg-white/50 justify-center gap-[10px]">
                    <div className="bg-[#6D8EEB] p-2 w-fit rounded-sm">
                      <p className="w-[8px] h-[8px] text-white text-sm flex items-center justify-center">
                        2
                      </p>
                    </div>
                    <h4 className="font-bold text-sm leading-snug">
                      Personalized app recommendations
                    </h4>
                    <p className="leading-relaxed opacity-90 text-sm">
                      During onboarding, users input their job role. The app
                      uses this to recommend which apps to open during Work
                      mode, reducing the cognitive load of manual setup
                      supported by AI.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-5 gap-6 items-center w-full rounded-2xl text-black border border-white bg-white/50">
                  <div className="order-first md:order-none relative p-5 rounded-2xl flex flex-col text-black border border-white bg-white/50 justify-center gap-[10px]">
                    <div className="bg-[#6D8EEB] p-2 w-fit rounded-sm">
                      <p className="w-[8px] h-[8px] text-white text-sm flex items-center justify-center">
                        3
                      </p>
                    </div>
                    <h4 className="font-bold text-sm leading-snug">
                      Distraction blocking
                    </h4>
                    <p className="leading-relaxed opacity-90 text-sm">
                      Users select which apps to block during Work mode. Once
                      confirmed, blocking activates automatically every time
                      Work mode is triggered — no repeat configuration needed.
                    </p>
                  </div>

                  <div className="relative w-full max-w-[220px] md:max-w-[280px] aspect-[9/19] mx-auto flex items-center justify-center">
                    <video
                      src="/images/fore/screenRecord/3.mov"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute top-[3%] left-[4%] w-[92%] h-[94%] object-cover rounded-[38px] overflow-hidden m-auto"
                    />

                    <img
                      src="/images/fore/iphoneMockup.svg"
                      alt="iPhone Mockup"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
                    />
                  </div>

                  <div className="hidden md:block"></div>
                </div>

                {/* 4 */}
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-5 gap-6 items-center w-full rounded-2xl text-black border border-white bg-white/50">
                  {/* Two phones: side by side on mobile, separate grid cells on desktop */}
                  <div className="flex gap-3 md:contents">
                    <div className="relative flex-1 w-full max-w-[220px] md:max-w-[280px] aspect-[9/19] mx-auto flex items-center justify-center">
                      <video
                        src="/images/fore/screenRecord/4.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-[3%] left-[4%] w-[92%] h-[94%] object-cover rounded-[38px] overflow-hidden m-auto"
                      />

                      <img
                        src="/images/fore/iphoneMockup.svg"
                        alt="iPhone Mockup"
                        className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
                      />
                    </div>

                    <div className="relative flex-1 w-full max-w-[220px] md:max-w-[280px] aspect-[9/19] mx-auto flex items-center justify-center">
                      <video
                        src="/images/fore/screenRecord/4-2.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-[3%] left-[4%] w-[92%] h-[94%] object-cover rounded-[38px] overflow-hidden m-auto"
                      />

                      <img
                        src="/images/fore/iphoneMockup.svg"
                        alt="iPhone Mockup"
                        className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
                      />
                    </div>
                  </div>

                  <div className="order-first md:order-none relative p-5 rounded-2xl flex flex-col text-black border border-white bg-white/50 justify-center gap-[10px]">
                    <div className="bg-[#6D8EEB] p-2 w-fit rounded-sm">
                      <p className="w-[8px] h-[8px] text-white text-sm flex items-center justify-center">
                        4
                      </p>
                    </div>
                    <h4 className="font-bold text-sm leading-snug">
                      Intentional rest with Pomodoro
                    </h4>
                    <p className="leading-relaxed opacity-90 text-sm">
                      Three focus rhythm presets — Deep Focus, Standard, and
                      Light Pace — provide structured work and break intervals.
                      Rest is built into the work session, not an afterthought.
                    </p>
                  </div>
                </div>

                {/* 5 */}
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-5 gap-6 items-center w-full rounded-2xl text-black border border-white bg-white/50">
                  <div className="order-first md:order-none relative p-5 rounded-2xl flex flex-col text-black border border-white bg-white/50 justify-center gap-[10px]">
                    <div className="bg-[#6D8EEB] p-2 w-fit rounded-sm">
                      <p className="w-[8px] h-[8px] text-white text-sm flex items-center justify-center">
                        5
                      </p>
                    </div>
                    <h4 className="font-bold text-sm leading-snug">
                      After Work Suggestions
                    </h4>
                    <p className="leading-relaxed opacity-90 text-sm">
                      After the workday ends, the app recommends activities
                      based on the user's energy level. Planned next step: link
                      these suggestions directly to Apple Reminders via
                      Shortcuts.
                    </p>
                  </div>

                  <div className="relative w-full max-w-[220px] md:max-w-[280px] aspect-[9/19] mx-auto flex items-center justify-center">
                    <video
                      src="/images/fore/screenRecord/5.mov"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute top-[3%] left-[4%] w-[92%] h-[94%] object-cover rounded-[38px] overflow-hidden m-auto"
                    />

                    <img
                      src="/images/fore/iphoneMockup.svg"
                      alt="iPhone Mockup"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
                    />
                  </div>

                  <div className="hidden md:block"></div>
                </div>

                {/* 6 */}
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-5 gap-6 items-center w-full rounded-2xl text-black border border-white bg-white/50">
                  <div className="hidden md:block"></div>

                  <div className="relative w-full max-w-[220px] md:max-w-[280px] aspect-[9/19] mx-auto flex items-center justify-center">
                    <video
                      src="/images/fore/screenRecord/6.mov"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute top-[3%] left-[4%] w-[92%] h-[94%] object-cover rounded-[38px] overflow-hidden m-auto"
                    />

                    <img
                      src="/images/fore/iphoneMockup.svg"
                      alt="iPhone Mockup"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
                    />
                  </div>

                  <div className="order-first md:order-none relative p-5 rounded-2xl flex flex-col text-black border border-white bg-white/50 justify-center gap-[10px]">
                    <div className="bg-[#6D8EEB] p-2 w-fit rounded-sm">
                      <p className="w-[8px] h-[8px] text-white text-sm flex items-center justify-center">
                        6
                      </p>
                    </div>
                    <h4 className="font-bold text-sm leading-snug">
                      Shortcuts export
                    </h4>
                    <p className="leading-relaxed opacity-90 text-sm">
                      At the end of onboarding, a step-by-step guide walks users
                      through setting up their Apple Shortcuts configuration —
                      making a technically complex setup feel straightforward.
                    </p>
                  </div>
                </div>

                {/* 7 */}
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-5 gap-6 items-center w-full rounded-2xl text-black border border-white bg-white/50">
                  <div className="order-first md:order-none relative p-5 rounded-2xl flex flex-col text-black border border-white bg-white/50 justify-center gap-[10px]">
                    <div className="bg-[#6D8EEB] p-2 w-fit rounded-sm">
                      <p className="w-[8px] h-[8px] text-white text-sm flex items-center justify-center">
                        7
                      </p>
                    </div>
                    <h4 className="font-bold text-sm leading-snug">
                      Home Screen
                    </h4>
                    <p className="leading-relaxed opacity-90 text-sm">
                      All active settings are visible and editable from a single
                      screen — schedule, Pomodoro rhythm, managed apps, and
                      after-work suggestions. Everything in one place, nothing
                      buried.
                    </p>
                  </div>

                  <div className="relative w-full max-w-[220px] md:max-w-[280px] aspect-[9/19] mx-auto flex items-center justify-center">
                    <video
                      src="/images/fore/screenRecord/7.mov"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute top-[3%] left-[4%] w-[92%] h-[94%] object-cover rounded-[38px] overflow-hidden m-auto"
                    />

                    <img
                      src="/images/fore/iphoneMockup.svg"
                      alt="iPhone Mockup"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
                    />
                  </div>

                  <div className="hidden md:block"></div>
                </div>
              </div>
            </article>
          </motion.section>

          {/* IMPACT & TAKEAWAYS */}
          <motion.section
            {...fadeIn}
            id="reflection"
            className="flex flex-col gap-[64px] md:gap-[120px] mb-[80px] md:mb-[100px] scroll-mt-20"
          >
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< REFLECTION >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>
            <article className="flex flex-col gap-[20px]">
              <h3>Takeaways & Reflection</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {/* Reflection 1 */}
                <div className="relative p-6 rounded-2xl flex flex-col text-black border border-white bg-white/50">
                  <h4 className="font-bold text-lg mb-2 leading-snug text-[#6D8EEB]">
                    Reframing the problem
                  </h4>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    I started this project by asking what was broken in remote
                    work. However, after research I asked a different question:
                    which moment do people need help with? The answer was the
                    transition, not the work itself.
                  </p>
                </div>

                {/* Reflection 2 */}
                <div className="relative p-6 rounded-2xl flex flex-col text-black border border-white bg-white/50">
                  <h4 className="font-bold text-lg mb-2 leading-snug text-[#6D8EEB]">
                    A ritual, not an interface
                  </h4>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    The most important interaction in FO/RE doesn’t happen on a
                    screen. I was designing a ritual, and the physical item
                    mattered more than any button I drew.
                  </p>
                </div>

                {/* Reflection 3 */}
                <div className="relative p-6 rounded-2xl flex flex-col text-black border border-white bg-white/50">
                  <h4 className="font-bold text-lg mb-2 leading-snug text-[#6D8EEB]">
                    Less is harder
                  </h4>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    My own research said fewer features were better, but it was
                    hard to choose which features I should keep. I kept daily
                    use to one tap and moved the rest to setup. Designing that
                    flow was hardest part.
                  </p>
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-6">
              <h3>Future Opportunities</h3>
              <div className="flex flex-col gap-3 md:gap-4 p-3 md:py-6 md:px-6 bg-white/50 border border-white rounded-3xl">
                {[
                  {
                    title: "Android and Windows compatibility",
                    desc: "The system currently assumes an Apple ecosystem, which limits who it can reach.",
                  },
                  {
                    title:
                      "A portable trigger for workers without a fixed desk",
                    desc: "The card works best in one place, so people who move between spaces need a different cue.",
                  },
                  {
                    title: "Extend to team-level context switching",
                    desc: "Hybrid teams have the same boundary problem at a collective level: no shared signal for when collaboration begins and when focused work does.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start p-4 bg-white rounded-xl"
                  >
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#6D8EEB] text-white rounded text-base font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-2 leading-[170%]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
