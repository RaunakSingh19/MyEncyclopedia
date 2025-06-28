import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="logo">Devora<span className="dot">.</span></Link>

          {/* Desktop Nav */}
          <nav className="nav desktop-nav">
            <ul className="nav-list">
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/courses" >Encyclopedia</Link></li>
              <li><Link to="/blog" >Blog</Link></li>
              <li><Link to="/about" >About Us</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
            </ul>
          </nav>

          <div className="nav-right">
            <Link to="/login" className="signup-btn">Sign Up</Link>
            <button className="nav-toggle" onClick={toggleMenu} aria-label="Open menu">
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <aside className={`sidebar ${menuOpen ? 'show' : ''}`}>
        <button className="nav-close" onClick={closeMenu} aria-label="Close menu">
          <FiX />
        </button>
        <ul className="nav-list">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/courses" onClick={closeMenu}>All Course</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li className="mobile-signup"><Link to="/login" className="signup-btn" onClick={closeMenu}>Sign Up</Link></li>
        </ul>
      </aside>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;