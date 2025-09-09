import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-brand">CreateNote</h3>
          <p className="footer-description">
            Your personal note-taking companion. Create, organize, and manage your thoughts effortlessly.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-links">
            <a href="https://twitter.com/createnoteapp" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://github.com/createnote" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/company/createnote" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 CreateNote. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;