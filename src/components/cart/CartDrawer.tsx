"use client";

import { WHATSAPP_NUMBER } from "@/config/tienda";
import { formatPrice } from "@/lib/money";
import { useCart } from "./CartContext";

function buildWhatsAppUrl(
  lines: { nombre: string; talla: string; qty: number; precio: number }[],
  total: number
) {
  const list = lines
    .map((line) => {
      const size = line.talla ? ` talla ${line.talla}` : "";
      return `• ${line.nombre}${size} x${line.qty} — ${formatPrice(line.precio * line.qty)}`;
    })
    .join("\n");
  const text = `Hola PEREZ, quiero este pedido:\n\n${list}\n\nTotal: ${formatPrice(total)}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function CartDrawer() {
  const { items, total, open, setOpen, update, remove } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Cerrar carrito"
        className="absolute inset-0 bg-black/50"
        onClick={() => setOpen(false)}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-perez-arena text-perez-negro shadow-2xl dark:bg-perez-negro dark:text-perez-marfil">
        <div className="flex items-center justify-between border-b border-perez-negro/10 px-5 py-5 dark:border-white/10">
          <h2 className="text-[11px] uppercase tracking-[0.28em]">Carrito</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-[11px] uppercase tracking-[0.16em] text-perez-oliva hover:text-perez-negro dark:text-perez-champagne"
          >
            Cerrar
          </button>
        </div>

        <div className="flex-1 overflow-auto px-5 py-5">
          {items.length === 0 ? (
            <p className="text-sm text-perez-oliva dark:text-perez-champagne">
              Aún no hay prendas.
            </p>
          ) : (
            <ul className="space-y-5">
              {items.map((line) => (
                <li key={`${line.product.id}-${line.talla}`} className="flex gap-3">
                  <img
                    src={line.product.foto || line.product.fotos?.[0]}
                    alt={line.product.nombre}
                    referrerPolicy="no-referrer"
                    className="h-24 w-[72px] object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-[0.16em]">
                      {line.product.nombre}
                    </p>
                    {line.talla ? (
                      <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-perez-oliva">
                        Talla {line.talla}
                      </p>
                    ) : null}
                    <p className="mt-1 text-sm text-perez-oliva dark:text-perez-champagne">
                      {formatPrice(line.product.precio)}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        className="flex h-7 w-7 items-center justify-center border border-perez-negro/20"
                        onClick={() => update(line.product.id, line.talla, line.qty - 1)}
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">{line.qty}</span>
                      <button
                        className="flex h-7 w-7 items-center justify-center border border-perez-negro/20"
                        onClick={() => update(line.product.id, line.talla, line.qty + 1)}
                      >
                        +
                      </button>
                      <button
                        className="ml-auto text-[10px] uppercase tracking-[0.16em] text-perez-oliva hover:text-perez-negro"
                        onClick={() => remove(line.product.id, line.talla)}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-perez-negro/10 px-5 py-5 dark:border-white/10">
          <div className="mb-4 flex justify-between text-[11px] uppercase tracking-[0.16em]">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <a
            href={
              items.length
                ? buildWhatsAppUrl(
                    items.map((line) => ({
                      nombre: line.product.nombre,
                      talla: line.talla,
                      qty: line.qty,
                      precio: line.product.precio,
                    })),
                    total
                  )
                : undefined
            }
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-11 w-full items-center justify-center text-[10px] uppercase tracking-[0.2em] ${
              items.length
                ? "bg-perez-negro text-white hover:bg-perez-oliva dark:bg-perez-marfil dark:text-perez-negro"
                : "pointer-events-none bg-perez-oliva/30 text-white"
            }`}
          >
            Comprar por WhatsApp
          </a>
        </div>
      </aside>
    </div>
  );
}
