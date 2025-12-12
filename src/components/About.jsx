import "./About.css";

const About = () => {
  const interests = [
    {
      icon: "💻",
      title: "Coding",
      description: "Building innovative solutions",
    },
    {
      icon: "🎨",
      title: "Design",
      description: "Creating beautiful interfaces",
    },
    {
      icon: "📚",
      title: "Learning",
      description: "Exploring new technologies",
    },
    {
      icon: "🎮",
      title: "Gaming",
      description: "Strategy and adventure games",
    },
    { icon: "🏃", title: "Fitness", description: "Running and staying active" },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Technologies" },
    { number: "100%", label: "Commitment" },
  ];

  return (
    <section id="about" className="about">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me beyond the code</p>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image">
              <div className="image-placeholder">
                <div className="avatar-circle">
                  <span className="avatar-text">YS</span>
                </div>
                <div className="floating-elements">
                  <div className="float-element">💻</div>
                  <div className="float-element">⚛️</div>
                  <div className="float-element">🚀</div>
                  <div className="float-element">✨</div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-greeting">
              Hi, I'm <span className="highlight">Youssef</span>
            </h3>
            <p className="about-description">
              I'm a passionate full-stack developer with a love for creating
              elegant solutions to complex problems. With over 5 years of
              experience in web development, I've had the privilege of working
              on diverse projects ranging from startups to enterprise
              applications.
            </p>
            <p className="about-description">
              My journey in tech started with a curiosity about how websites
              work, and it quickly evolved into a deep passion for building
              exceptional digital experiences. I believe in writing clean,
              maintainable code and creating interfaces that users love to
              interact with.
            </p>
            <p className="about-description">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of
              coffee while reading about the latest trends in software
              development. I'm always eager to learn and take on new challenges.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="interests-section">
          <h3 className="interests-title">Things I Love</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="interest-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="interest-icon">{interest.icon}</div>
                <h4 className="interest-title">{interest.title}</h4>
                <p className="interest-description">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
