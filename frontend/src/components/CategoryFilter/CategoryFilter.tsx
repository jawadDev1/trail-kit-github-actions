import type { Category } from "../../shared/types/index";
import styles from "./CategoryFilter.module.css";

const CATEGORIES: Category[] = [
  "Footwear",
  "Apparel",
  "Accessories",
  "Camping",
];

const ICONS: Record<Category | "All", string> = {
  All: "◈",
  Footwear: "👟",
  Apparel: "🧥",
  Accessories: "🎒",
  Camping: "⛺",
};

interface CategoryFilterProps {
  active: Category | null;
  onChange: (cat: Category | null) => void;
  counts?: Partial<Record<Category, number>>;
}

export function CategoryFilter({
  active,
  onChange,
  counts,
}: CategoryFilterProps) {
  return (
    <div className={styles.wrap}>
      <button
        className={`${styles.chip} ${active === null ? styles.active : ""}`}
        onClick={() => onChange(null)}
      >
        <span className={styles.icon}>{ICONS.All}</span>
        All
        {counts && (
          <span className={styles.count}>
            {Object.values(counts).reduce((a, b) => a + b, 0)}
          </span>
        )}
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`${styles.chip} ${active === cat ? styles.active : ""}`}
          onClick={() => onChange(cat)}
        >
          <span className={styles.icon}>{ICONS[cat]}</span>
          {cat}
          {counts?.[cat] !== undefined && (
            <span className={styles.count}>{counts[cat]}</span>
          )}
        </button>
      ))}
    </div>
  );
}
