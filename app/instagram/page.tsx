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

<div className="flex h-screen w-full items-center justify-center bg-black">
  <div className="relative aspect-[9/16] w-full h-full max-h-screen overflow-hidden">
    <video
      src="/images/instagram/instagram.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-cover"
    />
  </div>
</div>
      <div className="pt-0 px-4 w-full md:pt-12 md:px-48 flex max-w-[1500px]">
        <SideNav
          activeSection={activeSection}
          isParentActive={isParentActive}
        />

        <div className="flex-[9]">
          {/* TL;DR */}
          <motion.section
            {...fadeIn}
            id="tldr"
            className="flex flex-col gap-[80px] md:gap-[80px] md:gap-[80px] md:gap-[120px] mb-[100px] scroll-mt-20"
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
              <div className="flex h-full w-full flex-col md:flex-row">
                <div className="flex-[4] pb-16 md:pb-0 pr-0 md:pr-16 flex justify-between">
                  <p>
                    <span className="text-[#6196F0] font-bold">Main Feed</span>
                    <br />
                    Surface alt text directly below each photo for immediate
                    access.
                    <br />
                    <br />
                    <br />
                    <span className="text-[#6196F0] font-bold">
                      Photo Selection
                    </span>
                    <br />
                    Provide AI-generated descriptions to support image
                    understanding during selection.
                    <br />
                    <br />
                    <br />
                    <span className="text-[#6196F0] font-bold">
                      Add & Edit Alt Text
                    </span>
                    <br />
                    Relocate the alt text feature to the Filter & Edit stage,
                    with AI-generated text as the default and easy manual
                    editing available.
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
                        src="/images/instagram/solution1.gif"
                        alt="solution"
                        width={300}
                        height={700}
                        className="object-cover rounded-2xl"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/images/instagram/solution2.gif"
                        alt="solution"
                        width={300}
                        height={700}
                        className="object-cover rounded-2xl"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/images/instagram/solution3.gif"
                        alt="solution"
                        width={300}
                        height={700}
                        className="object-cover rounded-2xl"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/images/instagram/solution4.gif"
                        alt="solution"
                        width={300}
                        height={700}
                        className="object-cover rounded-2xl"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </article>
          </motion.section>

          {/* PROBLEM */}
          <motion.section
            {...fadeIn}
            id="problem"
            className="flex flex-col gap-[80px] md:gap-[80px] md:gap-[120px] mb-[100px] scroll-mt-20"
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
              <div className="flex flex-col md:flex-row">
                <div className="flex-[4] pb-12 md:pb-0 pr-0 md:pr-16 flex flex-col justify-between">
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
                  <p className="text-[#a3a3a3] text-xs pt-8 md:pt-0">
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
              className="flex flex-col gap-[80px] md:gap-[80px] md:gap-[120px] scroll-mt-20"
            >
              <div className="flex flex-col gap-[20px]">
                <h3>Research insights</h3>
                <div className="flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
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
              <div className="flex gap-12 flex-col md:flex-row">
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
            className="flex flex-col gap-[80px] md:gap-[80px] md:gap-[120px] mb-[100px] scroll-mt-20"
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

            <article className="space-y-8">
              <div className="flex flex-col gap-2">
                <h3>User Understanding</h3>
                <p>
                  Through persona development, context scenarios, and empathy
                  mapping, I identified two primary user groups.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group p-6 bg-white/50 rounded-2xl border border-white">
                  <div className="flex flex-col gap-4">
                    <span className="w-fit rounded-full bg-white text-[#6D8EEB] px-4 py-1.5 font-bold text-xs">
                      01. GENERAL USERS
                    </span>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-800">
                        Hidden & Complex
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Often unaware of where the alt text feature is located.
                        Even when they intend to use accessibility features, the{" "}
                        <span className="text-[#6D8EEB] font-bold">
                          hidden interface and multi-step process
                        </span>{" "}
                        discourage engagement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white/50 rounded-2xl border border-white">
                  <div className="flex flex-col gap-4">
                    <span className="w-fit rounded-full bg-white text-[#6D8EEB] px-4 py-1.5 font-bold text-xs">
                      02. VISUALLY IMPAIRED
                    </span>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-800">
                        Inconsistent Experience
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Rely heavily on descriptive metadata to understand
                        visual content. However, inconsistent alt text
                        availability and limited visibility of accessibility
                        tools{" "}
                        <span className="text-[#6D8EEB] font-bold">
                          reduce their overall experience and trust in the
                          platform
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article
              id="designprinciples"
              className="flex flex-col gap-[80px] md:gap-[80px] md:gap-[120px] scroll-mt-20"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
                {[
                  {
                    id: "permanent",
                    text: "Consider <strong>screen reader</strong> compatibility",
                  },
                  {
                    id: "temporary",
                    text: "Ensure usability with <strong>screen zoom & voice assistance</strong>",
                  },
                  {
                    id: "situational",
                    text: "Make the alt text option more <strong>visible and accessible</strong>",
                  },
                  {
                    id: "general",
                    text: "<strong>Use AI</strong> to help users write better alt text",
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-[24px] items-center w-full max-w-[240px] mx-auto lg:max-w-[200px]"
                  >
                    <Image
                      src={`/images/instagram/${item.id}user.svg`}
                      alt={`${item.id} User`}
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                    <Image
                      src={`/images/instagram/${item.id}bubble.svg`}
                      alt={`${item.id} Bubble`}
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                    <ArrowDownIcon className="w-8 h-10 shrink-0" />

                    <div className="flex flex-col w-full bg-black text-white p-6 gap-2 rounded-lg min-h-[148px] md:h-[148px]">
                      <Image
                        src="/images/instagram/staricon.svg"
                        alt="Star Icon"
                        width={20}
                        height={20}
                      />
                      <p
                        className="text-sm md:text-base leading-snug"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    </div>
                  </div>
                ))}
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
                used Educative.io API to implement the voiceover function.
              </p>
            </article>
          </motion.section>

          {/* SOLUTION */}
          <motion.section
            {...fadeIn}
            id="solution"
            className="flex flex-col gap-[80px] md:gap-[80px] md:gap-[120px] mb-[100px] scroll-mt-20"
          >
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< SOLUTION >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>
            <article className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[80px] md:gap-[80px] md:gap-[120px]">
                <div className="flex flex-col gap-[40px] md:gap-0 md:flex-row">
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
                    <div className="flex flex-col gap-[10px] pr-0 md:pr-24">
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
                <div className="flex flex-col gap-[40px] md:gap-0 md:flex-row">
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
                    <div className="flex flex-col gap-[10px] pr-0 md:pr-24">
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
                <div className="flex flex-col gap-[40px] md:gap-0 md:flex-row">
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
                    <div className="flex flex-col gap-[10px] pr-0 md:pr-24">
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
                <div className="flex flex-col gap-[40px] md:gap-0 md:flex-row">
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
                    <div className="flex flex-col gap-[10px] pr-0 md:pr-24">
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
            className="flex flex-col gap-[80px] md:gap-[120px] mb-[100px] scroll-mt-20"
          >
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< REFLECTION >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>
            <article className="flex flex-col gap-[20px] py-10">
              <h3>Impact & Expected Metrics</h3>
              <p>
                As this was an academic project with time constraints, formal
                usability testing on the final solution was not conducted.
                However, I defined the following success metrics based on my
                initial hypotheses.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/50 rounded-2xl border border-white p-6">
                  <div className="text-[#6D8EEB] font-black text-3xl mb-2">
                    20% ↑
                  </div>
                  <h4 className="font-bold mb-2">Usability & Efficiency</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    By integrating alt text directly into the posting flow and
                    reducing the steps by 20%, the process becomes{" "}
                    <span className="text-[#6D8EEB] font-bold">
                      smoother and more intuitive.
                    </span>
                    <br />
                    <br />
                    AI-assisted descriptions also help ensure accessibility
                    information is included,{" "}
                    <span className="text-[#6D8EEB] font-bold">
                      even when users skip manual input.
                    </span>
                  </p>
                </div>
                <div className="bg-white/50 rounded-2xl border border-white p-6">
                  <div className="text-[#6D8EEB] font-black text-3xl mb-2">
                    High
                  </div>
                  <h4 className="font-bold mb-2">User Satisfaction</h4>
                  <p className="leading-relaxed text-gray-600 text-sm">
                    By moving the accessibility feature from hidden settings
                    into a more visible and guided interface, I made it easier{" "}
                    <span className="text-[#6D8EEB] font-bold">
                      for general users
                    </span>{" "}
                    to participate in creating inclusive content. <br /> <br />
                    As a result,{" "}
                    <span className="text-[#6D8EEB] font-bold">
                      screen reader users
                    </span>{" "}
                    can receive more consistent and meaningful descriptions,
                    helping them better understand visual posts and navigate the
                    platform with greater confidence.
                  </p>
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-6">
              <h3>Future Opportunities</h3>
              <div className="flex flex-col gap-4 py-6 bg-white/50 border border-white px-6 rounded-3xl">
                {[
                  {
                    title: "Expanding Formats",
                    desc: "The current solution focuses on feed posts. As a next step, I would adapt the AI-guided alt text system to Stories and Reels to create a more consistent accessibility experience across the platform.",
                  },
                  {
                    title: "Real-user Testing",
                    desc: "Since this project was based on heuristic evaluation and research, the next step would be usability testing with real screen reader users (e.g., VoiceOver, TalkBack) to refine the interface based on real interaction patterns.",
                  },
                  {
                    title: "AI Refinement",
                    desc: "I would also work on improving AI description accuracy while designing simple ways for users to review and edit suggestions, keeping users in control of the final output.",
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
            <article className="flex flex-col gap-[20px]">
              <h3>Takeaways & Reflection</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {/* Reflection 1 */}
                <div className="relative p-6 bg-black text-white rounded-2xl flex flex-col">
                  <h4 className="font-bold text-lg mb-2 leading-snug">
                    From Sympathy to <br className="hidden lg:block" />{" "}
                    Inclusive Thinking
                  </h4>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    I learned that accessibility isn’t about building a separate
                    solution for a minority, but about designing systems that
                    work better for everyone.
                  </p>
                </div>

                {/* Reflection 2 */}
                <div className="relative p-6 bg-black text-white rounded-2xl flex flex-col">
                  <h4 className="font-bold text-lg mb-2">
                    Designing Within <br className="hidden lg:block" /> Real
                    Constraints
                  </h4>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    I learned to balance complex accessibility requirements with
                    Instagram's core value of speed and simplicity.
                  </p>
                </div>

                {/* Reflection 3 */}
                <div className="relative p-6 bg-black text-white rounded-2xl flex flex-col">
                  <h4 className="font-bold text-lg mb-2">
                    Connecting Design with <br className="hidden lg:block" />{" "}
                    Technical Reality
                  </h4>
                  <p className="leading-relaxed opacity-90 flex-grow">
                    Understanding how screen readers interpret metadata helped
                    me design a structure that is both visually clear and
                    technically feasible.
                  </p>
                </div>
              </div>
            </article>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
