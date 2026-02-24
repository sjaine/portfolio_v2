"use client";

import Navbar from "../components/layout/Navbar";
import Image from "next/image";
import { GlobeIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";

import "swiper/css";
import 'swiper/css/scrollbar';

export default function InstagramProject() {
  return (
    <main className="pt-4 flex flex-col justify-center items-center w-screen page-gradient">
      <Navbar />

      <header className="px-24 pt-24 pb-8 max-w-[1980px] w-full">
        <div className="text-8xl font-bold pb-12">Instagram Accessibility</div>
        <div className="flex w-full justify-between items-start">
          <div>
            <div className="point pb-2">{"<ROLE>"}</div>
            <div>UI/UX Designer</div>
            <div>Front-end Developer</div>
          </div>
          <div>
            <div className="point pb-2">{"<TIMELINE>"}</div>
            <div>From August 2023</div>
            <div>From December 2023</div>
          </div>
          <div>
            <div className="point pb-2">{"<TEAM>"}</div>
            <div>Solo project</div>
          </div>
          <div>
            <div className="point pb-2">{"<TOOLS>"}</div>
            <div>Figma, Visual Studio Code,</div>
            <div>HTML, CSS, REST APIs</div>
          </div>
          <div className="p-2 bg-white inline-flex items-center justify-center rounded-lg">
            <GlobeIcon className="w-6 h-6" />
          </div>
        </div>
      </header>

      <div className="h-[800px] w-full bg-black overflow-hidden">
        <video
          src="/images/preview.mov"
          autoPlay
          muted
          loop
          playsInline
          className="w-full"
        />
      </div>

      <div className="pt-12 px-48 flex max-w-[1500px]">
        <nav className="flex-[3] relative">
          <ul className="sticky top-20 text-sm leading-[35px] text-[#a3a3a3]">
            <li>
              TL;DR
              <ul>
                <li>Overview</li>
                <li>Final solution</li>
              </ul>
            </li>
            <li>
              Problem
              <ul>
                <li>Problem space</li>
                <li>Research insights</li>
              </ul>
            </li>
            <li>
              Challenge
              <ul>
                <li>HMW statement</li>
                <li>Design principles</li>
                <li>User flow</li>
                <li>Figma prototype</li>
                <li>Development</li>
              </ul>
            </li>
            <li>Solution</li>
            <li>Reflection</li>
          </ul>
        </nav>

        <div className="flex-[9]">
          {/* TL;DR */}
          <section className="flex flex-col gap-[100px] mb-[100px]">
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< TL;DR >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>

            <article className="flex flex-col gap-[20px]">
              <h3>Overview</h3>
              <div>
                Instagram has become one of the most essential photo-sharing
                platforms today. However, Instagram's current alt text feature
                is <strong>hidden and inconsistently used</strong>, limiting accessibility for
                people with visual impairments. <br /> <br />
                This project aims to <strong>improve the visibility and accessibility of
                alt text</strong>, while providing AI support to help users write more
                effective descriptions by applying an inclusive design spectrum.{" "}
                <br />
                <br />
                The redesigned flow <strong>reduces steps by 20%</strong> and strengthens
                accessibility without increasing cognitive load.
              </div>
            </article>
            <article className="flex flex-col gap-[20px]">
              <h2>Final Solution</h2>
              <div>
                Main Feed → Discoverability Pick Photo → AI assist Add ALT →
                workflow integration Edit ALT → screen reader hierarchy
              </div>
            </article>
          </section>

          {/* PROBLEM */}
          <section className="flex flex-col gap-[100px] mb-[100px]">
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< PROBLEM >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>

            <article className="flex flex-col gap-[20px]">
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

            <article className="flex flex-col gap-[100px]">
              <div className="flex flex-col gap-[20px]">
                <h3>Research insights</h3>
                <div className="flex flex-col">
                  <div className="grid grid-cols-3 gap-12 text-center">
                    <div>
                      <div className="font-bold text-6xl text-[#6196F0] pb-5">
                        35%
                      </div>
                      <p>
                        Users struggle <strong>to find</strong> the alt text
                        option
                      </p>
                    </div>
                    <div>
                      <div className="font-bold text-6xl text-[#6196F0] pb-5">
                        34%
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
                        #5 / 5
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
          </section>

          {/* CHALLENGE */}
          <section className="flex flex-col gap-[100px] mb-[100px]">
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< CHALLENGE >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>
            <article className="flex flex-col gap-[20px]">
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

            <article className="flex flex-col gap-[100px]">
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

            <article className="flex flex-col gap-[20px]">
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

            <article className="flex flex-col gap-[20px]">
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

            <article className="flex flex-col gap-[20px]">
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
          </section>

          {/* SOLUTION */}
          <section className="flex flex-col gap-[100px] mb-[100px]">
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
                        <strong>VoiceOver</strong>
                        reads the ALT text.
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
          </section>

          {/* IMPACT & TAKEAWAYS */}
          <section className="flex flex-col gap-[100px] mb-[100px]">
            <header className="flex items-center gap-4">
              <div className="flex-1 h-px higlight-gray-bg"></div>
              <h2>{"< REFLECTION >"}</h2>
              <div className="flex-1 h-px higlight-gray-bg"></div>
            </header>
            <article className="flex flex-col gap-[20px]">
              <h3>Overview</h3>
              <p>dd</p>
            </article>
            <article className="flex flex-col gap-[20px]">
              <h3>Final Solution</h3>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}
