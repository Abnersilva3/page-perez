"use client";
import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

export const Faq = () => {
  return (
    <section className="bg-perez-arena py-16 dark:bg-perez-negro sm:py-20">
      <div className="container mx-auto px-5 sm:px-8">
        <p className="text-center text-[10px] uppercase tracking-[0.28em] text-perez-oliva">
          FAQ
        </p>
        <h2 className="mt-3 text-center text-2xl font-medium tracking-tight text-perez-negro dark:text-perez-marfil sm:text-3xl">
          Preguntas frecuentes
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-perez-oliva dark:text-perez-champagne">
          Horarios, marcas y cómo comprar desde la web.
        </p>

        <div id="faq" className="mx-auto mt-10 max-w-2xl scroll-mt-24">
          {faqdata.map((item) => (
            <Disclosure key={item.question} as="div" className="border-b border-perez-negro/10 dark:border-white/10">
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full items-center justify-between gap-6 py-4 text-left text-[15px] text-perez-negro transition-colors hover:text-perez-oliva focus:outline-none dark:text-perez-marfil sm:py-5">
                    <span>{item.question}</span>
                    <span
                      className={`text-perez-oliva transition-transform ${open ? "rotate-45" : ""}`}
                      aria-hidden
                    >
                      +
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="pb-5 text-sm leading-relaxed text-perez-oliva dark:text-perez-champagne">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
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
