import { Shop } from "@/components/Shop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo",
};

export default function CatalogoPage({
  searchParams,
}: {
  searchParams: { cat?: string };
}) {
  return (
    <section className="bg-perez-arena pb-16 pt-6 dark:bg-perez-negro sm:pb-20 sm:pt-8">
      <div className="container mx-auto px-5 sm:px-8">
        <p className="text-[10px] uppercase tracking-[0.28em] text-perez-oliva dark:text-perez-champagne">
          Boutique EST. 2020
        </p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-perez-negro dark:text-perez-marfil sm:text-4xl">
          Catálogo
        </h1>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-perez-oliva dark:text-perez-champagne">
          La línea PEREZ y otras firmas seleccionadas. Eliges, reservas y cierras por WhatsApp.
        </p>
        <div className="mt-7">
          <Shop initialCategory={searchParams.cat} />
        </div>
      </div>
    </section>
  );
}
