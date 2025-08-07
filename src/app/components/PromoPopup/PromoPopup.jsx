import styles from './PromoPopup.module.scss';
import { useState } from 'react';

export default function PromoPopup() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className={styles.promoPopup} style={{maxWidth: '90vw'}}>
      <div className={styles.promoPopupHeader}>
        <span className={styles.promoPopupIcon}>🎁</span>
        <button className={styles.promoPopupClose} onClick={() => setShow(false)}>&times;</button>
      </div>
      <div className={styles.promoPopupText}>
        Акция месяца: Закажи 2 песни — получи 3-ю бесплатно!
      </div>
      <a
        href="https://t.me/yourchannel?text=Хочу акцию 2+1"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.promoPopupBtn}
      >
        ПОЛУЧИТЬ
      </a>
    </div>
  );
}

