import { useCallback, useEffect, useMemo, useState } from "react";
import type { Category, Item } from "../../shared/types";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

interface UseItemsResult {
  items: Item[];
  allItems: Item[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useItems(category?: Category): UseItemsResult {
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_URL}/items`);

      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }

      const data: Item[] = await response.json();
      setAllItems(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    (() => {
      void fetchItems();
    })();
  }, [fetchItems]);

  const items = useMemo(() => {
    if (!category) return allItems;

    return allItems.filter((item) => item.category === category);
  }, [allItems, category]);

  return {
    items,
    allItems,
    loading,
    error,
    refetch: fetchItems,
  };
}
