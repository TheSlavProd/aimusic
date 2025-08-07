import styles from './ServicesSection.module.scss';

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h2 className={styles.servicesTitle}>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
        <div className={styles.servicesCard}>
          <div className={styles.servicesIcon}>🎨</div>
          <h3 className={styles.servicesCardTitle}>Подписка на Canva Pro</h3>
          <p className={styles.servicesDesc}>
            Помимо создания музыкального контента, предлагаем подписку на Canva с индивидуальной поддержкой 
            и оформлением дизайнов под ваши задачи. Создаем логотипы, баннеры, презентации и многое другое.
          </p>
          <div className={styles.servicesGrid}>
            <div>
              <div className={styles.servicesListTitle}>Что включено:</div>
              <ul className={styles.servicesList}>
                <li>• Доступ к Canva Pro</li>
                <li>• Индивидуальная поддержка</li>
                <li>• Создание дизайнов под заказ</li>
                <li>• Обучение работе с платформой</li>
              </ul>
            </div>
            <div>
              <div className={styles.servicesListTitle}>Стоимость:</div>
              <div className={styles.servicesPrice}>2 500 ₽/месяц</div>
              <div className={styles.servicesPriceDesc}>или 25 000 ₽/год (экономия 5 000 ₽)</div>
            </div>
          </div>
          <a href="https://t.me/yourchannel?text=Интересует подписка на Canva" target="_blank" rel="noopener noreferrer" className={styles.servicesBtn}>
            ЗАКАЗАТЬ ПОДПИСКУ
          </a>
        </div>
      </div>
    </section>
  );
}

