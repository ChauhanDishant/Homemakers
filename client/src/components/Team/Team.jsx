import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"; // Updated imports

const TeamMember = ({ name, role, imageSrc, linkedin, instagram, github }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-8 rounded-lg bg-white p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="mb-4 flex justify-center">
          <div className="w-32 h-32 overflow-hidden rounded-full border-2 border-blue-500 shadow-md">
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h3 className="mb-2 text-center text-xl font-semibold text-gray-800">
          {name}
        </h3>
        <p className="text-center text-gray-600">{role}</p>
        <div className="flex justify-center space-x-4 mt-4">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-800 transition-colors" />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 text-pink-600 hover:text-pink-800 transition-colors" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Dishant Chauhan",
      role: "Front-End Developer",
      imageSrc: "Dishant.jpeg",
      linkedin: "https://linkedin.com/in/dishantchauhan",
      instagram: "https://instagram.com/dishantchauhan",
      github: "https://github.com/dishantchauhan",
    },
    {
      name: "Parmesh Bhatt",
      role: "Back-End Developer",
      imageSrc: "Parmesh.jpeg",
      linkedin: "https://linkedin.com/in/parmeshbhatt",
      instagram: "https://instagram.com/parmeshbhatt",
      github: "https://github.com/parmeshbhatt",
    },
    {
      name: "Priyank Vyas",
      role: "Documentator",
      imageSrc: "Priyank.jpeg",
      linkedin: "https://linkedin.com/in/priyankvyas",
      instagram: "https://instagram.com/priyankvyas",
      github: "https://github.com/priyankvyas",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-100 py-12 lg:py-20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center lg:mb-16">
          <span className="block text-lg font-semibold text-blue-600 uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl md:text-[40px]">
            Meet the Team Members
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
