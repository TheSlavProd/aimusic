import styles from './PortfolioSection.module.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';

const portfolioItems = [
  {
    title: 'День рождения',
    category: 'Поздравительные песни',
    image: '🕯️',
    colorClass: styles.portfolioCardImage,
    link: 'https://cloud.example.com/birthday-songs',
  },
  {
    title: '8 марта',
    category: 'Праздничные песни',
    image: '🌷',
    colorClass: styles.portfolioCardImage2,
    link: 'https://cloud.example.com/march8-songs',
  },
  {
    title: 'Рекламные песни',
    category: 'Бизнес',
    image: '🎤',
    colorClass: styles.portfolioCardImage3,
    link: 'https://cloud.example.com/ad-songs',
  },
  {
    title: 'Гендер пути',
    category: 'Авторские песни',
    image: '🎈',
    colorClass: styles.portfolioCardImage4,
    link: 'https://cloud.example.com/author-songs',
  },
];

export default function PortfolioSection() {
  return (
    <section className={styles.portfolioSection} id="portfolio">
      <div className={styles.portfolioContainer}>
        <h2 className={styles.portfolioTitle}>ПОРТФОЛИО</h2>
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item) => (
            <div
              className={styles.portfolioCard}
              key={item.title}
              onClick={() => window.open(item.link, '_blank', 'noopener noreferrer')}
              tabIndex={0}
              role="button"
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open(item.link, '_blank', 'noopener noreferrer');
                }
              }}
            >
              <div className={`${item.colorClass} ${styles.portfolioCardImage}`}> 
                <span style={{ fontSize: '2.5rem' }}>{item.image}</span>
              </div>
              <div className={styles.portfolioCardContent}>
                <div className={styles.portfolioCardTitle}>{item.title}</div>
                <div className={styles.portfolioCardCategory}>{item.category}</div>
                <div className={styles.portfolioCardLink}>
                  <FaExternalLinkAlt />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
