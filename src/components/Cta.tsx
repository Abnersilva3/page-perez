import Link from "next/link";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-perez-marfil bg-perez-noche px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            El catálogo está listo
          </h2>
          <p className="mt-2 text-perez-champagne lg:text-lg">
            Elige en la web y cierra el pedido por WhatsApp.
          </p>
        </div>
        <Link
          href="/catalogo"
          className="inline-block w-full py-3 text-lg font-medium text-center text-perez-negro bg-perez-champagne rounded-md px-7 lg:w-auto lg:px-10 hover:bg-perez-marfil transition-colors"
        >
          Ver catálogo
        </Link>
      </div>
    </Container>
  );
};
