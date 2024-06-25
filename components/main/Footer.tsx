import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-200 p-10">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-row flex-wrap justify-around mb-10">
          <div className="min-w-[200px] flex flex-col items-center mb-6 md:mb-0">
            <div className="font-bold text-xl mb-4">Community</div>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer hover:text-purple-400 transition"
            >
              <FaYoutube className="text-2xl mr-2" />
              <span className="text-lg">YouTube</span>
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer hover:text-purple-400 transition"
            >
              <RxGithubLogo className="text-2xl mr-2" />
              <span className="text-lg">GitHub</span>
            </a>
            <a
              href="https://www.discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer hover:text-purple-400 transition"
            >
              <RxDiscordLogo className="text-2xl mr-2" />
              <span className="text-lg">Discord</span>
            </a>
          </div>
          <div className="min-w-[200px] flex flex-col items-center mb-6 md:mb-0">
            <div className="font-bold text-xl mb-4">Social Media</div>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer hover:text-purple-400 transition"
            >
              <RxInstagramLogo className="text-2xl mr-2" />
              <span className="text-lg">Instagram</span>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer hover:text-purple-400 transition"
            >
              <RxTwitterLogo className="text-2xl mr-2" />
              <span className="text-lg">Twitter</span>
            </a>
            <a
              href="www.linkedin.com/in/deepu-kumar-tiwari-31032003deep"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer hover:text-purple-400 transition"
            >
              <RxLinkedinLogo className="text-2xl mr-2" />
              <span className="text-lg">LinkedIn</span>
            </a>
          </div>
          <div className="min-w-[200px] flex flex-col items-center mb-6 md:mb-0">
            <div className="font-bold text-xl mb-4">About Me</div>
            <a
              href="/sponsor"
              className="flex items-center my-3 cursor-pointer hover:text-purple-400 transition"
            >
              <span className="text-lg">Become Sponsor</span>
            </a>
            <a
              href="/about"
              className="flex items-center my-3 cursor-pointer hover:text-purple-400 transition"
            >
              <span className="text-lg">Learn About Me</span>
            </a>
            <a
              href="mailto:deeputiwari8602@gmail.com"
              className="flex items-center my-3 cursor-pointer hover:text-purple-400 transition"
            >
              <span className="text-lg">deeputiwari8602@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-4">
          &copy; WebChain Dev 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

