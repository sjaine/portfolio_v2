"use client";

import Navbar from "../components/layout/Navbar";
import Image from "next/image";

import ProjectHeader from "../components/project/ProjectHeader";
import SideNav from "@/app/components/project/SideNav";
import { useScrollObserver } from "../components/hooks/useScrollObserver";
import Counter from "../components/project/Counter";

import { motion } from "framer-motion";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

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
  | "researchinsights"
  | "challenge"
  | "hmwstatement"
  | "designprinciples"
  | "userflow"
  | "figma"
  | "development"
  | "solution"
  | "reflection";

export default function InstagramProject() {
  const { activeSection, isParentActive } = useScrollObserver<SectionId>();

  return (
    <main className="pt-4 flex flex-col justify-center items-center w-screen page-gradient scroll-smooth">
      <Navbar />
      <ProjectHeader
        title="Instagram Accessibility"
        role={["UI/UX Designer", "Front-end Developer"]}
        timeline={["From August 2023", "From December 2023"]}
        team="Solo project"
        tools={["Figma, Visual Studio Code,", "HTML, CSS, REST APIs"]}
        link="https://jaineinstaaccessibility.netlify.app/"
      />

      <div className="h-[800px] w-full bg-black overflow-hidden">
        <video
          src="/images/preview.mov"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full"
        />
      </div>

      <div className="pt-12 px-48 flex max-w-[1500px]">
        <SideNav
          activeSection={activeSection}
          isParentActive={isParentActive}
        />

        <div className="flex-[9]">
          {/* TL;DR */}
          <motion.section
            {...fadeIn}
            id="tldr"
            className="flex flex-col gap-[100px] mb-[100px] scroll-mt-20"
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
                Instagram has become one of the most essential photo-sharing
                platforms today. However, Instagram's current alt text feature
                is <strong>hidden and inconsistently used</strong>, limiting
                accessibility for people with visual impairments. <br /> <br />
                This project aims to{" "}
                <strong>
                  improve the visibility and accessibility of alt text
                </strong>
                , while providing AI support to help users write more effective
                descriptions by applying an inclusive design spectrum. <br />
                <br />
                The redesigned flow <strong>reduces steps by 20%</strong> and
                strengthens accessibility without increasing cognitive load.
              </div>
            </article>
            <article
              id="finalsolution"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h2>Final Solution</h2>
              <div className="flex h-full w-full">
                <p className="flex-[4]">
                  Main Feed → Discoverability Pick Photo → AI assist Add ALT →
                  workflow integration Edit ALT → screen reader hierarchy
                </p>
                <div className="w-[300px] h-full">
                  <Image
                    src="/images/instagram/problem1.svg"
                    alt="problem"
                    width={300}
                    height={700}
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          </motion.section>

          {/* PROBLEM */}
          <motion.section
            {...fadeIn}
            id="problem"
            className="flex flex-col gap-[100px] mb-[100px] scroll-mt-20"
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
              <div className="flex">
                <div className="flex-[4] pr-16 flex flex-col justify-between">
                  <p>
                    Post, Story, Reels… <br />
                    <br />I love scrolling through Instagram — <br />
                    it's all about the <em>visuals.</em>
                    <br />
                    <br />
                    But what about the <em>others?</em>
                    <br />
                    What about those who can't see the feed? <br />
                    <br />
                    <br />
                    Through heuristic evaluation, I found that the alt text
                    button* was notably <strong>difficult to locate.</strong>
                    <br />
                    <br />
                    It was hidden in a non-intuitive place, creating a barrier
                    not only for people with <strong>visual impairments</strong>
                    , but also for <strong>general users</strong> who want to
                    provide accessible content.
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    * based on the 2023 Instagram interface
                  </p>
                </div>
                <div className="w-[300px] h-full">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    scrollbar={{
                      draggable: true,
                    }}
                    modules={[Scrollbar, Autoplay]}
                    className="mySwiper w-full h-full"
                  >
                    <SwiperSlide>
                      <Image
                        src="/images/instagram/problem1.svg"
                        alt="problem"
                        width={300}
                        height={700}
                        className="object-cover"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/images/instagram/problem2.svg"
                        alt="problem"
                        width={300}
                        height={700}
                        className="object-cover"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/images/instagram/problem3.svg"
                        alt="problem"
                        width={300}
                        height={700}
                        className="object-cover"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/images/instagram/problem4.svg"
                        alt="problem"
                        width={300}
                        height={700}
                        className="object-cover"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </article>

            <article className="flex flex-col gap-5">
              <div className="w-2/3 bg-[#EBEBEB] rounded-t-4xl rounded-r-4xl p-8">
                <div className="pb-3">
                  <strong>1. General User</strong>
                </div>
                <p>
                  Users <strong>struggle to find the option</strong> to add alt
                  text, as it's hidden at the bottom of the advanced settings
                  page, making it easy to miss.
                </p>
              </div>
              <div className="w-2/3 bg-[#4D57FE] text-white rounded-t-4xl rounded-l-4xl p-8 self-end">
                <div className="pb-3">
                  <strong>2. Users with visual impairments</strong>
                </div>
                <p>
                  Users with visual impairments report that{" "}
                  <strong>many posts lack sufficient alt text</strong>, leaving
                  them to rely entirely on whether others have provided it.
                </p>
              </div>
            </article>

            <article
              id="researchinsights"
              className="flex flex-col gap-[100px] scroll-mt-20"
            >
              <div className="flex flex-col gap-[20px]">
                <h3>Research insights</h3>
                <div className="flex flex-col">
                  <div className="grid grid-cols-3 gap-12 text-center">
                    <div>
                      <div className="font-bold text-6xl text-[#6196F0] pb-5">
                        <Counter to={35} suffix="%" />
                      </div>
                      <p>
                        Users struggle <strong>to find</strong> the alt text
                        option
                      </p>
                    </div>
                    <div>
                      <div className="font-bold text-6xl text-[#6196F0] pb-5">
                        <Counter to={34} suffix="%" />
                      </div>
                      <p>
                        Visually impaired users are{" "}
                        <strong>dissatisfied with inaccurate</strong>
                        <br />
                        auto-generated descriptions
                      </p>
                    </div>
                    <div>
                      <div className="font-bold text-6xl text-[#6196F0] pb-5">
                        <Counter to={5} prefix="#" suffix=" / 5" />
                      </div>
                      <p>
                        Instagram ranked{" "}
                        <strong>lowest in accessibility</strong> among
                        competitors
                      </p>
                    </div>
                  </div>
                  <p className="text-[#a3a3a3] text-xs self-end mt-8">
                    Methodology: Heuristic Evaluation, Reddit Analysis (60+
                    comments), Competitor Audit
                  </p>
                </div>
              </div>
              <p>
                Additionally, 15% of users said they were unsure how to{" "}
                <strong>properly write alt text</strong>, and 23% of visually
                impaired users struggle with Instagram due to missing{" "}
                <strong>user-generated descriptions</strong>. Some participants
                also mentioned that this is one of the reasons why users with
                visual impairments avoid using Instagram or feel dissatisfied
                with the platform.
              </p>
              <div className="flex gap-12">
                <div className="flex flex-col items-center bg-black text-white p-10 flex-1 rounded-2xl">
                  <h4 className="text-6xl text-bold font-[IBM_Plex_Sans] pb-5">
                    ①
                  </h4>
                  <p className="text-lg text-center">
                    The alt text feature is difficult to find and lacks clear
                    writing guidance.
                  </p>
                </div>
                <div className="flex flex-col items-center bg-black text-white p-10 flex-1 rounded-2xl">
                  <h4 className="text-6xl text-bold font-[IBM_Plex_Sans] pb-5">
                    ②
                  </h4>
                  <p className="text-lg text-center">
                    Current auto-generated descriptions are often inaccurate or
                    insufficient.
                  </p>
                </div>
              </div>
            </article>
          </motion.section>

          {/* CHALLENGE */}
          <motion.section
            {...fadeIn}
            id="challenge"
            className="flex flex-col gap-[100px] mb-[100px] scroll-mt-20"
          >
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< CHALLENGE >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>

            <article
              id="hmwstatement"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <p>
                The challenge wasn’t just improving accessibility. Instagram’s
                posting flow is{" "}
                <strong>built to be fast and frictionless</strong>, so any added
                step could easily create friction. I needed to improve
                accessibility <em>without</em> making the experience feel
                heavier or more complicated.
              </p>
            </article>

            <article className="flex flex-col gap-[10px] text-center">
              <p className="text-xs text-[#6D8EEB]">HOW MIGHT WE...</p>
              <p className="text-3xl leading-[160%]">
                Make the alt text feature{" "}
                <strong>more visible and easier to use</strong>, <br />
                while keeping Instagram’s fast and simple posting flow?
              </p>
            </article>

            <article className="flex flex-col gap-[20px]">
              <p>
                To address this, I explored{" "}
                <strong>integrating AI support</strong> into the alt text flow
                to reduce cognitive load while improving overall accessibility.
              </p>
            </article>

            <article>
              <h3>User Understanding</h3>
              <p>
                Through persona development, context scenarios, and empathy
                mapping, I identified two primary user groups:
                <br />
                <br />
                <span className="rounded-full bg-[#6D8EEB] text-white px-4 py-1 font-bold">
                  ① General Users
                </span>
                <br />
                Often unaware of where the alt text feature is located. Even
                when they intend to use accessibility features, the hidden
                interface and multi-step process discourage engagement. <br />
                <br />
                <span className="rounded-full bg-[#6D8EEB] text-white px-4 py-1 font-bold">
                  ② Users with Visual Impairments
                </span>
                <br />
                Rely heavily on descriptive metadata to understand visual
                content. However, inconsistent alt text availability and limited
                visibility of accessibility tools reduce their overall
                experience and trust in the platform.
              </p>
            </article>

            <article
              id="designprinciples"
              className="flex flex-col gap-[100px] scroll-mt-20"
            >
              <div className="flex flex-col gap-[20px]">
                <h3>Design principles</h3>
                <p>
                  Instead of focusing only on permanent disability, I approached
                  accessibility through an{" "}
                  <strong>inclusive design spectrum</strong> to ensure broader
                  usability impact. It helped to define user’s final goal, and
                  design principles depending on the situations.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-[24px] items-center w-full max-w-[200px]">
                  <Image
                    src="/images/instagram/permanentuser.svg"
                    alt="Permanent User"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/images/instagram/permanentbubble.svg"
                    alt="Permanent User"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                  <ArrowDownIcon className="w-8 h-10" />
                  <div className="flex flex-col w-full bg-black text-white p-6 gap-2 rounded-lg h-[148px]">
                    <Image
                      src="/images/instagram/staricon.svg"
                      alt="Star Icon"
                      width={20}
                      height={20}
                    />
                    <p>
                      Consider <strong>screen reader</strong> compatibility
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-center w-full max-w-[200px]">
                  <Image
                    src="/images/instagram/temporaryuser.svg"
                    alt="Permanent User"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/images/instagram/temporarybubble.svg"
                    alt="Permanent User"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                  <ArrowDownIcon className="w-8 h-10" />
                  <div className="flex flex-col w-full bg-black text-white p-6 gap-2 rounded-lg h-[148px]">
                    <Image
                      src="/images/instagram/staricon.svg"
                      alt="Star Icon"
                      width={20}
                      height={20}
                    />
                    <p>
                      Ensure usability with{" "}
                      <strong>screen zoom & voice assistance</strong>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-center w-full max-w-[200px]">
                  <Image
                    src="/images/instagram/situationaluser.svg"
                    alt="Permanent User"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/images/instagram/situationalbubble.svg"
                    alt="Permanent User"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                  <ArrowDownIcon className="w-8 h-10" />
                  <div className="flex flex-col w-full bg-black text-white p-6 gap-2 rounded-lg h-[148px]">
                    <Image
                      src="/images/instagram/staricon.svg"
                      alt="Star Icon"
                      width={20}
                      height={20}
                    />
                    <p>
                      Make the alt text option more{" "}
                      <strong>visible and accessible</strong>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-center w-full max-w-[200px]">
                  <Image
                    src="/images/instagram/generaluser.svg"
                    alt="Permanent User"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/images/instagram/generalbubble.svg"
                    alt="Permanent User"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                  <ArrowDownIcon className="w-8 h-10" />
                  <div className="flex flex-col w-full bg-black text-white p-6 gap-2 rounded-lg h-[148px]">
                    <Image
                      src="/images/instagram/staricon.svg"
                      alt="Star Icon"
                      width={20}
                      height={20}
                    />
                    <p>
                      <strong>Use AI</strong> to help users write better alt
                      text
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article
              id="userflow"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>User flow</h3>
              <p>
                I redesigned user flow to cut down{" "}
                <strong>20% fewer steps</strong> and increases efficiency by
                20%.
              </p>
              <ReactCompareSlider
                handle={
                  <ReactCompareSliderHandle
                    buttonStyle={{
                      backdropFilter: undefined,
                      background: "white",
                      border: 0,
                      color: "#333",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                }
                itemOne={
                  <ReactCompareSliderImage
                    src="/images/userflow1.svg"
                    alt="Before"
                    className="object-cover w-full"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/images/userflow2.svg"
                    alt="Before"
                    className="object-cover w-full"
                  />
                }
              />
            </article>

            <article
              id="figma"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>Figma Prototyping</h3>
              <p>
                I redesigned user flow to cut down 20% fewer steps and increases
                efficiency by 20%.
              </p>
              <Image
                src="/images/instagram/figmaprototype.svg"
                alt="Figma Prototype"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </article>

            <article
              id="development"
              className="flex flex-col gap-[20px] scroll-mt-20"
            >
              <h3>Development</h3>
              <div className="w-full">
                <Image
                  src="/images/instagram/dev.svg"
                  alt="development"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>
                For development phase, I used HTML, CSS, and Javascript, and
                used Educative.io API to implement the voiceover function.{" "}
                {"(WIP)"}
              </p>
            </article>
          </motion.section>

          {/* SOLUTION */}
          <motion.section
            {...fadeIn}
            id="solution"
            className="flex flex-col gap-[100px] mb-[100px] scroll-mt-20"
          >
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< SOLUTION >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>
            <article className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[150px]">
                <div className="flex">
                  <div className="flex flex-col flex-5 gap-[40px] justify-center">
                    <div className="flex flex-col w-[280px] bg-black text-white p-6 gap-2 rounded-lg h-[170px] items-start justify-center">
                      <Image
                        src="/images/instagram/staricon.svg"
                        alt="Star Icon"
                        width={20}
                        height={20}
                      />
                      <p className="text-lg">
                        Make the alt text option more{" "}
                        <strong>visible and accessible</strong>
                      </p>
                    </div>
                    <div className="flex flex-col gap-[10px] pr-24">
                      <p className="text-2xl font-bold">Main Feed</p>
                      <p className="text-lg">
                        In the main feed, the ALT text box is positioned below
                        each photo. When a user clicks on a photo,{" "}
                        <strong>VoiceOver</strong> reads the ALT text.
                      </p>
                    </div>
                  </div>
                  <div className="flex-3">
                    <Image
                      src="/images/instagram/solution1.gif"
                      alt="Main Feed"
                      width={300}
                      height={700}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col flex-5 gap-[40px] justify-center">
                    <div className="flex flex-col w-[280px] bg-black text-white p-6 gap-2 rounded-lg h-[170px] items-start justify-center">
                      <Image
                        src="/images/instagram/staricon.svg"
                        alt="Star Icon"
                        width={20}
                        height={20}
                      />
                      <p className="text-lg">
                        Ensure usability with{" "}
                        <strong>screen zoom & voice assistance</strong>
                      </p>
                    </div>
                    <div className="flex flex-col gap-[10px] pr-24">
                      <p className="text-2xl font-bold">Pick a Photo</p>
                      <p className="text-lg">
                        When a photo is clicked, <strong>VoiceOver</strong>{" "}
                        reads the AI-generated alt text to support users with
                        temporary or situational needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex-3">
                    <Image
                      src="/images/instagram/solution2.gif"
                      alt="Main Feed"
                      width={300}
                      height={700}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col flex-5 gap-[40px] justify-center">
                    <div className="flex flex-col w-[280px] bg-black text-white p-6 gap-2 rounded-lg h-[170px] items-start justify-center">
                      <Image
                        src="/images/instagram/staricon.svg"
                        alt="Star Icon"
                        width={20}
                        height={20}
                      />
                      <p className="text-lg">
                        <strong>Use AI</strong> to help users write better alt
                        text
                      </p>
                    </div>
                    <div className="flex flex-col gap-[10px] pr-24">
                      <p className="text-2xl font-bold">Add alt text</p>
                      <p className="text-lg">
                        Alt text button has been moved to the Filter/Edit page.
                        An AI suggestion box{" "}
                        <strong>helps users write alt text more easily</strong>,
                        or they can skip it and apply the AI-generated
                        description automatically.
                      </p>
                    </div>
                  </div>
                  <div className="flex-3">
                    <Image
                      src="/images/instagram/solution3.gif"
                      alt="Main Feed"
                      width={300}
                      height={700}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col flex-5 gap-[40px] justify-center">
                    <div className="flex flex-col w-[280px] bg-black text-white p-6 gap-2 rounded-lg h-[170px] items-start justify-center">
                      <Image
                        src="/images/instagram/staricon.svg"
                        alt="Star Icon"
                        width={20}
                        height={20}
                      />
                      <p className="text-lg">
                        Consider <strong>screen reader</strong> compatibility
                      </p>
                    </div>
                    <div className="flex flex-col gap-[10px] pr-24">
                      <p className="text-2xl font-bold">Edit alt text</p>
                      <p className="text-lg">
                        Users can <strong>review</strong> their ALT text before
                        uploading the photo. Since screen readers typically read
                        from the top, the ALT text is placed below the caption
                        for better accessibility.
                      </p>
                    </div>
                  </div>
                  <div className="flex-3">
                    <Image
                      src="/images/instagram/solution4.gif"
                      alt="Main Feed"
                      width={300}
                      height={700}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </article>
          </motion.section>

          {/* IMPACT & TAKEAWAYS */}
          <motion.section
            {...fadeIn}
            id="reflection"
            className="flex flex-col gap-[100px] mb-[100px] scroll-mt-20"
          >
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< REFLECTION >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>
            <article className="flex flex-col gap-[20px]">
              <h3>Impact & Expected Metrics</h3>
              <p>
                1. Usability & Efficiency Reduced Drop-off Rate & Task
                Completion Time By placing the alt text feature directly within
                the main posting flow and reducing the number of steps by 20%, I
                aimed to lower user friction and make the process feel more
                seamless. Simplified Content Creation With AI-assisted
                description generation, users can create alt text more easily.
                This helps ensure accessibility information is included—even
                when users might otherwise skip writing it manually.
              </p>

              <p>
                2. User Satisfaction & Accessibility Improved Experience for
                Screen Reader Users By providing clearer and more consistent
                AI-generated descriptions, the goal is to help visually impaired
                users better understand visual content and improve their overall
                browsing experience. Lower Barrier for General Users Moving the
                feature from hidden settings into a more visible and guided
                interface reduces confusion and makes accessibility feel less
                overwhelming, encouraging more users to participate in creating
                inclusive content.
              </p>
            </article>
            <article className="flex flex-col gap-[20px]">
              <h3>Future Opportunities & Next Steps</h3>
              <p>
                1. Expanding Accessibility Across Content Formats Right now, the
                solution focuses mainly on static feed posts. However, since
                Stories and Reels are a big part of how people use Instagram
                today, the next step would be to adapt the AI-guided alt text
                feature to those formats as well. Expanding this system would
                help create a more consistent and inclusive experience across
                the platform.
              </p>
              <p>
                2. Testing with Real Assistive Technology Users This project was
                based on heuristic evaluation and competitor research, but I
                believe real validation is essential. As a next step, I would
                like to conduct usability testing with actual screen reader
                users (such as VoiceOver or TalkBack users) to better understand
                how they interact with the interface in real situations. This
                would help refine the UI based on real assistive technology
                behavior, not just assumptions.
              </p>
              <p>
                3. Improving AI Accuracy with Human Oversight To improve the
                experience further, I would explore ways to make AI-generated
                descriptions more accurate while keeping users in control. This
                means designing simple and intuitive ways for users to review
                and edit AI suggestions, balancing automation with human
                judgment.
              </p>
              <h3>Takeaways & Reflectionc</h3>
              <p>
                Shift from Sympathy to Inclusive Thinking Through this project,
                I realized that accessibility isn’t about creating a “special”
                feature for a small group of users. It’s about designing systems
                that work better for everyone. Using the Inclusive Design
                Spectrum helped me see how permanent disabilities and temporary
                or situational constraints (like low bandwidth or cognitive
                overload) often share similar friction points. This shifted my
                approach from solving for a niche case to designing a more
                universal and resilient experience.
              </p>
              <p>
                Designing Within Real User Constraints While refining the flow,
                I learned that even small interaction gaps can break the entire
                experience. For example, supporting multi-photo uploads required
                rethinking how AI suggestions were structured. I had to ensure
                the interface remained clear and lightweight, even as the task
                became more complex. This taught me how to balance accessibility
                improvements with Instagram’s core value of speed and
                simplicity.
              </p>
              <p>
                Connecting Design with Technical Reality Researching Assistive
                Technology APIs changed how I think about design. I realized
                that accessibility decisions don’t stop at visual layouts—they
                depend heavily on how metadata is structured and interpreted by
                screen readers. By understanding how tools like VoiceOver parse
                semantic information, I was able to design a UI hierarchy that
                is not only visually clear but also technically implementable.
                This experience strengthened my belief that designers should
                understand technical systems, especially when working on
                accessibility.
              </p>
            </article>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
