import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgGradient} />
        <div className={styles.bgGrid} />
      </div>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Gear built for the trail</span>
        <h1 className={styles.headline}>
          Every mile,
          <br />
          <em className={styles.accent}>fully equipped.</em>
        </h1>
        <p className={styles.sub}>
          Footwear, apparel, and camping essentials for the people who go
          further.
        </p>
        <div className={styles.actions}>
          <a href="#shop" className={styles.btnPrimary}>
            Browse the collection
          </a>
          <a href="#about" className={styles.btnGhost}>
            Our story
          </a>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>4</span>
          <span className={styles.statLabel}>Categories</span>
        </div>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.stat}>
          <span className={styles.statNum}>100%</span>
          <span className={styles.statLabel}>Field tested</span>
        </div>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.stat}>
          <span className={styles.statNum}>48h</span>
          <span className={styles.statLabel}>Fast dispatch</span>
        </div>
      </div>
    </section>
  );
}
