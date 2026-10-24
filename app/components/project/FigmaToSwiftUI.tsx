import localFont from "next/font/local";
import type { ReactNode } from "react";
import {
    ArrowRightIcon,
  } from "@radix-ui/react-icons";

/* ------------------------------------------------------------------
 * FO/RE — "From Figma to SwiftUI"
 * Shows how the Figma design system was translated into SwiftUI.
 * Three pairs: colour tokens, typography, components.
 * ------------------------------------------------------------------ */

// Aspekta is FO/RE's typeface. Used only for the Figma-side samples.
const aspekta = localFont({
  src: [
    { path: "../../fonts/Aspekta-400.woff2", weight: "400" },
    { path: "../../fonts/Aspekta-600.woff2", weight: "600" },
  ],
  display: "swap",
});

/* ---------- Code highlighting helpers (no dependency) ---------- */
const K = ({ children }: { children: ReactNode }) => (
  <span className="text-[#9B4DCA]">{children}</span>
); // keyword
const T = ({ children }: { children: ReactNode }) => (
  <span className="text-[#3D6FD6]">{children}</span>
); // type
const S = ({ children }: { children: ReactNode }) => (
  <span className="text-[#3F8F5F]">{children}</span>
); // string
const C = ({ children }: { children: ReactNode }) => (
  <span className="text-[#A3A3A3]">{children}</span>
); // comment
const N = ({ children }: { children: ReactNode }) => (
  <span className="text-[#B7791F]">{children}</span>
); // number
/** Design token — blue chip */
const Tok = ({ children }: { children: ReactNode }) => (
  <span className="rounded px-[3px] py-px bg-[#6D8EEB]/12 text-[#3D6FD6]">
    {children}
  </span>
);
/** Linked value between Figma and code — yellow chip */
const Hl = ({ children }: { children: ReactNode }) => (
  <span className="rounded px-[3px] py-px bg-[#F2C94C]/30">{children}</span>
);

