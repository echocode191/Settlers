import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // Handle mobile detection on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 1.5rem',
      borderBottom: '1px solid #2b3137',
      background: 'rgba(13, 17, 23, 0.9)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      flexWrap: 'wrap',
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
    },
    logo: {
      height: '40px',
    },
    title: {
      fontSize: '1.4rem',
      color: '#9fef00',
      margin: 0,
      fontWeight: 600,
    },
    nav: {
      display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      width: isMobile ? '100%' : 'auto',
      marginTop: isMobile ? '1rem' : 0,
      gap: isMobile ? '1rem' : '1.5rem',
    },
    link: {
      color: '#58a6ff',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: '0.3s',
    },
    menuBtn: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      fontSize: '1.7rem',
      color: '#58a6ff',
      cursor: 'pointer',
    },
    backBtn: {
      fontSize: '1.4rem',
      color: '#58a6ff',
      marginRight: '0.8rem',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
    },
  };

  // Hover effect handler
  const hoverLink = (e, hover) => {
    if (hover) {
      e.target.style.color = '#1f6feb';
      e.target.style.textShadow = '0 0 6px #58a6ff';
    } else {
      e.target.style.color = '#58a6ff';
      e.target.style.textShadow = 'none';
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.brand}>
        {!isHome && (
          <button style={styles.backBtn} onClick={() => navigate(-1)}>←</button>
        )}
        <img src="/assets/logo.png" alt="Settlers Inn Logo" style={styles.logo} />
        <h1 style={styles.title}>Settlers Inn</h1>
      </div>

      <button style={styles.menuBtn} onClick={toggleMenu}>☰</button>

      <nav style={styles.nav}>
        {[
          ['Home', '/'],
          ['Menu', '/menu'],
          ['Stay', '/accommodation'],
          ['About', '/about'],
          ['Gallery', '/gallery'],
          ['📍 Location', '/location'],
          ['Contact', '/contact'],
          ['Offers', '/offers'],
        ].map(([label, path]) => (
          <Link
            key={path}
            to={path}
            style={styles.link}
            onMouseEnter={(e) => hoverLink(e, true)}
            onMouseLeave={(e) => hoverLink(e, false)}
            onClick={() => isMobile && setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
