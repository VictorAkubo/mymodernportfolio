import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
<div className="overflow-hidden bg-black">
  {/* Primary Brand Spotlight - Top Left */}
  <Spotlight
    className="-top-40 left-0 md:left-60 md:-top-20 opacity-70"
    fill="rgba(59, 130, 246, 0.5)" // Soft Blue
  />
  
  {/* Secondary Accent - Top Right */}
  <Spotlight
    className="top-10 left-full h-[80vh] w-[50vw] opacity-40"
    fill="rgba(16, 185, 129, 0.3)" // Soft Emerald
  />

  {/* Center Focus - Subtle highlight for CTA */}
  <Spotlight
    className="top-[30%] left-[20%] h-[70vh] w-[70vw] opacity-20"
    fill="#ffffff" // Pure white at low opacity creates a "silver" shine
  />
</div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full bg-black-900 bg-grid-black-900/[0.03]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center
          bg-black-900 dark:bg-black-800
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Victor, a React.js Developer based in Nigeria.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;