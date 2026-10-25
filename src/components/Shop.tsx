"use client";

import { useEffect, useMemo, useState } from "react";
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
      <p className="mb-2 text-[10px] tracking-[0.2em] uppercase text-perez-champagne">
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
              className={`min-w-10 rounded-md border px-3 py-1.5 text-sm uppercase ${
                active
                  ? "border-perez-terracota bg-perez-terracota text-white"
                  : "border-white/20 text-perez-marfil hover:border-perez-terracota"
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
        className="absolute inset-0 bg-black/75"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl bg-perez-noche text-perez-marfil sm:rounded-2xl lg:grid lg:max-h-[88vh] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative flex h-[34vh] shrink-0 items-center justify-center bg-black sm:h-[42vh] lg:h-auto lg:min-h-[520px]">
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
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-3 py-2 text-2xl leading-none text-white hover:bg-white/30"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Foto siguiente"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-3 py-2 text-2xl leading-none text-white hover:bg-white/30"
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
                    className={`h-10 w-8 overflow-hidden rounded border ${
                      photoIndex === index
                        ? "border-white"
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
          <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {(product.categorias ?? []).map((category) => (
                  <p
                    key={category}
                    className="text-[10px] tracking-[0.2em] uppercase text-perez-terracota"
                  >
                    {category}
                  </p>
                ))}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 text-sm text-perez-champagne"
              >
                Cerrar
              </button>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl">{product.nombre}</h2>
            {product.descripcion ? (
              <p className="mt-3 text-perez-champagne">{product.descripcion}</p>
            ) : null}
            <div className="mt-5">
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

          <div className="shrink-0 border-t border-white/10 p-5 sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <p className="text-2xl font-medium">{formatPrice(product.precio)}</p>
              <p className="text-sm text-perez-champagne">
                {stockLabel(product.stock)}
              </p>
            </div>
            {needSize ? (
              <p className="mt-2 text-sm text-perez-terracota">Elige una talla</p>
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
              className="mt-4 w-full rounded-md bg-perez-terracota px-4 py-3 text-sm text-white disabled:cursor-not-allowed disabled:bg-perez-oliva/40"
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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2].map((item) => (
        <div key={item} className="overflow-hidden rounded-2xl bg-perez-noche">
          <div className="aspect-[4/5] animate-pulse bg-white/5" />
          <div className="space-y-2 p-4">
            <div className="h-3 w-24 animate-pulse rounded bg-white/10" />
            <div className="h-5 w-40 animate-pulse rounded bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState<Product | null>(null);

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
    return Array.from(seen).sort((a, b) => a.localeCompare(b, "es"));
  }, [products]);

  const visible = useMemo(() => {
    if (!selected.length) return products;
    return products.filter((product) =>
      selected.some((category) => (product.categorias ?? []).includes(category))
    );
  }, [products, selected]);

  const toggle = (category: string) => {
    setSelected((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  };

  if (loading) {
    return <ShopSkeleton />;
  }

  if (error) {
    return <p className="text-center text-perez-terracota">{error}</p>;
  }

  if (!products.length) {
    return (
      <p className="text-center text-perez-champagne">
        Aún no hay prendas en el catálogo.
      </p>
    );
  }

  return (
    <div>
      {categories.length > 1 ? (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelected([])}
            className={`min-h-11 rounded-full px-4 py-2.5 text-[10px] tracking-[0.2em] uppercase border transition-colors ${
              selected.length === 0
                ? "bg-perez-terracota text-white border-perez-terracota"
                : "text-perez-marfil border-white/20 hover:border-perez-terracota"
            }`}
          >
            Todas
          </button>
          {categories.map((category) => {
            const active = selected.includes(category);
            return (
              <button
                key={category}
                type="button"
                onClick={() => toggle(category)}
                className={`min-h-11 rounded-full px-4 py-2.5 text-[10px] tracking-[0.2em] uppercase border transition-colors ${
                  active
                    ? "bg-perez-terracota text-white border-perez-terracota"
                    : "text-perez-marfil border-white/20 hover:border-perez-terracota"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      ) : null}

      {visible.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => {
            const soldOut = product.stock < 1;
            const tags = product.categorias ?? [];
            const cover = productFotos(product)[0];
            return (
              <article key={product.id}>
                <button
                  type="button"
                  onClick={() => setOpen(product)}
                  className="group block w-full overflow-hidden rounded-2xl bg-perez-noche text-left"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-black">
                    <img
                      src={cover}
                      alt={product.nombre}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4 pt-16">
                      {tags.length ? (
                        <p className="text-[10px] tracking-[0.2em] uppercase text-perez-terracota">
                          {tags.join(" · ")}
                        </p>
                      ) : null}
                      <div className="mt-1 flex items-end justify-between gap-3">
                        <h3 className="text-lg text-white">{product.nombre}</h3>
                        <p className="shrink-0 text-sm text-white">
                          {soldOut ? "Agotado" : formatPrice(product.precio)}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-perez-champagne">
          No hay prendas en esas categorías.
        </p>
      )}

      {open ? <ProductModal product={open} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}
