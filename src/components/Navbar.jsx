import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'projects', 'skills', 'experience', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <span className="logo-bracket">{'<'}</span>
            <span className="logo-text">YS</span>
            <span className="logo-bracket">{'/>'}</span>
          </div>

          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className="nav-menu">
            {['home', 'projects', 'skills', 'experience', 'about', 'contact'].map((item) => (
              <li key={item}>
                <a
                  onClick={() => scrollToSection(item)}
                  className={activeSection === item ? 'active' : ''}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <span className="logo-bracket">{'<'}</span>
              <span className="logo-text">YS</span>
              <span className="logo-bracket">{'/>'}</span>
            </div>
          </div>
          <ul className="sidebar-menu">
            {['home', 'projects', 'skills', 'experience', 'about', 'contact'].map((item, index) => (
              <li
                key={item}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <a
                  onClick={() => scrollToSection(item)}
                  className={activeSection === item ? 'active' : ''}
                >
                  <span className="menu-number">0{index + 1}</span>
                  <span className="menu-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;