/* ---------- Layout pieces ---------- */
function PanelTag({ kind, label }: { kind: "figma" | "swift"; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-5 font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[1px] text-[#8A8A8A]">
      <span
        className={`w-[7px] h-[7px] rounded-full ${
          kind === "figma" ? "bg-[#A259FF]" : "bg-[#F05138]"
        }`}
      />
      {kind === "figma" ? "FIGMA" : "SWIFTUI"} · {label}
    </div>
  );
}

function Code({ children }: { children: ReactNode }) {
  return (
    <pre className="font-[family-name:var(--font-dm-mono)] text-[12.5px] leading-[1.75] text-[#3A3A3A] whitespace-pre overflow-x-auto">
      <code>{children}</code>
    </pre>
  );
}

function Note({
  children,
  tone = "yellow",
}: {
  children: ReactNode;
  tone?: "yellow" | "blue";
}) {
  return (
    <p
      className={`mt-4 inline-block rounded-lg px-3 py-2 text-[13px] leading-snug text-[#4A4A4A] ${
        tone === "yellow" ? "bg-[#F2C94C]/22" : "bg-[#6D8EEB]/12"
      }`}
    >
      {children}
    </p>
  );
}

function Pair({
  index,
  title,
  description,
  figmaLabel,
  swiftLabel,
  figma,
  code,
}: {
  index: string;
  title: string;
  description: string;
  figmaLabel: string;
  swiftLabel: string;
  figma: ReactNode;
  code: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
        <span className="font-[family-name:var(--font-dm-mono)] text-[13px] tracking-[1.4px] uppercase text-[#8A8A8A]">
          {index} · {title}
        </span>
        <p className="text-sm text-black/60">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,410px)_40px_minmax(0,1fr)] gap-3 md:gap-0 p-3 md:p-[14px] rounded-2xl border border-white bg-white/50">
        {/* Figma side */}
        <div className="flex flex-col rounded-xl bg-white/75 px-6 py-5">
          <PanelTag kind="figma" label={figmaLabel} />
          <div className="flex-1 flex flex-col justify-center">{figma}</div>
        </div>

        {/* Arrow */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center text-[#8A8A8A]"
        >
          <span className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center rotate-90 md:rotate-0">
          <ArrowRightIcon />
          </span>
        </div>

        {/* SwiftUI side */}
        <div className="min-w-0 rounded-xl border border-black/5 bg-[#FBFBFA] px-6 py-5">
          <PanelTag kind="swift" label={swiftLabel} />
          {code}
        </div>
      </div>
    </div>
  );
}

/* ---------- Content ---------- */
const SWATCHES = [
  {
    group: "Neutral / Dark",
    colors: [
      { hex: "#0F1114", used: true },
      { hex: "#1E2026" },
      { hex: "#2A2D35" },
      { hex: "#454A57", used: true },
    ],
  },
  {
    group: "Brand / Blue",
    colors: [
      { hex: "#D7ECFF", used: true },
      { hex: "#A9C4FF" },
      { hex: "#7DA7FF", used: true },
      { hex: "#5C84D6" },
    ],
  },
];

function Swatches() {
  return (
    <div className="flex flex-col gap-4">
      {SWATCHES.map(({ group, colors }) => (
        <div key={group}>
          <p className="mb-2 font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[0.5px] text-[#8A8A8A]">
            {group}
          </p>
          <ul className="flex gap-2.5">
            {colors.map(({ hex, used }) => (
              <li key={hex} className="w-[70px]">
                <span
                  className={`block h-[52px] rounded-[10px] border border-black/5 ${
                    used ? "outline-2 outline-offset-2 outline-[#6D8EEB]" : ""
                  }`}
                  style={{ backgroundColor: hex }}
                />
                <span className="block mt-1.5 font-[family-name:var(--font-dm-mono)] text-[10.5px] text-black/60">
                  {hex}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function TypeSpec() {
  const rows: [string, ReactNode][] = [
    ["Font", "Aspekta · Semibold 600"],
    ["Size", "16px"],
    ["Line height", "120%"],
    ["Letter spacing", <Hl key="ls">−1%</Hl>],
  ];
  return (
    <div>
      <p
        className={`${aspekta.className} font-semibold text-[44px] leading-[1.2] tracking-[-0.44px] text-[#171717]`}
      >
        Typography
      </p>
      <dl className="mt-4 grid grid-cols-[130px_1fr] gap-y-2 text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="pt-0.5 font-[family-name:var(--font-dm-mono)] text-[11px] tracking-[1px] uppercase text-[#8A8A8A]">
              {label}
            </dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function ButtonSpec() {
  const redline =
    "absolute whitespace-nowrap font-[family-name:var(--font-dm-mono)] text-[10.5px] tracking-[0.5px] text-[#E0567A]";
  return (
    <div className="relative pt-10 pb-9 pr-[90px] pl-1">
      <div className="absolute left-1 top-2 right-[90px]">
        <span className={`${redline} top-0 left-0`}>
          FULL WIDTH · H-PADDING 24
        </span>
        <span className="absolute top-5 left-0 right-0 border-t border-dashed border-[#E0567A]" />
      </div>

      <div
        className={`${aspekta.className} font-semibold text-base tracking-[-0.16px] text-[#0F1114] text-center bg-white border border-[#B3B3B3] rounded-[25px] py-[15px]`}
      >
        Continue
      </div>

      <span className="absolute right-[82px] top-10 h-[52px] border-l border-dashed border-[#E0567A]" />
      <span className={`${redline} right-0 top-12`}>PADDING 15</span>
      <span className={`${redline} right-[6px] top-[66px]`}>RADIUS 25</span>
      <span className={`${redline} left-1 bottom-2`}>STROKE 1 · #B3B3B3</span>
    </div>
  );
}

/* ---------- Section ---------- */
export default function FigmaToSwiftUI() {
  return (
    <div id="designsystem" className="flex flex-col gap-12">
      <Pair
        index="01"
        title="Colour tokens"
        description="Figma variables become named Swift constants."
        figmaLabel="VARIABLES"
        swiftLabel="ForeTheme.swift"
        figma={<Swatches />}
        code={
          <Code>
            <K>extension</K> <T>Color</T> {"{"}
            {"\n    "}<C>{"// Text"}</C>
            {"\n    "}<K>static let</K> <Tok>foreTextDark</Tok>   = <T>Color</T>(hex: <S>&quot;0F1114&quot;</S>) <C>{"// Neutral/Dark 1"}</C>
            {"\n    "}<K>static let</K> <Tok>foreText</Tok>       = <T>Color</T>(hex: <S>&quot;454A57&quot;</S>) <C>{"// Neutral/Dark 4"}</C>
            {"\n\n    "}<C>{"// Brand"}</C>
            {"\n    "}<K>static let</K> <Tok>foreBlueLight</Tok>  = <T>Color</T>(hex: <S>&quot;D7ECFF&quot;</S>) <C>{"// Brand/Blue 1"}</C>
            {"\n    "}<K>static let</K> <Tok>foreBlueAccent</Tok> = <T>Color</T>(hex: <S>&quot;7DA7FF&quot;</S>) <C>{"// Brand/Blue 3"}</C>
            {"\n}"}
          </Code>
        }
      />

      <Pair
        index="02"
        title="Typography"
        description="Semantic roles instead of raw sizes, with Figma spacing converted to points."
        figmaLabel="TEXT STYLE"
        swiftLabel="ForeFont"
        figma={<TypeSpec />}
        code={
          <>
            <Code>
              <K>struct</K> <T>ForeFont</T> {"{"}
              {"\n    "}<K>static func</K> semibold(<K>_</K> size: <T>CGFloat</T>) -&gt; <T>Font</T> {"{"}
              {"\n        "}.custom(<S>&quot;Aspekta-600&quot;</S>, size: size)
              {"\n    }"}
              {"\n\n    "}<C>{"// Semantic roles"}</C>
              {"\n    "}<K>static func</K> <Tok>title</Tok>(<K>_</K> size: <T>CGFloat</T>) -&gt; <T>Font</T> {"{"} semibold(size) {"}"}
              {"\n    "}<K>static func</K> <Tok>button</Tok>() -&gt; <T>Font</T> {"{"} semibold(<N>16</N>) {"}"}
              {"\n}"}
              {"\n\n"}<T>Text</T>(title)
              {"\n    "}.font(<T>ForeFont</T>.<Tok>button</Tok>())
              {"\n    "}.kerning(<Hl>-0.16</Hl>)   <C>{"// −1% × 16px"}</C>
            </Code>
            <Note>
              Figma sets letter spacing in %, SwiftUI in points: −1% × 16px =
              −0.16pt
            </Note>
          </>
        }
      />

      <Pair
        index="03"
        title="Components"
        description="Built only from tokens, so a change in one place updates every screen."
        figmaLabel="BUTTON"
        swiftLabel="ForeContinueButton"
        figma={<ButtonSpec />}
        code={
          <>
            <Code>
              <T>Text</T>(title)
              {"\n    "}.font(<T>ForeFont</T>.<Tok>button</Tok>())
              {"\n    "}.foregroundColor(<Tok>.foreTextDark</Tok>)
              {"\n    "}.padding(.vertical, <N>15</N>)
              {"\n    "}.background(
              {"\n        "}<T>RoundedRectangle</T>(cornerRadius: <Tok>ForeRadius.button</Tok>)
              {"\n            "}.fill(<Tok>Color.foreWhite</Tok>)
              {"\n            "}.overlay(
              {"\n                "}<T>RoundedRectangle</T>(cornerRadius: <Tok>ForeRadius.button</Tok>)
              {"\n                    "}.stroke(<Tok>Color.foreBorder</Tok>, lineWidth: <N>1</N>)
              {"\n            "})
              {"\n    "})
              {"\n    "}.padding(.horizontal, <Tok>ForeSpacing.xl</Tok>)
            </Code>
            <Note tone="blue">
              No raw hex values. Every value comes from a token.
            </Note>
          </>
        }
      />
    </div>
  );
}