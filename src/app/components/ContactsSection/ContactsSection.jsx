import styles from "./ContactsSection.module.scss";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function ContactsSection() {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.contactsContainer}>
        <h2 className={styles.contactsTitle}>Связаться с нами</h2>
        <p className={styles.contactsDesc}>
          Выберите удобный способ связи для заказа песни
        </p>
        <div className={styles.contactsLinks}>
          <a
            href="https://t.me/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactsLink}
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://wa.me/0000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactsLink}
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactsLink}
          >
            <FaInstagram />
          </a>
        </div>

        <div className={styles.contactsCopyright}>
          © 2024 RITMIX LOVE. Все права защищены. <br />{" "}
          <div   style={{ marginTop: "10px", color: "#fff" }}>
            Powered by
            <a
              style={{ textDecoration: "none", marginLeft: "5px" }}
              href="https://www.naymax.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Naymax
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
