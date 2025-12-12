import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "St. John's Farmers Market",
      position: "Events Manager",
      period: "Feb. 2025 - Present",
      location: "St. John's, NL, Canada",
      description:
        "Leading team operations and event coordination for a major community market. Designed and developed the organization's website to enhance online presence and streamline vendor processes.",
      achievements: [
        "Designed and developed a responsive website (sjfm.ca) improving online presence and streamlining vendor registration",
        "Led a team of 5 staff and coordinated logistics for large-scale community events",
        "Improved operational efficiency and community engagement through strategic planning",
        "Managed partnerships and promotions, strengthening collaboration between local businesses and the market brand",
      ],
      color: "#6366f1",
    },
    {
      company: "Community Sector Council",
      position: "Technical Trainer and Support Specialist",
      period: "Jan. 2024 - Apr. 2024",
      location: "St. John's, NL, Canada",
      description:
        "Provided comprehensive technical training and support to community members. Developed and delivered workshops to improve digital literacy and technical skills across diverse audiences.",
      achievements: [
        "Delivered 1-on-1 support to 20+ individuals, troubleshooting technical issues and ensuring high satisfaction",
        "Led 15+ workshops for 100+ participants, simplifying complex technical concepts",
        "Developed tailored training materials to meet individual and group needs",
        "Fostered engagement and improved digital literacy across the community sector",
      ],
      color: "#8b5cf6",
    },
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
              <div
                className="timeline-marker"
                style={{ background: exp.color }}
              >
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
                      <span className="experience-location">
                        📍 {exp.location}
                      </span>
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
