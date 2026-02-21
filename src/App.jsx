// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import profileImage from './assets/Utkarsh_Sharma.png';

import { 
  FaArrowRight, 
  FaChevronRight, 
  FaQuoteLeft, 
  FaCalendarAlt, 
  FaRocket,
  FaPalette,
  FaCode,
  FaChartLine,
  FaLaptopCode,
  FaCheckCircle,
  FaUser,
  FaAward,
  FaLightbulb,
  FaHeart,
  FaBars,
  FaTimes,
   FaUserMd
} from 'react-icons/fa';
import { FiMail, FiInstagram, FiTwitter, FiLinkedin, FiGithub, FiExternalLink } from 'react-icons/fi';

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  const services = [
    { icon: <FaPalette />, title: "Web design", description: "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs." },
    { icon: <FaCode />, title: "Development", description: "Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience." },
    { icon: <FaChartLine />, title: "Content & SEO", description: "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results." }
  ];

  const processSteps = [
    { 
      number: "01", 
      title: "Do we Match?", 
      subtitle: "Discovery Call", 
      description: "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
      duration: "2 Hours",
      items: ["We get to know each other better", "Determine how I can best assist you", "Understand the goals you have for your website"]
    },
    { 
      number: "02", 
      title: "WE need a plan", 
      subtitle: "Concept & Strategy", 
      description: "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype.",
      duration: "2 Weeks",
      items: ["UX Design", "Wireframes", "Interactive Prototype"]
    },
    { 
      number: "03", 
      title: "Some Magic", 
      subtitle: "Web Design", 
      description: "Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition.",
      duration: "2 Weeks",
      items: ["High-end web design tailored to your brand", "Interactive prototype of the design"]
    },
    { 
      number: "04", 
      title: "More Magic", 
      subtitle: "Development", 
      description: "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration.",
      duration: "2 Weeks",
      items: ["Custom Framer website", "Modular web design systems", "CMS integration"]
    },
    { 
      number: "05", 
      title: "Ready to go", 
      subtitle: "Website onboarding", 
      description: "In a personal workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized video tutorials.",
      duration: "2 Hours",
      items: ["Personal workshop", "Personalized video tutorials", "Edit text and images directly"]
    }
  ];

  const projects = [
    { 
      title: "MedExJob.com – Medical Job Portal", 
      description: "MedExJob.com is a medical job portal where students and professionals apply for jobs.", 
      category: "Web Development",
      tech: ["React", "Typscript", "Redux","Tailwind CSS","Spring Boot","Spring Secuirty","MySQL"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
     icon: <FaUserMd />,
      image: "https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTpiZjkzZmE0NjIzZTZjYzM3OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxODFlYzcwMzM2ODowMDA2NGFhNmYzNjhlZDNmEAI=",
      githubUrl: "https://github.com/UtkarshSharm-a/Medical_Job_Portal",
      liveUrl: "https://medexjob.com/"
    },
    { 
      title: "Employee Management System", 
      description: "A web-based system for managing employee records, roles, and departments with secure and efficient data handling.", 
      category: "Web Development",
      tech: ["React","Redux","CSS","Spring Boot","Spring Secuirty","MySQL"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: <FaPalette />,
      image: "https://www.zimyo.com/middle-east/wp-content/uploads/2025/05/Role-of-TEchnology-in-Employee-Data-Management.webp",
      githubUrl: "https://github.com/UtkarshSharm-a/employee_management_system",
      liveUrl: ""
    },
    { 
      title: "Lagunitas Brewing Company", 
      description: "Intuitive frontend web development with a focus on user experience and modern aesthetics.",
      category: "Frontend Web Development",
      tech: ["HTML","CSS","JavaScript","GSASP","ScrollTrigger","locomotive js","Swiper js","Framer Motion"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: <FaLaptopCode />,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/feb32c31265291.564943e651232.jpg",
      githubUrl: "https://github.com/UtkarshSharm-a/reimagin-2",
      liveUrl: "https://reimagin-2.onrender.com/"
    },
    { 
      title: "Stock Trading Application", 
      description: "A fully responsive Stock Trading Apllication using the MERN stack to practice real-world UI design and full-stack development.", 
      category: "Full Stack Web Development",
      tech: ["HTML", "CSS", "JS","BOOTSTRAP","REACT JS","NODE JS","EXPRESS JS","MONGODB"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: <FaChartLine />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/UtkarshSharm-a/Zerodha-main1-main",
      liveUrl: "https://stock-buy-sell-frontends.onrender.com/"
    },
    { 
      title: "Fitness Tracker", 
      description: "AI-powered fitness recommendation microservice that consumes activity data via Kafka and generates personalized workout insights using Gemini AI.", 
      category: "Full Stack Web Development",
      tech: ["Spring Boot", "Microservices", "Spring Cloud", "Eureka Server", "API Gateway", "Kafka", "Google Gemini API","MongoDB","React"],
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      icon: <FaChartLine />,
      image: "https://www.creativefabrica.com/wp-content/uploads/2022/11/01/Fitness-Workout-Tracker-App-UI-Kit-Graphics-44164698-1.png",
      githubUrl: "https://github.com/UtkarshSharm-a/Fitness-Tracker.git",
      liveUrl: "https://example.com"
    },
    { 
      title: "Sundown Studio", 
      description: "Sundown Studio website showcasing modern UI design, smooth animations, and interactive frontend features using HTML, CSS, and JavaScript.", 
      category: "Frontend Web Development",
      tech: ["HTML","CSS","JavaScript","GSASP","ScrollTrigger","locomotive js","Swiper js","Framer Motion"],
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      icon: <FaPalette />,
      image: "https://image.commarts.com/images1/2/5/5/1/1/1155216_102_1160_MjAwODYxMTQ0MS03NzgwMzc0OTc.jpg",
      githubUrl: "https://github.com/UtkarshSharm-a/Sundown.git",
      liveUrl: "https://hellowsundown.vercel.app/"
    }
  ];

  return (
    <div className="arik-portfolio">
      {/* Mobile Menu Icon - ONLY shows on mobile */}
      <button className="mobile-menu-icon" onClick={toggleMenu} aria-label="Open menu">
        <FaBars />
      </button>

      {/* Mobile Menu Overlay - ONLY shows on mobile when open */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <button className="close-menu-icon" onClick={closeMenu} aria-label="Close menu">
          <FaTimes />
        </button>
        
        <div className="mobile-menu-content">
          <div className="mobile-menu-logo">
            Portfolio
          </div>
          
          <div className="mobile-nav-menu">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#process" onClick={closeMenu}>Process</a>
            <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
          
          <a href="#contact" className="mobile-contact-btn" onClick={closeMenu}>
            Let's talk <FaArrowRight />
          </a>
          
          <div className="mobile-social-icons">
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="#" aria-label="Email"><FiMail /></a>
            <a href="#" aria-label="GitHub"><FiGithub /></a>
          </div>
        </div>
      </div>

      <HeroSection />
      <AboutSection />
      <ServicesSection services={services} />
      <ProcessSection 
        processSteps={processSteps} 
        activeStep={activeStep} 
        setActiveStep={setActiveStep} 
      />
      <PortfolioSection projects={projects} />
      <ContactSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <header className="header">
        <div className="logo">Portfolio</div>
        <nav className="nav-menu">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact" className="contact-btn">Let's talk <FaArrowRight /></a>
        </nav>
      </header>
      
      <div className="hero-content">
        <h1>Create stunning digital experiences that drive results</h1>
        <p className="hero-subtitle">
          I specialize in crafting visually compelling websites and digital solutions 
          that blend innovative design with strategic functionality.
        </p>
        <div className="hero-buttons">
          <a href="#testimonials" className="primary-btn" style={{textDecoration: 'none'}}>
            View my work <FaChevronRight />
          </a>
          <a href="#about" className="secondary-btn" style={{textDecoration: 'none'}}>
            About me
          </a>
        </div>
      </div>
      
      <div className="hero-stats">
        <div className="stat">
          <h3>25+</h3>
          <p>Projects completed</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Client satisfaction</p>
        </div>
        <div className="stat">
          <h3>3 years</h3>
          <p>Industry experience</p>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const skills = [
    {
      title: "Web Design & Web Development",
      description: "I build responsive, user-friendly, and performance-optimized websites with modern UI/UX principles.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX Principles"],
      icon: <FaPalette />
    },
    {
      title: "MERN Stack Web Development",
      description: "Full-stack web development using the MERN stack with scalable and maintainable architecture.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose", "Tailwind CSS"],
      icon: <FaCode />
    },
    {
      title: "Java Full Stack Web Development",
      description: "Enterprise-level backend and full-stack development using Java and Spring ecosystem.",
      tech: ["Java", "Spring Boot", "Microservices", "Kafka", "API Gateway", "Eureka Server", "Angular"],
      icon: <FaLaptopCode />
    },
    {
      title: "DevOps & Cloud",
      description: "CI/CD pipelines, containerization, and cloud infrastructure management.",
      tech: ["Docker", "Jenkins", "GitHub", "Bitbucket", "Kubernetes", "AWS EC2", "AWS S3", "AWS Lambda"],
      icon: <FaRocket />
    }
  ];

  const achievements = [
    { icon: <FaAward />, number: "25+", label: "Projects Delivered" },
    { icon: <FaHeart />, number: "100%", label: "Client Satisfaction" },
    { icon: <FaUser />, number: "25+", label: "Happy Clients" },
    { icon: <FaLightbulb />, number: "3+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Me</h2>
        <p>Passionate designer and developer crafting digital experiences that matter</p>
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
       <h3>Hello, I'm Utkarsh Sharma a Creative & Problem Solver</h3>
            <p>
              With over 3 years of experience in web design and development, I've had the privilege 
              of working with amazing clients to bring their digital visions to life. My approach 
              combines creative design thinking with technical expertise to deliver solutions that 
              not only look stunning but also drive real business results.
            </p>
            <p>
              I believe in the power of design to solve problems and create meaningful connections. 
              Every project is an opportunity to push boundaries, learn something new, and create 
              something that makes a difference. Whether it's a sleek landing page or a complex 
              web application, I bring the same level of passion and attention to detail.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <FaCheckCircle />
                <span>User-centered design approach</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle />
                <span>Modern tech stack expertise</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle />
                <span>Agile development methodology</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle />
                <span>Continuous learning mindset</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <img src={profileImage} alt="Utkarsh Sharma" className="profile-image" />
            </div>
            <div className="image-decoration"></div>
          </div>
        </div>

        <div className="skills-section">
          <h3>My Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-card-icon">{skill.icon}</div>
                <h3 className="skill-card-title">{skill.title}</h3>
                <p className="skill-card-description">{skill.description}</p>
                <div className="skill-card-tech">
                  {skill.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon">{achievement.icon}</div>
              <h4>{achievement.number}</h4>
              <p>{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ services }) {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <h2>What I do</h2>
        <p>Comprehensive digital solutions tailored to your needs</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="service-link">
              Learn more <FaChevronRight />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection({ processSteps, activeStep, setActiveStep }) {
  return (
    <section id="process" className="process-section">
      <div className="section-header">
        <h2>The Process</h2>
        <p>Your Website in 5 steps</p>
        <p className="section-subtitle">
          Our process ensures that we create a website tailored to your business needs.
        </p>
      </div>
      
      <div className="process-timeline">

        <div className="timeline-navigation">
          {processSteps.map((step, index) => (
            <button 
              key={index}
              className={`step-indicator ${activeStep === index ? 'active' : ''}`}
              onClick={() => setActiveStep(index)}
            >
              <span className="step-number">{step.number}</span>
              <span className="step-title">{step.title}</span>
            </button>
          ))}
        </div>
        
        <div className="step-content">
          <div className="step-header">
            <h3>{processSteps[activeStep].subtitle}</h3>
            <div className="step-duration">
              <FaCalendarAlt />
            </div>
          </div>
          <p className="step-description">{processSteps[activeStep].description}</p>
          <ul className="step-items">
            {processSteps[activeStep].items.map((item, index) => (
              <li key={index}>
                <FaCheckCircle /> {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

function PortfolioSection({ projects }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="testimonials" className="portfolio-section">
      <div className="section-header">
        <h2>View My Work</h2>
        <p>Explore my latest projects and creative solutions that deliver exceptional results</p>
      </div>
      
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div 
            className={`portfolio-card ${hoveredIndex === index ? 'hovered' : ''}`}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="card-image-section">
              <img 
                src={project.image} 
                alt={project.title}
                className="card-image"
                loading="lazy"
              />
              <div className="card-image-overlay" style={{ background: project.gradient }}></div>
              <div className="card-buttons-top">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn-icon github-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub />
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn-icon live-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
            
            <div className="card-content-section">
              <div className="card-header-info">
                <div className="card-icon-badge">
                  {project.icon}
                </div>
                <span className="card-category-badge">{project.category}</span>
              </div>
              
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              
              <div className="card-tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/utkarshsharma8369@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again!' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Ready to start your project?</h2>
        <p>
          Let's create something amazing together. Get in touch to discuss your project 
          and how we can bring your vision to life.
        </p>
        <button className="contact-cta">
          Get in touch <FaLaptopCode />
        </button>
      </div>
      
      <div className="contact-form">
        <h3>Send me a message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <textarea 
            name="message"
            placeholder="Your message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
          {submitStatus.message && (
            <div className={`form-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>Sending... <FaRocket /></>
            ) : (
              <>Send message <FaRocket /></>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Portfolio</h3>
          <p>Creating digital experiences that make an impact</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Services</h4>
            <a href="#services">Web Design</a>
            <a href="#services">Development</a>
            <a href="#services">SEO</a>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-social">
          <h4>Connect with me</h4>
          <div className="social-icons">
            <a href="#"><FiInstagram /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiLinkedin /></a>
            <a href="#"><FiMail /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;