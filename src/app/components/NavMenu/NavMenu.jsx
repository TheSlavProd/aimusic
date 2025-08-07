import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './NavMenu.module.scss';

const navLinks = [
  { id: 'home', label: 'ГЛАВНАЯ' },
  { id: 'tariffs', label: 'ТАРИФЫ' },
  { id: 'portfolio', label: 'ПОРТФОЛИО' },
  { id: 'services', label: 'УСЛУГИ' },
  { id: 'promotion', label: 'АКЦИЯ' },
  { id: 'reviews', label: 'ОТЗЫВЫ' },
];

export default function NavMenu() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const { id } of navLinks) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY + 200 && scrollY < section.offsetTop + section.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрывать меню при переходе по ссылке
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={styles.navMenu}>
      <div className={styles.navInner}>
        <div className={styles.logoRow}>
          <Image src="/logo.svg" alt="AI Music Studio Logo" width={40} height={40} />
          <span className={styles.logoText}>RITMIX LOVE</span>
        </div>
        <div className={styles.menuLinks}>
          {navLinks.map(link => (
            <ScrollLink
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              className={
                styles.menuLink + (activeSection === link.id ? ' ' + styles.active : '')
              }
              onClick={handleLinkClick}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <ScrollLink
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              className={
                styles.mobileMenuLink + (activeSection === link.id ? ' ' + styles.active : '')
              }
              onClick={handleLinkClick}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}

