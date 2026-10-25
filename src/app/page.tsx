import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <>
      <Hero />

      <SectionTitle
        id="boutique"
        preTitle="Boutique"
        title="Un lugar para encontrar tu estilo"
      >
        PEREZ es un local con criterio. Aquí está la línea original y otras
        firmas elegidas a mano: pocas prendas, bien puestas.
      </SectionTitle>
      <Benefits data={benefitOne} />

      <SectionTitle
        id="marca-propia"
        preTitle="Marca propia"
        title="PEREZ, la línea original"
      >
        Además de las marcas que representamos, la casa tiene su propia
        firma: denim, básicos y piezas para usar de verdad.
      </SectionTitle>
      <Benefits imgPos="right" data={benefitTwo} />

      <Cta />

      <SectionTitle preTitle="FAQ" title="Preguntas frecuentes">
        Horarios, marcas y cómo comprar desde la web.
      </SectionTitle>
      <Faq />
    </>
  );
}
