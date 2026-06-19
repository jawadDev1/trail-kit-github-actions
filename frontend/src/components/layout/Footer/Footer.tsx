import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo}>
            <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" rx="6" fill="#C4622D" />
              <polygon points="16,6 28,26 4,26" fill="#F7F3ED" />
              <polygon points="10,18 19,6 28,26" fill="#C4622D" opacity="0.5" />
            </svg>
            TrailKit
          </a>
          <p className={styles.tagline}>
            Gear built for the people who go further.
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <span className={styles.groupLabel}>Shop</span>
            <a href="#shop" className={styles.link}>
              All gear
            </a>
            <a href="#shop" className={styles.link}>
              Footwear
            </a>
            <a href="#shop" className={styles.link}>
              Camping
            </a>
          </div>
          <div className={styles.linkGroup}>
            <span className={styles.groupLabel}>Company</span>
            <a href="#about" className={styles.link}>
              About
            </a>
            <a href="#contact" className={styles.link}>
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {year} TrailKit. All rights reserved.</span>
        <span className={styles.api}>
          API status <span className={styles.dot} aria-hidden="true" />
        </span>
      </div>
    </footer>
  );
}
