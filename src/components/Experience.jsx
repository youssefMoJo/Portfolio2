import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Full Stack Developer',
      period: '2023 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices-based solutions.',
      achievements: [
        'Architected and deployed a real-time analytics dashboard serving 100K+ users',
        'Reduced API response time by 60% through optimization and caching strategies',
        'Led migration from monolithic to microservices architecture'
      ],
      color: '#6366f1'
    },
    {
      company: 'Digital Solutions Co.',
      position: 'Full Stack Developer',
      period: '2021 - 2023',
      location: 'Remote',
      description: 'Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built 15+ responsive web applications using React and Vue.js',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Improved code quality through comprehensive testing and code reviews'
      ],
      color: '#8b5cf6'
    },
    {
      company: 'StartUp Labs',
      position: 'Frontend Developer',
      period: '2020 - 2021',
      location: 'New York, NY',
      description: 'Focused on creating intuitive user interfaces and implementing modern frontend architectures. Worked closely with design team to bring mockups to life.',
      achievements: [
        'Designed and developed company website increasing conversion by 35%',
        'Implemented state management solutions improving app performance',
        'Created reusable component library used across multiple projects'
      ],
      color: '#ec4899'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and career milestones
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker" style={{ background: exp.color }}>
                <div className="timeline-ring"></div>
              </div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-position">{exp.position}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-period">{exp.period}</span>
                      <span className="experience-location">📍 {exp.location}</span>
                    </div>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <div className="experience-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
