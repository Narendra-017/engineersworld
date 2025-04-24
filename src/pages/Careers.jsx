import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Careers.css';

function Careers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const positions = [
    {
      title: "Business Development Associate",
      type: "Full-time",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdRyt6gXhKV_j6Tp_ugw3WLqA6Opb_jcEm5h5_KHAoMiw-bWg/viewform"
    },
    {
      title: "Website Developer",
      type: "Full-time",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfxmfBghU9D-3J26yPZNjxvAEYOV9Z3KRiVtcS2cFzm3WHDXA/viewform"
    },
    {
      title: "Cyber Security Analyst",
      type: "Full-time",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdQ9v7N8E64SvkJ5tI3aiDo5W-vXoLASJMNKkfy-cYYvPLf6Q/viewform"
    }
  ];

  const internships = [
    {
      title: "Web Development Intern",
      duration: "3 months",
      stipend: "Paid internship"
    },
    {
      title: "Cybersecurity Intern",
      duration: "6 months",
      stipend: "Paid internship"
    }
  ];

  return (
    <div className="careers-page">
      <motion.div 
        className="careers-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Join Our Team</h1>
        <p>Build Your Career with Engineers World</p>
      </motion.div>

      <div className="careers-content">
        <motion.section 
          className="current-openings"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2><FaBriefcase /> Current Openings</h2>
          <div className="jobs-grid">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                className="job-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.9 }}
              >
                <h3>{position.title}</h3>
                <p className="job-type">{position.type}</p>
                <a href={position.link} target="_blank" rel="noopener noreferrer" className="apply-btn">
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          ref={ref}
          className="internships"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h2><FaGraduationCap /> Internship Opportunities</h2>
          <div className="internships-grid">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                className="internship-card"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.8 }}
              >
                <h3>{internship.title}</h3>
                <p>Duration: {internship.duration}</p>
                <p>{internship.stipend}</p>
                <button className="apply-btn">Learn More</button>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Careers;