import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaTelegram } from 'react-icons/fa';
import './Footer.css';
import {Link } from "react-router-dom"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://t.me/joinchat/3qDdcVA7NR1lOGQ1" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
            <a href="https://www.linkedin.com/company/engineers-world-pvt-ltd/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/engineer_s__world/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@engineers_world_pvt" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email:info@engineersworld.in</p>
          <p>Phone: +91 7997700218</p>
          <p>Address: Venkampet road, sircilla, Telangana, 505301</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Engineers World. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;