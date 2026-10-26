"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Product } from "@/lib/product-types";

export type CartLine = {
  product: Product;
  talla: string;
  qty: number;
};

type CartContextValue = {
  items: CartLine[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (product: Product, talla: string) => void;
  update: (id: string, talla: string, qty: number) => void;
  remove: (id: string, talla: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "perez-cart";

function sameLine(line: CartLine, id: string, talla: string) {
  return line.product.id === id && (line.talla || "") === (talla || "");
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Array<Partial<CartLine>>;
        setItems(
          parsed
            .filter((line) => line?.product && line.qty)
            .map((line) => ({
              product: line.product as Product,
              talla: typeof line.talla === "string" ? line.talla : "",
              qty: Number(line.qty) || 1,
            }))
        );
      }
    } catch {
      setItems([]);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const add = (product: Product, talla: string) => {
    const size = talla.trim();
    if (product.tallas?.length && !size) return;

    setItems((current) => {
      const found = current.find((line) => sameLine(line, product.id, size));
      if (found) {
        const nextQty = Math.min(found.qty + 1, product.stock);
        return current.map((line) =>
          sameLine(line, product.id, size)
            ? { ...line, qty: nextQty, product, talla: size }
            : line
        );
      }
      if (product.stock < 1) return current;
      return [...current, { product, talla: size, qty: 1 }];
    });
    setOpen(true);
  };

  const update = (id: string, talla: string, qty: number) => {
    setItems((current) =>
      current
        .map((line) => {
          if (!sameLine(line, id, talla)) return line;
          const next = Math.min(Math.max(qty, 0), line.product.stock);
          return { ...line, qty: next };
        })
        .filter((line) => line.qty > 0)
    );
  };

  const remove = (id: string, talla: string) => {
    setItems((current) =>
      current.filter((line) => !sameLine(line, id, talla))
    );
  };

  const clear = () => setItems([]);

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((sum, line) => sum + line.qty, 0),
      total: items.reduce((sum, line) => sum + line.product.precio * line.qty, 0),
      open,
      setOpen,
      add,
      update,
      remove,
      clear,
    }),
    [items, open]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
