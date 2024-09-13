import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
      </div>
      <nav className="footer-right">
        <a href="https://facebook.com" >
          <img className="social-icon" src="/images/ico-facebook.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com" >
          <img className="social-icon" src="/images/ico-instagram.png" alt="Instagram" />
        </a>
        <a href="https://tiktok.com" >
          <img className="social-icon" src="/images/ico-tiktok.png" alt="Tiktok" />
        </a>
        <a href="https://whatsapp.com" >
          <img className="social-icon" src="/images/ico-whatsapp.png" alt="whatsapp" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
