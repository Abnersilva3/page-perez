import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div
        className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-perez-marfil bg-perez-noche px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl"
      >
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium tracking-wide lg:text-3xl">
            Pasa por la boutique
          </h2>
          <p className="mt-2 font-medium text-perez-champagne lg:text-xl">
            Marca propia y otras firmas, en un solo lugar. Te esperamos.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="#contacto"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-perez-negro bg-perez-champagne rounded-md px-7 lg:px-10 lg:py-5 hover:bg-perez-marfil transition-colors"
          >
            Escribir a la boutique
          </a>
        </div>
      </div>
    </Container>
  );
};
