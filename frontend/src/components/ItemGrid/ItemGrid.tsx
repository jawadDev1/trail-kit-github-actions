import type { Item } from "../../shared/types/index";
import { ItemCard } from "../ItemCard/ItemCard";
import styles from "./ItemGrid.module.css";

interface ItemGridProps {
  items: Item[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

export function ItemGrid({ items, loading, error, onRetry }: ItemGridProps) {
  if (loading) {
    return (
      <div className={styles.grid}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.skeleton} aria-hidden="true">
            <div className={styles.skeletonImg} />
            <div className={styles.skeletonBody}>
              <div className={styles.skeletonLine} style={{ width: "65%" }} />
              <div className={styles.skeletonLine} style={{ width: "90%" }} />
              <div className={styles.skeletonLine} style={{ width: "75%" }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.state}>
        <div className={styles.stateIcon}>⚠</div>
        <p className={styles.stateTitle}>Couldn't load items</p>
        <p className={styles.stateMsg}>{error}</p>
        <button className={styles.retryBtn} onClick={onRetry}>
          Try again
        </button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={styles.state}>
        <div className={styles.stateIcon}>◎</div>
        <p className={styles.stateTitle}>Nothing here yet</p>
        <p className={styles.stateMsg}>
          No items in this category. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
}
