// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import profileImage from './assets/Utkarsh_Sharma.png';
import emailjs from '@emailjs/browser';
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
  FaHeart
} from 'react-icons/fa';
import { FiMail, FiInstagram, FiTwitter, FiLinkedin, FiGithub, FiExternalLink } from 'react-icons/fi';

function App() {
  const [activeStep, setActiveStep] = useState(0);

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
      title: "E-Commerce Platform", 
      description: "A modern, responsive e-commerce solution with seamless checkout and inventory management.", 
      category: "Web Development",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: <FaCode />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    { 
      title: "Brand Identity Design", 
      description: "Complete brand identity redesign for a tech startup, including logo, color palette, and guidelines.", 
      category: "UI/UX Design",
      tech: ["Figma", "Illustrator", "Photoshop"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: <FaPalette />,
      image: "https://images.unsplash.com/photo-1561070791-2526d69294b1?w=800&h=600&fit=crop",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    { 
      title: "Mobile App Interface", 
      description: "Intuitive mobile app design with focus on user experience and modern aesthetics.", 
      category: "Mobile Design",
      tech: ["Figma", "Sketch", "Principle"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: <FaLaptopCode />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    { 
      title: "SEO Optimization", 
      description: "Comprehensive SEO strategy that increased organic traffic by 300% in 6 months.", 
      category: "Digital Marketing",
      tech: ["Analytics", "SEO Tools", "Content"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: <FaChartLine />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    { 
      title: "Dashboard Design", 
      description: "Data visualization dashboard with real-time analytics and interactive charts.", 
      category: "Web Design",
      tech: ["React", "D3.js", "Chart.js"],
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      icon: <FaChartLine />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    { 
      title: "Landing Page", 
      description: "High-converting landing page design that increased conversion rates by 250%.", 
      category: "Web Design",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      icon: <FaPalette />,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <div className="arik-portfolio">
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
          <h3>50+</h3>
          <p>Projects completed</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Client satisfaction</p>
        </div>
        <div className="stat">
          <h3>5 years</h3>
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
    { icon: <FaAward />, number: "50+", label: "Projects Delivered" },
    { icon: <FaHeart />, number: "100%", label: "Client Satisfaction" },
    { icon: <FaUser />, number: "40+", label: "Happy Clients" },
    { icon: <FaLightbulb />, number: "5+", label: "Years Experience" }
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
            <h3>Hello, I'm a Creative Problem Solver</h3>
            <p>
              With over 5 years of experience in web design and development, I've had the privilege 
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
              <FaCalendarAlt /> {processSteps[activeStep].duration}
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
    // Clear status message when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: '', message: '' });

    // EmailJS configuration
    // Setup Instructions:
    // 1. Sign up at https://www.emailjs.com/ (free account allows 200 emails/month)
    // 2. Add Gmail service and connect your email: utkarshsharma8369@gmail.com
    // 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
    // 4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
    // 5. Replace the values below
    // See EMAILJS_SETUP.md for detailed instructions
    
    // Read EmailJS credentials from Vite environment variables.
    // Create a `.env.local` (or `.env`) at project root with these values:
    // VITE_EMAILJS_SERVICE_ID=service_xxxxx
    // VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
    // VITE_EMAILJS_PUBLIC_KEY=your_public_key
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'utkarshsharma8369@gmail.com', // Your email
    };

    // Quick validation to help developer if env vars are missing
    if (!serviceID || !templateID || !publicKey) {
      setSubmitStatus({
        type: 'error',
        message:
          'Email service is not configured. Please add EmailJS keys to .env.local (see EMAILJS_SETUP.md).'
      });
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact me directly at utkarshsharma8369@gmail.com' 
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