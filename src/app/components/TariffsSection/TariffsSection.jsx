import styles from './TariffsSection.module.scss';

export default function TariffsSection() {
  return (
    <section id="tariffs" className={styles.tariffsSection}>
      <div className={styles.tariffsContainer}>
        <h2 className={styles.tariffsTitle}>ТАРИФЫ</h2>
        <div className={styles.tariffsGrid}>
          {/* Эконом */}
          <div className={styles.tariffCard}>
            <div className={styles.tariffIcon}>🎵</div>
            <h3 className={styles.tariffName}>ЭКОНОМ</h3>
            <div className={styles.tariffPrice}>3 500 ₽</div>
            <ul className={styles.tariffList}>
              <li>• Песня до 3 минут</li>
              <li>• Базовый текст</li>
              <li>• Простая аранжировка</li>
              <li>• 1 правка</li>
              <li>• Готовность за 3 дня</li>
            </ul>
            <a href="https://t.me/yourchannel?text=Хочу заказать тариф ЭКОНОМ" target="_blank" rel="noopener noreferrer" className={styles.tariffBtn}>
              ЗАКАЗАТЬ
            </a>
          </div>
          {/* Стандарт */}
          <div className={styles.tariffCard} style={{borderColor:'#fdba74'}}>
            <div className={styles.tariffIcon}>🎵</div>
            <h3 className={styles.tariffName}>СТАНДАРТ</h3>
            <div className={styles.tariffPrice}>6 000 ₽</div>
            <ul className={styles.tariffList}>
              <li>• Песня до 5 минут</li>
              <li>• Персонализированный текст</li>
              <li>• Профессиональная аранжировка</li>
              <li>• 3 правки</li>
              <li>• Готовность за 2 дня</li>
              <li>• Бонус: минусовая версия</li>
            </ul>
            <a href="https://t.me/yourchannel?text=Хочу заказать тариф СТАНДАРТ" target="_blank" rel="noopener noreferrer" className={styles.tariffBtn}>
              ЗАКАЗАТЬ
            </a>
          </div>
          {/* Премиум */}
          <div className={styles.tariffCard}>
            <div className={styles.tariffIcon}>🛡️</div>
            <h3 className={styles.tariffName}>ПРЕМИУМ</h3>
            <div className={styles.tariffPrice}>10 000 ₽</div>
            <ul className={styles.tariffList}>
              <li>• Песня любой длительности</li>
              <li>• Эксклюзивный текст</li>
              <li>• Сложная аранжировка</li>
              <li>• Неограниченные правки</li>
              <li>• Готовность за 1 день</li>
              <li>• Минусовая версия</li>
              <li>• Инструментальная версия</li>
              <li>• Приоритетная поддержка</li>
            </ul>
            <a href="https://t.me/yourchannel?text=Хочу заказать тариф ПРЕМИУМ" target="_blank" rel="noopener noreferrer" className={styles.tariffBtn}>
              ЗАКАЗАТЬ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

