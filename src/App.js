import React, { useRef } from 'react';
import Navbar from './Navbar';
import ProfileSection from './ProfileSection';
import AboutSection from './AboutSection';
import Projects from './Projects';
import './App.css'; 

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onResumeClick={() => window.open('/path-to-resume.pdf', '_blank')} // Replace with actual path
        onGitHubClick={() => window.open('https://github.com/Mayurgaike', '_blank')} // Replace with your GitHub link
        onLinkedInClick={() => window.open('https://www.linkedin.com/in/mayur-gaike-9304b4289/', '_blank')} // Replace with your LinkedIn link
      />
      <div ref={homeRef}>
        <ProfileSection />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  );
}

export default App;
