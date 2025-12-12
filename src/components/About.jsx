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
    { number: "5+", label: "Apps & Tools Built" },
    { number: "4+", label: "Years Building Software" },
    { number: "39.5k+", label: "Community Followers" },
    { number: "1.7M+", label: "Video Views" },
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
              I’m a passionate full-stack developer who loves turning ideas into
              clean, scalable solutions. I’ve worked on a variety of projects
              across web, cloud, and AI—building products that balance
              performance, simplicity, and great user experience.
            </p>
            <p className="about-description">
              My journey in tech started with pure curiosity about how things
              work, and it quickly evolved into a commitment to building
              meaningful digital experiences. I focus on writing clean,
              maintainable code and designing systems that are reliable,
              intuitive, and efficient.
            </p>
            <p className="about-description">
              Beyond development, I’ve built an online Arabic tech community of
              39,500+ followers with 1.7M+ video views, where I break down
              complex technical concepts into simple, engaging content. This
              experience has strengthened my communication skills and my ability
              to explain intricate ideas clearly—something that translates
              directly into better collaboration and product design.
            </p>
            <p className="about-description">
              When I’m not coding, you’ll find me learning new tools, exploring
              cloud architecture, or enjoying a good cup of coffee while
              catching up on the latest trends in software and AI. I’m
              constantly improving and always excited to take on new challenges.
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
