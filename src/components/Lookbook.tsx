import Image from "next/image";
import { Container } from "@/components/Container";
import lookbook from "../../public/img/lookbook.jpg";
import jeans from "../../public/img/benefit-jeans.jpg";
import cards from "../../public/img/look-cards.jpg";

export function Lookbook() {
  return (
    <Container>
      <div
        id="lookbook"
        className="grid w-full max-w-5xl grid-cols-1 gap-4 mx-auto overflow-hidden md:grid-cols-3"
      >
        <Image
          src={lookbook}
          alt="Aplicaciones de marca PEREZ"
          className="object-cover w-full h-64 rounded-2xl md:col-span-2 md:h-[420px]"
          placeholder="blur"
        />
        <Image
          src={jeans}
          alt="Etiqueta PEREZ en denim"
          className="object-cover w-full h-64 rounded-2xl md:h-[420px]"
          placeholder="blur"
        />
        <Image
          src={cards}
          alt="Tarjeta PEREZ"
          className="object-cover w-full h-56 rounded-2xl md:col-span-3 md:h-72"
          placeholder="blur"
        />
      </div>
    </Container>
  );
}
