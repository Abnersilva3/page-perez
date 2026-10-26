import Link from "next/link";
import { loadProducts } from "@/lib/products";
import { formatPrice } from "@/lib/money";

export async function HomeBest() {
  let products: Awaited<ReturnType<typeof loadProducts>> = [];
  try {
    products = (await loadProducts()).slice(0, 4);
  } catch {
    products = [];
  }

  return (
    <section className="bg-perez-marfil pb-16 pt-4 dark:bg-perez-negro sm:pb-20">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-[10px] uppercase tracking-[0.28em] text-perez-negro dark:text-perez-marfil">
            Lo mejor de PEREZ
          </h2>
          <Link
            href="/catalogo"
            className="text-[10px] uppercase tracking-[0.2em] text-perez-oliva transition-colors hover:text-perez-negro dark:text-perez-champagne"
          >
            Ver todo →
          </Link>
        </div>

        {products.length ? (
          <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
            {products.map((product) => {
              const cover = product.fotos?.[0] || product.foto;
              const soldOut = product.stock < 1;
              return (
                <Link
                  key={product.id}
                  href="/catalogo"
                  className="group block"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-black/[0.04] dark:bg-perez-noche">
                    <img
                      src={cover}
                      alt={product.nombre}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-perez-negro dark:text-perez-marfil">
                    {product.nombre}
                  </p>
                  <p className="mt-1 text-[13px] text-perez-oliva dark:text-perez-champagne">
                    {soldOut ? "Agotado" : formatPrice(product.precio)}
                  </p>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-perez-oliva dark:text-perez-champagne">
            El catálogo se está cargando.{" "}
            <Link href="/catalogo" className="underline">
              Ver catálogo
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
