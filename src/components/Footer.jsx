import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  const styles = {
    footer: {
      background: 'linear-gradient(to right, #0d1117, #161b22)',
      padding: '3rem 1.5rem 2rem',
      fontFamily: 'Fira Code, monospace',
      color: '#c9d1d9',
      borderTop: '1px solid #30363d',
      backdropFilter: 'blur(6px)',
      boxShadow: 'inset 0 1px 0 #21262d',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
      justifyContent: 'space-between',
      maxWidth: '1100px',
      margin: 'auto',
    },
    col: {
      flex: '1 1 280px',
      minWidth: '260px',
    },
    heading: {
      color: '#9fef00',
      marginBottom: '0.8rem',
      fontSize: '1.25rem',
    },
    paragraph: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: '#c9d1d9',
    },
    a: {
      color: '#58a6ff',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
    },
    contactLink: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#58a6ff',
      textDecoration: 'none',
    },
    whatsapp: {
      display: 'inline-block',
      backgroundColor: '#25D366',
      color: '#fff',
      padding: '0.7rem 1.6rem',
      borderRadius: '10px',
      fontWeight: 'bold',
      fontFamily: 'Fira Code',
      textDecoration: 'none',
      marginTop: '2rem',
      transition: 'transform 0.3s ease, background 0.3s ease',
    },
    whatsappHover: {
      transform: 'scale(1.05)',
      backgroundColor: '#1ebd5a',
    },
    bottom: {
      textAlign: 'center',
      marginTop: '2.5rem',
      fontSize: '0.85rem',
      color: '#8b949e',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand Info */}
        <div style={styles.col}>
          <h3 style={styles.heading}>Settlers Inn</h3>
          <p style={styles.paragraph}>📍 Kipkelion, Kenya Highlands</p>
          <p style={styles.paragraph}>Where Settlers Still Eat Like Kings.</p>
        </div>

        {/* Contact Info */}
        <div style={styles.col}>
          <h4 style={styles.heading}>Contact Us</h4>
          <a href="tel:+254748778388" style={styles.contactLink}>📞 Hotel: 0748 778***</a>
          <a href="tel:+254723709208" style={styles.contactLink}>👤 Manager: 0723 709***</a>
          <a href="tel:+254727046813" style={styles.contactLink}>👤 Owner: 0727 046***</a>
          <a href="mailto:settlersinn@gmail.com" style={styles.contactLink}>✉️ settlersinn@gmail.com</a>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div style={{ textAlign: 'center' }}>
        <a
          href="https://wa.me/254748778388?text=Hi%20Settlers%20Inn%2C%20I%20want%20to%20book%20a%20room%20or%20table!"
          target="_blank"
          rel="noreferrer"
          style={styles.whatsapp}
          onMouseEnter={(e) => e.currentTarget.style.background = styles.whatsappHover.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.background = styles.whatsapp.backgroundColor}
        >
          📲 Chat with Us on WhatsApp
        </a>
      </div>

      {/* Footer Bottom */}
      <div style={styles.bottom}>
        <p>
          Built with ❤️ by{' '}
          <a href="https://wa.me/254721635810" target="_blank" rel="noreferrer" style={styles.a}>
            EchoBiz (Agent G.Kim)
          </a>
        </p>
        <p>© {year} Settlers Inn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
