import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'AI Task Manager',
      description: 'Smart task management app with AI-powered suggestions and natural language processing.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      tags: ['React', 'Python', 'OpenAI', 'PostgreSQL'],
      category: 'fullstack',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Portfolio Dashboard',
      description: 'Interactive analytics dashboard for tracking portfolio performance with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['React', 'D3.js', 'TailwindCSS'],
      category: 'frontend',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for social media platform with authentication, posts, comments, and real-time messaging.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      tags: ['Node.js', 'Express', 'Socket.io', 'Redis'],
      category: 'backend',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Mobile-responsive fitness tracking app with workout plans, progress charts, and nutrition logging.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
      tags: ['React Native', 'Firebase', 'Chart.js'],
      category: 'mobile',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Code Snippet Manager',
      description: 'Developer tool for organizing and sharing code snippets with syntax highlighting and tagging.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80',
      tags: ['Vue.js', 'Firebase', 'Prism.js'],
      category: 'frontend',
      github: '#',
      demo: '#'
    }
  ];

  const filters = ['all', 'fullstack', 'frontend', 'backend', 'mobile'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and creative experiments
          </p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

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
                    <a href={project.github} className="project-link" aria-label="View code">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a href={project.demo} className="project-link" aria-label="View demo">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
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
