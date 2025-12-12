import { useState } from "react";
import "./Projects.css";
import myFlixImage from "../assets/My-Flix.png";
import shortenUrlImage from "../assets/Shorten URL.png";
import heartDiseaseImage from "../assets/Heart Disease Prediction.png";
import ClipWise from "../assets/ClipWise.png";
import sjfm from "../assets/SJFM.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "ClipWise",
      description:
        "An AI-powered video insights platform that transforms passive video watching into structured learning. Extracts, organizes, and delivers personalized, actionable insights from videos to help users remember and apply key lessons.",
      image: ClipWise,
      tags: [
        "React",
        "AWS Lambda",
        "API Gateway",
        "SQS",
        "Cognito",
        "DynamoDB",
        "CloudWatch",
      ],
      category: "fullstack",
      github: "https://github.com/youssefMoJo/Clipwise",
      demo: "#",
    },
    {
      id: 2,
      title: "St. John's Farmers Market Website",
      description:
        "Built a responsive website to improve the market's online presence and streamline vendor registration.",
      image: sjfm,
      tags: ["React", "Google Analytics"],
      category: "fullstack",
      github: "#",
      demo: "https://sjfm.ca",
    },
    {
      id: 3,
      title: "My-Flix",
      description:
        "A movie selection web app with intelligent recommendation engine. Users can search movies, manage personal lists, and receive AI-powered suggestions based on their selections. Migrated from MERN to AWS Amplify, cutting deployment costs by 90% ($300/year to $12–$24) while improving scalability.",
      image: myFlixImage,
      tags: ["React", "AWS Amplify", "JWT", "TMDB API", "ChatGPT API"],
      category: "fullstack",
      github: "https://github.com/MyFelx/App",
      demo: "https://main.d3acsmjhy3g5jo.amplifyapp.com/",
    },
    {
      id: 4,
      title: "Shorten URL",
      description:
        "A lightweight Chrome extension that shortens long URLs with one click, backed by a custom AWS architecture. Published to the Chrome Web Store with 20+ active users and 500+ shortened links.",
      image: shortenUrlImage,
      tags: ["JavaScript", "AWS Lambda", "API Gateway", "DynamoDB"],
      category: "fullstack",
      github: "https://github.com/youssefMoJo/Shorten-URL",
      demo: "https://chromewebstore.google.com/detail/shorten-url/pkdhbhbeapnenbeihmabpgmeeinbdpgc",
    },
    {
      id: 5,
      title: "Heart Disease Prediction",
      description:
        "Developed a machine learning model to predict heart disease with optimized preprocessing and feature engineering. Applied data scaling methods such as Min-Max, Robust, and Z-score to optimize model performance.",
      image: heartDiseaseImage,
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      category: "backend",
      github: "https://github.com/ksfarag/Heart-Disease-Prediction-Using-ML",
      demo: "https://www.kaggle.com/code/youssefmohamed21/heart-disease-prediction-using-ml",
    },
  ];

  const filters = ["all", "fullstack", "frontend", "backend", "mobile"];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and creative experiments
          </p>
        </div>

        {/* <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div> */}

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        className="project-link"
                        aria-label="View code"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.demo}
                      className="project-link"
                      aria-label="View demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
