import Image from "next/image";
import Link from "next/link";

export function HomeCollection() {
  return (
    <section
      id="marca-propia"
      className="relative min-h-[440px] scroll-mt-24 overflow-hidden text-white lg:min-h-[520px]"
    >
      <Image
        src="/img/nuevafoto1.PNG"
        alt="Nueva colección PEREZ"
        fill
        sizes="100vw"
        className="object-cover object-[center_18%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

      <div className="container relative z-10 mx-auto flex min-h-[440px] items-center justify-between px-5 py-14 sm:px-8 lg:min-h-[520px]">
        <div className="max-w-md">
          <p className="text-[10px] uppercase tracking-[0.32em] text-white/75">
            Temporada 2026
          </p>
          <h2 className="mt-4 font-sans text-[2.4rem] font-medium uppercase leading-[0.92] tracking-[0.04em] sm:text-5xl lg:text-[3.35rem]">
            Nueva
            <br />
            colección
          </h2>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/88">
            Prendas esenciales, para hombres que saben elegir.
          </p>
          <Link
            href="/catalogo"
            className="mt-8 inline-flex h-9 items-center bg-perez-negro px-5 text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-perez-negro"
          >
            Ver colección
          </Link>
        </div>

        <div className="hidden text-right sm:block">
          <Image
            src="/img/mark-perez-light.png"
            alt=""
            width={40}
            height={26}
            className="ml-auto opacity-90"
          />
          <p className="mt-2 text-[10px] uppercase tracking-[0.32em]">
            PEREZ
            <span className="mt-0.5 block tracking-[0.36em] text-white/70">
              Est. 2020
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
