import { useState, useMemo } from "react";
import type { Category } from "../../shared/types/index";
import { useItems } from "../../shared/hooks/useItems";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter";
import { ItemGrid } from "../ItemGrid/ItemGrid";
import styles from "./ShopSection.module.css";

export function ShopSection() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const { items, loading, error, refetch } = useItems(
    activeCategory ?? undefined,
  );

  // Compute counts across ALL items for the filter (only accurate when no filter)
  const { allItems } = useItems();
  const counts = useMemo(() => {
    const c: Partial<Record<Category, number>> = {};
    for (const item of allItems) {
      c[item.category] = (c[item.category] ?? 0) + 1;
    }
    return c;
  }, [allItems]);

  return (
    <section id="shop" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>The collection</span>
            <h2 className={styles.heading}>Shop all gear</h2>
          </div>
          <CategoryFilter
            active={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
          />
        </header>
        <ItemGrid
          items={items}
          loading={loading}
          error={error}
          onRetry={refetch}
        />
      </div>
    </section>
  );
}
