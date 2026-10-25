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
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-perez-marfil text-perez-negro shadow-2xl dark:bg-perez-negro dark:text-perez-marfil">
        <div className="flex items-center justify-between border-b border-perez-champagne/30 px-5 py-4">
          <h2 className="text-lg tracking-[0.15em] uppercase">Carrito</h2>
          <button onClick={() => setOpen(false)} className="text-sm text-perez-oliva dark:text-perez-champagne">
            Cerrar
          </button>
        </div>

        <div className="flex-1 overflow-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-perez-oliva dark:text-perez-champagne">Aún no hay prendas.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((line) => (
                <li key={`${line.product.id}-${line.talla}`} className="flex gap-3">
                  <img
                    src={line.product.foto || line.product.fotos?.[0]}
                    alt={line.product.nombre}
                    referrerPolicy="no-referrer"
                    className="h-20 w-16 rounded-md object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{line.product.nombre}</p>
                    {line.talla ? (
                      <p className="text-xs tracking-[0.15em] uppercase text-perez-terracota">
                        Talla {line.talla}
                      </p>
                    ) : null}
                    <p className="text-sm text-perez-oliva dark:text-perez-champagne">
                      {formatPrice(line.product.precio)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        className="h-7 w-7 rounded border border-perez-champagne/50"
                        onClick={() => update(line.product.id, line.talla, line.qty - 1)}
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">{line.qty}</span>
                      <button
                        className="h-7 w-7 rounded border border-perez-champagne/50"
                        onClick={() => update(line.product.id, line.talla, line.qty + 1)}
                      >
                        +
                      </button>
                      <button
                        className="ml-auto text-xs text-perez-terracota"
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

        <div className="border-t border-perez-champagne/30 px-5 py-4">
          <div className="mb-3 flex justify-between text-sm">
            <span>Total</span>
            <span className="font-medium">{formatPrice(total)}</span>
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
            className={`block w-full rounded-md px-4 py-3 text-center text-sm tracking-wide text-white ${
              items.length
                ? "bg-perez-terracota hover:bg-perez-oliva"
                : "pointer-events-none bg-perez-oliva/40"
            }`}
          >
            Comprar por WhatsApp
          </a>
        </div>
      </aside>
    </div>
  );
}
