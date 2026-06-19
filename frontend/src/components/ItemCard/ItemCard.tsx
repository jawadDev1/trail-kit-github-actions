import type { Item } from "../../shared/types/index";
import styles from "./ItemCard.module.css";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={item.imageUrl}
          alt={item.name}
          className={styles.image}
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            target.src = `https://placehold.co/400x300/1a2e1a/e8d5b0?text=${encodeURIComponent(item.name)}`;
          }}
        />
        <span
          className={`${styles.stockBadge} ${item.inStock ? styles.inStock : styles.outOfStock}`}
        >
          {item.inStock ? "In stock" : "Out of stock"}
        </span>
        <span className={styles.categoryTag}>{item.category}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${item.price.toFixed(2)}</span>
          <button
            className={styles.addBtn}
            disabled={!item.inStock}
            aria-label={`Add ${item.name} to cart`}
          >
            {item.inStock ? "Add to cart" : "Sold out"}
          </button>
        </div>
      </div>
    </article>
  );
}
