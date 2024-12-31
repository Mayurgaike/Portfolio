import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css'; 

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        <ProjectCard title="Weather" description="Web Based weather application" githubLink="https://github.com/Mayurgaike/Weather" />
        <ProjectCard title="Summarizer" description="Youtube video and text summarizer" githubLink="https://github.com/Mayurgaike/SummarizerV2.0" />
        <ProjectCard title="E-Commerce ChatBot" description="Chatbot designed to answer some product related queries" githubLink="https://github.com/Mayurgaike/E-Commerce-ChatBot" />
        <ProjectCard title="Portfolio" description="Nothing special you are seeing this right now!" githubLink="https://github.com/Mayurgaike/Portfolio" />
      </div>
    </div>
  );
};

export default Projects;
