"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div id="faq" className="w-full max-w-2xl p-2 mx-auto rounded-2xl scroll-mt-24">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-3 text-left text-perez-marfil rounded-lg bg-perez-noche hover:bg-white/5 focus:outline-none sm:py-4 sm:text-lg">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-perez-terracota`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-perez-oliva dark:text-perez-champagne">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "¿PEREZ es solo una marca o también una tienda?",
    answer:
      "Las dos cosas. PEREZ es una boutique y, además, tiene su propia línea. En el local encuentras la marca original y otras marcas que seleccionamos.",
  },
  {
    question: "¿Qué otras marcas puedo encontrar?",
    answer:
      "El mix cambia según temporada. Siempre son firmas que conviven con el criterio de la casa: calidad, corte y un estilo que no necesita gritar. Pregunta en tienda por la selección actual.",
  },
  {
    question: "¿Puedo comprar solo la marca propia?",
    answer:
      "Sí. La línea PEREZ EST. 2020 está disponible en boutique. También puedes mezclarla con piezas de las otras marcas del local.",
  },
  {
    question: "¿Hacen envíos o solo venden en tienda?",
    answer:
      "Puedes visitarnos en la boutique o escribirnos por WhatsApp para disponibilidad, reservas y envíos.",
  },
  {
    question: "¿Cómo compro desde la web?",
    answer:
      "En Catálogo agregas prendas al carrito y pulsas Comprar por WhatsApp. Se abre un mensaje con tu pedido listo para enviar.",
  },
];
