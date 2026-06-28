"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to bring <span className="text-purple">your</span> vision to
          life on screen?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out today and let&apos;s discuss how we can create cinematic
          visuals for your next project.
        </p>

        {/* Updated: Direct WhatsApp Link with pre-filled message */}
        <a
          href="https://wa.me/919946803731?text=Hi%20Easwer,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20collaborate!"
          target="_blank"
          rel="noreferrer"
        >
          <MagicButton
            title="Let's Collaborate"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Easwer K
        </p>

        {/* Updated Social Media Links */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all hover:bg-black-300"
            >
              <img src={info.img} alt="social-icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
