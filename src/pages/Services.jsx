import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaLaptopCode, FaMobile, FaServer, FaBrain, FaUserShield } from 'react-icons/fa';
import './Services.css';

function Services() {
  const services = [
    {
      icon: <FaShieldAlt />,
      title: "System Protection",
      description: "Comprehensive solutions including antivirus software, firewalls, and encryption technologies to defend against malware and unauthorized access."
    },
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      description: "Creating functional, visually appealing, and user-friendly sites using the latest web technologies and frameworks."
    },
    {
      icon: <FaMobile />,
      title: "Android Development",
      description: "Innovative mobile app development bringing your ideas to life with intuitive and robust applications."
    },
    {
      icon: <FaServer />,
      title: "Penetration Testing",
      description: "Professional security assessment using state-of-the-art tools to identify and mitigate vulnerabilities."
    },
    {
      icon: <FaBrain />,
      title: "Cyber Security Training",
      description: "Comprehensive training programs covering cyber security basics, threats, and best practices."
    },
    {
      icon: <FaUserShield />,
      title: "Threat Intelligence",
      description: "Advanced threat monitoring and analysis to protect your digital infrastructure."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="services-page">
      <motion.div 
        className="services-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Our Services</h1>
        <p>Comprehensive Digital Solutions for Your Business</p>
      </motion.div>

      <motion.div
        ref={ref}
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            variants={itemVariants}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;