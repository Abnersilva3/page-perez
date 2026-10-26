"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { SHEET_REFRESH_SECONDS } from "@/config/tienda";
import type { Product } from "@/lib/product-types";
import { formatPrice } from "@/lib/money";
import { useCart } from "./cart/CartContext";

function productFotos(product: Product) {
  if (product.fotos?.length) return product.fotos;
  return [product.foto || "/img/hero-perez.jpg"];
}

function stockLabel(stock: number) {
  if (stock < 1) return "Agotado";
  if (stock <= 3) return "Últimas unidades";
  return "En stock";
}

function filterClass(active: boolean) {
  return `border-b pb-1 text-[10px] uppercase tracking-[0.22em] transition-colors ${
    active
      ? "border-perez-negro text-perez-negro dark:border-perez-marfil dark:text-perez-marfil"
      : "border-transparent text-perez-oliva hover:text-perez-negro dark:text-perez-champagne dark:hover:text-perez-marfil"
  }`;
}

function SizePicker({
  tallas,
  value,
  onChange,
}: {
  tallas: string[];
  value: string;
  onChange: (talla: string) => void;
}) {
  if (!tallas.length) return null;

  return (
    <div>
      <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-perez-oliva">
        Talla
      </p>
      <div className="flex flex-wrap gap-2">
        {tallas.map((talla) => {
          const active = value === talla;
          return (
            <button
              key={talla}
              type="button"
              onClick={() => onChange(talla)}
              className={`min-w-10 border px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] ${
                active
                  ? "border-perez-negro bg-perez-negro text-white dark:border-perez-marfil dark:bg-perez-marfil dark:text-perez-negro"
                  : "border-perez-negro/20 text-perez-negro hover:border-perez-negro dark:border-white/25 dark:text-perez-marfil"
              }`}
            >
              {talla}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { add } = useCart();
  const photos = productFotos(product);
  const tallas = product.tallas ?? [];
  const [index, setIndex] = useState(0);
  const [talla, setTalla] = useState(tallas.length === 1 ? tallas[0] : "");
  const [needSize, setNeedSize] = useState(false);
  const soldOut = product.stock < 1;

  const prev = () =>
    setIndex((value) => (value - 1 + photos.length) % photos.length);
  const next = () => setIndex((value) => (value + 1) % photos.length);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        setIndex((value) => (value - 1 + photos.length) % photos.length);
      }
      if (event.key === "ArrowRight") {
        setIndex((value) => (value + 1) % photos.length);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, photos.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <button
        aria-label="Cerrar"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden bg-perez-arena text-perez-negro dark:bg-perez-negro dark:text-perez-marfil sm:max-h-[88vh] lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative flex h-[38vh] shrink-0 items-center justify-center bg-black/[0.04] dark:bg-black sm:h-[44vh] lg:h-auto lg:min-h-[520px]">
          <img
            src={photos[index]}
            alt={product.nombre}
            referrerPolicy="no-referrer"
            className="max-h-full w-full object-contain"
          />
          {photos.length > 1 ? (
            <>
              <button
                type="button"
                aria-label="Foto anterior"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 px-3 py-2 text-xl leading-none text-perez-negro hover:text-perez-oliva dark:text-perez-marfil"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Foto siguiente"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-2 text-xl leading-none text-perez-negro hover:text-perez-oliva dark:text-perez-marfil"
              >
                ›
              </button>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {photos.map((foto, photoIndex) => (
                  <button
                    key={`${foto}-${photoIndex}`}
                    type="button"
                    aria-label={`Ver foto ${photoIndex + 1}`}
                    onClick={() => setIndex(photoIndex)}
                    className={`h-10 w-8 overflow-hidden border ${
                      photoIndex === index
                        ? "border-perez-negro dark:border-white"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={foto}
                      alt=""
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {(product.categorias ?? []).map((category) => (
                  <p
                    key={category}
                    className="text-[10px] uppercase tracking-[0.22em] text-perez-oliva dark:text-perez-champagne"
                  >
                    {category}
                  </p>
                ))}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-perez-oliva hover:text-perez-negro dark:text-perez-champagne"
              >
                Cerrar
              </button>
            </div>
            <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
              {product.nombre}
            </h2>
            {product.descripcion ? (
              <p className="mt-3 text-sm leading-relaxed text-perez-oliva dark:text-perez-champagne">
                {product.descripcion}
              </p>
            ) : null}
            <div className="mt-6">
              <SizePicker
                tallas={tallas}
                value={talla}
                onChange={(size) => {
                  setTalla(size);
                  setNeedSize(false);
                }}
              />
            </div>
          </div>

          <div className="shrink-0 border-t border-perez-negro/10 p-5 dark:border-white/10 sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <p className="text-2xl font-medium">{formatPrice(product.precio)}</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-perez-oliva dark:text-perez-champagne">
                {stockLabel(product.stock)}
              </p>
            </div>
            {needSize ? (
              <p className="mt-2 text-sm text-perez-oliva">Elige una talla</p>
            ) : null}
            <button
              disabled={soldOut}
              onClick={() => {
                if (tallas.length && !talla) {
                  setNeedSize(true);
                  return;
                }
                add(product, talla);
                onClose();
              }}
              className="mt-5 inline-flex h-11 w-full items-center justify-center bg-perez-negro px-5 text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-perez-oliva disabled:cursor-not-allowed disabled:bg-perez-oliva/40 dark:bg-perez-marfil dark:text-perez-negro"
            >
              {soldOut ? "Agotado" : "Agregar al carrito"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-3">
      {[0, 1, 2, 3].map((item) => (
        <div key={item}>
          <div className="aspect-[3/4] animate-pulse bg-black/[0.04] dark:bg-white/5" />
          <div className="mt-3 h-3 w-24 animate-pulse bg-black/[0.06] dark:bg-white/10" />
          <div className="mt-2 h-3 w-16 animate-pulse bg-black/[0.06] dark:bg-white/10" />
        </div>
      ))}
    </div>
  );
}

export function Shop({ initialCategory }: { initialCategory?: string }) {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [open, setOpen] = useState<Product | null>(null);

  useEffect(() => {
    setSelected(initialCategory ? [initialCategory] : []);
  }, [initialCategory]);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch("/api/productos", { cache: "no-store" });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "No se pudo cargar el catálogo");
        }
        if (!cancelled) {
          if (Array.isArray(data)) {
            setProducts(data);
            setError("");
          }
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Error al cargar productos");
          setLoading(false);
        }
      }
    };

    load();
    const timer = window.setInterval(load, SHEET_REFRESH_SECONDS * 1000);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  const categories = useMemo(() => {
    const seen = new Set<string>();
    for (const product of products) {
      for (const category of product.categorias ?? []) {
        seen.add(category);
      }
    }
    for (const category of selected) {
      if (category) seen.add(category);
    }
    return Array.from(seen).sort((a, b) => a.localeCompare(b, "es"));
  }, [products, selected]);

  const visible = useMemo(() => {
    if (!selected.length) return products;
    return products.filter((product) =>
      selected.some((category) => (product.categorias ?? []).includes(category))
    );
  }, [products, selected]);

  const applyCategory = (category: string | null) => {
    setSelected(category ? [category] : []);
    const url = category
      ? `/catalogo?cat=${encodeURIComponent(category)}`
      : "/catalogo";
    router.replace(url, { scroll: false });
  };

  if (loading) {
    return <ShopSkeleton />;
  }

  if (error) {
    return <p className="text-perez-oliva">{error}</p>;
  }

  if (!products.length) {
    return (
      <p className="text-sm text-perez-oliva dark:text-perez-champagne">
        Aún no hay prendas en el catálogo.
      </p>
    );
  }

  return (
    <div>
      {categories.length > 1 ? (
        <div className="mb-7 flex flex-wrap gap-x-6 gap-y-3">
          <button
            type="button"
            onClick={() => applyCategory(null)}
            className={filterClass(selected.length === 0)}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() =>
                applyCategory(
                  selected.length === 1 && selected[0] === category
                    ? null
                    : category
                )
              }
              className={filterClass(selected.includes(category))}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      {visible.length ? (
        <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-3">
          {visible.map((product) => {
            const soldOut = product.stock < 1;
            const cover = productFotos(product)[0];
            return (
              <article key={product.id}>
                <button
                  type="button"
                  onClick={() => setOpen(product)}
                  className="group block w-full text-left"
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
                </button>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-perez-oliva dark:text-perez-champagne">
          Aún no hay prendas{selected[0] ? ` en ${selected[0]}` : " en esas categorías"}.
        </p>
      )}

      {open ? <ProductModal product={open} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}
