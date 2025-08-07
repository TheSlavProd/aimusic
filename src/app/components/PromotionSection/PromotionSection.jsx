import styles from './PromotionSection.module.scss';

export default function PromotionSection() {
  return (
    <section id="promotion" className={styles.promotionSection}>
      <div className={styles.promotionContainer}>
        <h2 className={styles.promotionTitle}>АКЦИЯ</h2>
        <div className={styles.promotionCard}>
          <div className={styles.promotionCardCircle1}></div>
          <div className={styles.promotionCardCircle2}></div>
          <h3 className={styles.promotionCardTitle}>Скидка 20% на первую песню!</h3>
          <p className={styles.promotionCardDesc}>Успейте заказать до конца месяца</p>
          <a href="https://t.me/yourchannel?text=Хочу воспользоваться скидкой 20%" target="_blank" rel="noopener noreferrer" className={styles.promotionBtn}>
            ПОЛУЧИТЬ СКИДКУ
          </a>
        </div>
      </div>
    </section>
  );
}

