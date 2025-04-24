import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaChartLine, FaBell, FaLock } from 'react-icons/fa';
import './Products.css';

function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Real-time Protection",
      description: "Advanced detection and prevention of phishing attempts in real-time"
    },
    {
      icon: <FaChartLine />,
      title: "Threat Intelligence",
      description: "Comprehensive insights into emerging threats and attack patterns"
    },
    {
      icon: <FaBell />,
      title: "Instant Alerts",
      description: "Immediate notifications for suspicious activities and potential threats"
    },
    {
      icon: <FaLock />,
      title: "Data Security",
      description: "Enhanced protection for sensitive information and digital assets"
    }
  ];

  return (
    <div className="products-page">
      <motion.div 
        className="products-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>PhishShield</h1>
        <p>Advanced Phishing Detection and Prevention</p>
      </motion.div>

      <div className="product-content">
        <motion.section 
          className="product-overview"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Protect Your Digital Assets</h2>
          <p>PhishShield is a cutting-edge cybersecurity solution that prevents phishing attacks by detecting and neutralizing fraudulent activities in real-time while gathering threat intelligence to provide comprehensive insights into emerging threats.</p>
        </motion.section>

        <motion.div
          ref={ref}
          className="features-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="product-demo"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>See PhishShield in Action</h2>
          <div className="demo-container">
            <div className="demo-placeholder">
            <video className="video-player"  controls>
          <source src="/phising service.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;