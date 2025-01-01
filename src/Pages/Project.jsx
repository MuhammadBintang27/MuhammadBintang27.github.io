import React, { useState } from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/project.css";

const ProjectCard = ({ image, title, problem, solution, isReversed, link }) => {
  const [scale, setScale] = useState(0.4); // Set initial scale
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const handleMouseEnter = () => {
    setIsHovered(true);
    setScale(0.5); // Scale on hover
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setScale(0.4); // Reset scale on mouse leave
  };

  return (
    <div
      className={`flex flex-col lg:flex-row gap-16 items-center mb-16 last:mb-0 ${isReversed ? "lg:flex-row-reverse" : ""}`}
    >
      {/* Project Image */}
      <div className={`w-full lg:w-1/2 ${!isReversed ? "-ml-[130px]" : ""}`}>
        <div
          className="device-container relative group"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DeviceFrameset device="MacBook Pro" zoom={0.8}>
            <img
              src={image}
              alt={title}
              className="w-full rounded-lg shadow-xl"
            />
            {/* Add a button or content inside the frame */}
            {isHovered && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  to={link} // Use Link component for internal navigation
                  className="px-4 py-2 bg-orange-300 text-blue-900 rounded-lg font-medium hover:bg-orange-400 transition-colors duration-300"
                >
                  Visit {title}
                </Link>
              </div>
            )}
          </DeviceFrameset>
        </div>
      </div>

      {/* Project Info */}
      <div className={`w-full lg:w-1/2 text-white ${isReversed ? "" : "ml-[150px]"}`}>
        <h2 className="text-3xl font-bold text-orange-300 mb-8">{title}</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-teal-500 text-lg font-semibold mb-2">Problem:</h3>
            <p className="text-gray-300 leading-relaxed">{problem}</p>
          </div>
          <div>
            <h3 className="text-teal-500 text-lg font-semibold mb-2">Solution:</h3>
            <p className="text-gray-300 leading-relaxed">{solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "GasCari Search Engine",
      image: "../gascariProject.png",
      problem:
        "Nigerian businesses across all sectors, especially SMEs, struggle to comply with company legal regulations.",
      solution:
        "Built a platform that enables these companies to easily identify applicable regulations without needing a lawyer.",
      link: "/gascari", // Internal path
    },
    {
      title: "AyaDesign",
      image: "../ayadesign.png",
      problem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      solution:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "/ayadesign", // Internal path
    },
    {
      title: "PROJECT THREE",
      image: "/api/placeholder/600/400",
      problem:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      solution:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "/project-three", // Internal path
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            problem={project.problem}
            solution={project.solution}
            link={project.link} // Pass the link to the card
            isReversed={index % 2 !== 0} // Alternate layout
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
