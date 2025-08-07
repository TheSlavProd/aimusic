import Image from 'next/image';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          {/* Логотип */}
          <h1 className={styles.mainTitle}>ПЕСНИ НА ЗАКАЗ</h1>
          <h2 className={styles.subTitle}>С ПОМОЩЬЮ AI</h2>
          <p className={styles.desc}>
            Кто мы и что делаем: Создаем уникальные песни с использованием искусственного интеллекта. Поздравительные, рекламные и авторские песни под ключ.
          </p>
          <div className={styles.actionBtns}>
            <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
              ЗАКАЗАТЬ В ТЕЛЕГРАМ
            </a>
            <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer" className={styles.actionBtn} style={{background:'#b91c1c'}}>
              ЗАКАЗАТЬ В WHATSAPP
            </a>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <div className={styles.heroImageInner}>
            <div className={styles.heroImageCircle}>🎤</div>
            <p className="text-lg font-semibold">Девушка с микрофоном</p>
          </div>
        </div>
      </div>
    </section>
  );
}

