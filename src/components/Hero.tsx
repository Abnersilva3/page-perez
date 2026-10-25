import Link from "next/link";
import { Container } from "@/components/Container";
import { HeroVideo } from "@/components/HeroVideo";
import { PerezLogo } from "@/components/PerezLogo";

export const Hero = () => {
  return (
    <Container className="flex flex-col items-center gap-10 lg:flex-row lg:flex-nowrap">
      <div className="w-full min-w-0 lg:w-[42%]">
        <h1 className="sr-only">PEREZ</h1>
        <span className="hidden lg:inline-flex">
          <PerezLogo height={72} />
        </span>
        <div className="lg:hidden">
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-perez-terracota">
            Boutique
          </p>
          <p className="mt-2 text-2xl font-semibold leading-snug tracking-tight text-perez-negro dark:text-perez-marfil">
            Menos ruido, mejor ropa.
          </p>
        </div>
        <p className="max-w-md mt-4 text-base leading-relaxed text-perez-oliva sm:text-lg lg:mt-6 dark:text-perez-champagne">
          La línea PEREZ y otras firmas seleccionadas, con un solo criterio.
        </p>
        <Link
          href="/catalogo"
          className="inline-flex w-full mt-6 px-6 py-3 text-base font-medium text-center justify-center text-white bg-perez-terracota rounded-md hover:bg-perez-oliva transition-colors sm:w-auto sm:mt-8"
        >
          Ver catálogo
        </Link>
      </div>
      <div className="w-full min-w-0 lg:w-7/12">
        <div className="w-full overflow-hidden rounded-2xl bg-perez-negro aspect-video">
          <HeroVideo />
        </div>
      </div>
    </Container>
  );
};
