import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TailwindCSS', level: 92 },
        { name: 'Vue.js', level: 80 },
        { name: 'CSS/SASS', level: 88 }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Express', level: 88 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 87 },
        { name: 'Redis', level: 75 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '🚀',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 78 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 83 },
        { name: 'Nginx', level: 75 }
      ]
    },
    {
      title: 'Design & Other',
      icon: '✨',
      skills: [
        { name: 'Figma', level: 88 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 93 },
        { name: 'WebSockets', level: 82 },
        { name: 'Testing', level: 86 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
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
                  <div
                    key={skill.name}
                    className="skill-item"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-highlight">
          <div className="highlight-card">
            <div className="highlight-icon">💡</div>
            <h4>Quick Learner</h4>
            <p>Always exploring new technologies and staying updated with industry trends</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🤝</div>
            <h4>Team Player</h4>
            <p>Experienced in collaborative development and agile methodologies</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🎯</div>
            <h4>Problem Solver</h4>
            <p>Passionate about tackling complex challenges with elegant solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
