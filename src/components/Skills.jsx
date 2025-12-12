import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Redux", "JavaScript", "Tailwind", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
    },
    {
      title: "Cloud & DevOps",
      icon: "🚀",
      skills: ["AWS", "Lambda", "API Gateway", "Terraform", "Git", "CI/CD"],
    },
    {
      title: "Data & AI",
      icon: "🤖",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Machine Learning",
        "Feature Engineering",
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: ["Postman", "Jira", "Docker"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{
                      animationDelay: `${
                        categoryIndex * 0.1 + skillIndex * 0.05
                      }s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-highlight">
          <div className="highlight-card">
            <div className="highlight-icon">💡</div>
            <h4>Always Learning</h4>
            <p>Continuously exploring new tools and cloud services</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🤝</div>
            <h4>Collaborative</h4>
            <p>Experience working in fast-paced Agile teams</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🎯</div>
            <h4>Problem-Focused</h4>
            <p>I enjoy solving real-world problems with simple solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
