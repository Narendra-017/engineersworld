import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaUsers, FaRocket, FaChartLine } from 'react-icons/fa';
import './About.css';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    { icon: <FaTrophy />, title: "Excellence Award 2023", description: "Best Cybersecurity Solution" },
    { icon: <FaUsers />, title: "1000+ Clients", description: "Trusted by businesses worldwide" },
    { icon: <FaRocket />, title: "#StartupIndia", description: " Recognized By Startup India" },
    { icon: <FaChartLine />, title: "95% Success Rate", description: "In threat prevention" },
    
  ];

  return (
    <div className="about-page">
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>About Engineers World</h1>
        <p>Leading Innovation in Technology</p>
        <h2>Recognized By #StartUpIndia</h2>
      </motion.div>

      <div className="about-content">
        <motion.section 
          className="company-overview"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.0 , delay: 0.2}}
        >
          <h2>Who We Are</h2>
          <p>Engineers World, led by Mr Akshay Kumar, excels in creating user-friendly websites and innovative cybersecurity solutions. Our flagship product, PhishShield, uses advanced machine learning to protect against phishing attacks. We are dedicated to education, offering internships and online learning to nurture future tech leaders.</p>
        </motion.section>

        <div className="mission-vision">
          <motion.div 
            className="mission"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.5, delay: 0.2 }}
          >
            <h3>Our Mission</h3>
            <p>To provide cutting-edge technological solutions while fostering education and innovation in the tech community.</p>
          </motion.div>

          <motion.div 
            className="vision"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4.5, delay: 0.3 }}
          >
            <h3>Our Vision</h3>
            <p>To be the global leader in cybersecurity and technological innovation, creating a safer digital world for everyone.</p>
          </motion.div>
        </div>

        <motion.section 
          ref={ref}
          className="achievements"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 2.5 }}
        >
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="why-choose-us"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2.5, delay: 0.4 }}
        >
          <h2>Why Choose Us</h2>
          <div className="reasons-grid">
            <div className="reason">
              <h4>Expertise</h4>
              <p>Industry-leading professionals with years of experience</p>
            </div>
            <div className="reason">
              <h4>Innovation</h4>
              <p>Cutting-edge solutions using latest technologies</p>
            </div>
            <div className="reason">
              <h4>Support</h4>
              <p>24/7 dedicated customer support</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default About;