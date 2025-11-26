"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-13 lg:gap-18 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[28rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={item.title} href={item.link}>
              
              {/* IMAGE WRAPPER FIXED HEIGHT */}
              <div
                className="
                  relative flex items-center justify-center
                  sm:w-96 w-[80vw]
                  overflow-hidden
                  h-48 sm:h-56 lg:h-64
                  mb-10
                "
              >
                {/* BACKGROUND IMAGE*/}
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt="bgimg"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* PROJECT PREVIEW IMAGE */}
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 h-full object-contain"
                />
              </div>

              {/* TITLE */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              {/* DESCRIPTION */}
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              {/* ICONS + LINK */}
              <div className="flex items-center justify-between mt-7 mb-3">

                {/* STACK ICONS */}
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="
                        border border-white/[.2]
                        rounded-full bg-black
                        lg:w-10 lg:h-10 w-8 h-8
                        flex justify-center items-center
                      "
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                {/* LIVE SITE LINK */}
                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(item.link, "_blank");
                  }}
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>

              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;