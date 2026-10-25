import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Lookbook } from "@/components/Lookbook";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        id="boutique"
        preTitle="La boutique"
        title="Un lugar para encontrar tu estilo"
      >
        PEREZ nació como boutique. Aquí no vienes a perderte entre mil opciones:
        vienes a encontrar ropa con criterio, de la marca propia y de otras
        firmas que elegimos a mano.
      </SectionTitle>

      <Benefits data={benefitOne} />

      <SectionTitle
        id="marca-propia"
        preTitle="Marca propia"
        title="PEREZ, la línea original"
      >
        Nuestra propia marca convive en el mismo espacio con el resto de la
        selección. Si buscas la firma de la casa, está aquí: denim, básicos y
        piezas de autor.
      </SectionTitle>

      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        id="marcas"
        preTitle="Lookbook"
        title="La boutique, de cerca"
      >
        Etiquetas, prendas y el detalle de cada pieza. Así se vive PEREZ:
        una casa con marca propia y un mix de marcas invitadas.
      </SectionTitle>

      <Lookbook />

      <SectionTitle
        preTitle="Clientes"
        title="Lo que se vive en tienda"
      >
        Quienes pasan por PEREZ no buscan una moda de temporada. Buscan
        alguien que los ayude a vestir mejor, con calma.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Preguntas frecuentes">
        Horarios, marcas y cómo funciona la boutique. Si no está tu duda,
        escríbenos desde el botón de contacto.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
