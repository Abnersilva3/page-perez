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
    <div className="mt-5">
      <p className="mb-2 text-[10px] tracking-[0.2em] uppercase text-perez-oliva dark:text-perez-champagne">
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
              className={`min-w-10 rounded-md border px-3 py-1.5 text-sm ${
                active
                  ? "border-perez-terracota bg-perez-terracota text-white"
                  : "border-perez-champagne/60 text-perez-noche hover:border-perez-terracota dark:text-perez-marfil dark:border-perez-champagne/30"
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
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
      <button
        aria-label="Cerrar"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl bg-perez-marfil text-perez-negro shadow-2xl dark:bg-perez-noche dark:text-perez-marfil sm:rounded-2xl lg:grid lg:grid-cols-[1.3fr_0.9fr]">
        <div className="relative flex h-[38vh] shrink-0 items-center justify-center bg-perez-negro sm:h-auto sm:min-h-[42vh] lg:min-h-[70vh]">
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
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {photos.map((foto, photoIndex) => (
                  <button
                    key={`${foto}-${photoIndex}`}
                    type="button"
                    aria-label={`Ver foto ${photoIndex + 1}`}
                    onClick={() => setIndex(photoIndex)}
                    className={`h-12 w-10 overflow-hidden rounded-md border ${
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

        <div className="flex min-h-0 flex-1 flex-col justify-between overflow-y-auto p-5 sm:p-6">
          <div>
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
                className="text-sm text-perez-oliva dark:text-perez-champagne"
              >
                Cerrar
              </button>
            </div>
            <h2 className="mt-3 text-3xl">{product.nombre}</h2>
            {product.descripcion ? (
              <p className="mt-3 text-perez-oliva dark:text-perez-champagne">
                {product.descripcion}
              </p>
            ) : null}
            <SizePicker
              tallas={tallas}
              value={talla}
              onChange={(size) => {
                setTalla(size);
                setNeedSize(false);
              }}
            />
          </div>

          <div className="mt-6 shrink-0">
            <p className="text-2xl font-medium">{formatPrice(product.precio)}</p>
            <p className="mt-1 text-sm text-perez-oliva dark:text-perez-champagne">
              {soldOut ? "Agotado" : `${product.stock} disponibles`}
            </p>
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
    return [...seen].sort((a, b) => a.localeCompare(b, "es"));
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
    return (
      <p className="text-center text-perez-oliva dark:text-perez-champagne">
        Cargando catálogo…
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-perez-terracota">{error}</p>
    );
  }

  if (!products.length) {
    return (
      <p className="text-center text-perez-oliva dark:text-perez-champagne">
        Aún no hay prendas. Agrégalas en el Google Sheet o en{" "}
        <code>data/productos.xlsx</code>.
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
            className={`rounded-full px-4 py-1.5 text-xs tracking-[0.18em] uppercase border transition-colors ${
              selected.length === 0
                ? "bg-perez-terracota text-white border-perez-terracota"
                : "text-perez-noche border-perez-champagne/60 hover:border-perez-terracota dark:text-perez-marfil dark:border-perez-champagne/30"
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
                className={`rounded-full px-4 py-1.5 text-xs tracking-[0.18em] uppercase border transition-colors ${
                  active
                    ? "bg-perez-terracota text-white border-perez-terracota"
                    : "text-perez-noche border-perez-champagne/60 hover:border-perez-terracota dark:text-perez-marfil dark:border-perez-champagne/30"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      ) : null}

      {visible.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => {
            const soldOut = product.stock < 1;
            const tags = product.categorias ?? [];
            const cover = productFotos(product)[0];
            return (
              <article
                key={product.id}
                className="overflow-hidden rounded-2xl bg-white/70 text-left dark:bg-perez-noche"
              >
                <button
                  type="button"
                  onClick={() => setOpen(product)}
                  className="block w-full text-left"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-perez-champagne/20">
                    <img
                      src={cover}
                      alt={product.nombre}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-5 pb-0">
                    {tags.length ? (
                      <div className="flex flex-wrap gap-x-2 gap-y-1">
                        {tags.map((category) => (
                          <p
                            key={category}
                            className="text-[10px] tracking-[0.2em] uppercase text-perez-terracota"
                          >
                            {category}
                          </p>
                        ))}
                      </div>
                    ) : null}
                    <h3 className="mt-1 text-xl">{product.nombre}</h3>
                    {product.descripcion ? (
                      <p className="mt-1 text-sm text-perez-oliva dark:text-perez-champagne">
                        {product.descripcion}
                      </p>
                    ) : null}
                    {product.tallas?.length ? (
                      <p className="mt-2 text-xs text-perez-oliva dark:text-perez-champagne">
                        Tallas {product.tallas.join(" · ")}
                      </p>
                    ) : null}
                  </div>
                </button>
                <div className="flex items-end justify-between p-5 pt-3">
                  <div>
                    <p className="font-medium">{formatPrice(product.precio)}</p>
                    <p className="text-xs text-perez-oliva dark:text-perez-champagne">
                      {soldOut ? "Agotado" : `${product.stock} disponibles`}
                    </p>
                  </div>
                  <button
                    disabled={soldOut}
                    onClick={() => setOpen(product)}
                    className="rounded-md bg-perez-terracota px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:bg-perez-oliva/40"
                  >
                    {soldOut ? "Agotado" : "Ver"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-perez-oliva dark:text-perez-champagne">
          No hay prendas en esas categorías.
        </p>
      )}

      {open ? <ProductModal product={open} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}
