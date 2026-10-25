import Link from "next/link";
import { Container } from "@/components/Container";
import { HeroVideo } from "@/components/HeroVideo";
import { PerezLogo } from "@/components/PerezLogo";

export const Hero = () => {
  return (
    <Container className="flex flex-col items-center gap-10 lg:flex-row lg:flex-nowrap">
      <div className="w-full min-w-0 lg:w-[42%]">
        <h1 className="sr-only">PEREZ</h1>
        <PerezLogo height={56} className="lg:hidden" />
        <span className="hidden lg:inline-flex">
          <PerezLogo height={72} />
        </span>
        <p className="max-w-md mt-5 text-base leading-relaxed text-perez-champagne sm:mt-6 sm:text-lg">
          Boutique con marca propia. La línea PEREZ y otras firmas
          seleccionadas, con un solo criterio: menos ruido, mejor ropa.
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
