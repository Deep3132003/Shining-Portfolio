import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 bg-gray-900"
      id="projects"
    >
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row flex-wrap gap-10 px-10 justify-center">
        <ProjectCard
          src="/databas.jpg"
          title="Working with Database"
          description="I am pleased to present my expertise in database management, showcasing my ability to design, implement, and maintain robust database systems. My experience covers various aspects of database work, emphasizing efficiency, reliability, and scalability."
          tags={["Database", "SQL", "Management"]}
          link="#"
        />
        <ProjectCard
          src="/fullstac.jpg"
          title="Gmail Clone with ReactJs"
          description="I am excited to present my project: a Gmail Clone developed with ReactJS. This application demonstrates my proficiency in modern web development and my ability to create feature-rich, user-friendly interfaces."
          tags={["ReactJS", "Web Development", "UI/UX"]}
          link="#"
        />
        <ProjectCard
          src="/React.jpg"
          title="Space Themed Portfolio Web"
          description="I am excited to introduce my Space-Themed Portfolio Website, a project that showcases my skills and projects in a visually striking and engaging manner. This portfolio highlights my creativity and technical proficiency."
          tags={["Portfolio", "ReactJS", "Design"]}
          link="#"
        />
      </div>
    </div>
  );
};

export default Projects;
