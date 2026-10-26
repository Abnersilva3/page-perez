import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-perez-arena dark:bg-perez-negro">
      <div className="container relative mx-auto px-5 pb-8 pt-3 sm:px-8 sm:pb-10 lg:pt-4">
        <p className="max-w-[9.5rem] text-[10px] font-medium uppercase leading-[1.85] tracking-[0.28em] text-perez-oliva dark:text-perez-champagne">
          Elegancia que te acompaña siempre.
        </p>
        <span className="mt-2 block h-px w-10 bg-perez-negro/70 dark:bg-perez-marfil" />

        <div className="relative mt-0 h-[400px] sm:h-[500px] lg:h-[540px]">
          <h1 className="pointer-events-none absolute left-1/2 top-[48%] z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-sans text-[15vw] font-medium uppercase leading-none tracking-[0.28em] text-perez-negro dark:text-perez-marfil sm:top-[50%] sm:-mr-[0.32em] sm:text-[16vw] sm:tracking-[0.32em] lg:text-[16.5vw]">
            PEREZ
          </h1>

          <div className="pointer-events-none absolute inset-x-0 bottom-11 z-10 flex justify-center sm:bottom-10">
            <Image
              src="/img/muchacho.PNG"
              alt=""
              width={1024}
              height={1536}
              priority
              className="h-[320px] w-auto max-w-none translate-x-[10%] object-contain object-bottom sm:h-[450px] sm:translate-x-0 lg:h-[495px]"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-3">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/catalogo"
                className="inline-flex h-9 shrink-0 items-center justify-center bg-perez-negro px-5 text-[10px] uppercase tracking-[0.18em] text-white hover:bg-perez-oliva dark:bg-perez-marfil dark:text-perez-negro"
              >
                Comprar ahora
              </Link>
              <Link
                href="/catalogo"
                className="inline-flex h-9 items-center text-[10px] uppercase tracking-[0.16em] text-perez-negro hover:text-perez-oliva dark:text-perez-marfil"
              >
                Explorar nueva colección →
              </Link>
            </div>
            <p className="hidden text-right text-[10px] uppercase leading-[1.7] tracking-[0.26em] text-perez-oliva dark:text-perez-champagne sm:block">
              Nueva
              <span className="block">colección</span>
              <span className="block">2026</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
