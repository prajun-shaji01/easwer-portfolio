"use client";

import { projects } from "@/data";
import React from "react";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* Container for the cards */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            {/* Clean Static Card Container (No animations, no PinContainer) */}
            <div className="relative w-full h-full overflow-hidden rounded-3xl bg-[#13162D] border border-white/[0.1] p-6 flex flex-col justify-between">
              {/* Image Section */}
              <div className="relative w-full h-[200px] lg:h-[300px] overflow-hidden rounded-xl mb-4 bg-[#13162D]">
                <img
                  src={item.img}
                  alt="cover"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col">
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-2"
                  style={{ color: "#BEC1DD" }}
                >
                  {item.des}
                </p>
              </div>

              {/* View Project Link */}
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-purple font-bold"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
