import { Container } from "@/components/Container";
import { HeroVideo } from "@/components/HeroVideo";

const values = [
  "Boutique",
  "Marca propia",
  "Otras marcas",
  "Asesoría",
  "Selección",
  "Desde 2020",
];

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-col items-center gap-8 lg:flex-row lg:flex-nowrap">
        <div className="flex items-center w-full min-w-0 lg:w-[42%]">
          <div className="max-w-xl mb-6">
            <p className="mb-3 text-xs font-medium tracking-[0.35em] uppercase text-perez-oliva dark:text-perez-champagne">
              Boutique · EST. 2020
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-[0.18em] text-perez-negro lg:text-6xl dark:text-perez-marfil">
              PEREZ
            </h1>
            <p className="py-5 text-lg leading-relaxed text-perez-oliva lg:text-xl dark:text-perez-champagne">
              Una boutique con marca propia. Aquí encuentras la línea original
              PEREZ y otras marcas seleccionadas, con el mismo criterio: menos
              ruido, mejor ropa.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#boutique"
                className="px-6 py-3 text-base font-medium tracking-wide text-center text-white bg-perez-terracota rounded-md hover:bg-perez-oliva transition-colors"
              >
                Conocer la boutique
              </a>
              <a
                href="#marca-propia"
                className="text-perez-noche dark:text-perez-champagne"
              >
                Ver marca propia
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full min-w-0 lg:w-7/12">
          <div className="w-full overflow-hidden rounded-2xl shadow-2xl aspect-video bg-perez-negro">
            <HeroVideo />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xs tracking-[0.25em] text-center uppercase text-perez-oliva dark:text-perez-champagne">
            Lo que encuentras aquí
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {values.map((value) => (
              <div
                key={value}
                className="px-4 py-1.5 text-xs tracking-[0.18em] uppercase text-perez-noche border border-perez-champagne/60 rounded-full dark:text-perez-marfil dark:border-perez-champagne/30"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
