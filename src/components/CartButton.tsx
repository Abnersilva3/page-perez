"use client";

import { useCart } from "./cart/CartContext";

export function CartButton() {
  const { count, setOpen } = useCart();

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="relative rounded-md px-2 py-1 text-perez-negro transition-colors hover:text-perez-oliva dark:text-perez-marfil"
      aria-label="Abrir carrito"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-5 w-5"
      >
        <path d="M6 6h15l-1.5 9h-12z" />
        <path d="M6 6 5 3H2" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
      {count > 0 ? (
        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-perez-negro px-1 text-[10px] text-white dark:bg-perez-marfil dark:text-perez-negro">
          {count}
        </span>
      ) : null}
    </button>
  );
}
