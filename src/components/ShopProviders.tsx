"use client";

import { CartProvider } from "./cart/CartContext";
import { CartDrawer } from "./cart/CartDrawer";

export function ShopProviders({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
