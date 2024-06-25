import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ src, title, description, tags, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-transparent hover:bg-gradient-to-r from-purple-500 to-cyan-500">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"></div>
      </div>
      <div className="relative p-6 bg-gray-800">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          className="inline-flex items-center mt-4 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded hover:bg-purple-700 transition-colors duration-300"
        >
          Learn More
          <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
