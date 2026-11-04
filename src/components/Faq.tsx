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
          Marcas, envíos y cómo comprar desde la web.
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
      "PEREZ es una boutique multimarca que reúne una cuidadosa selección de prendas, calzado y accesorios de diferentes marcas. Además, contamos con nuestra propia línea de ropa, diseñada bajo una identidad que refleja elegancia, autenticidad y atención al detalle. En PEREZ encontrarás variedad, estilo y una propuesta de moda con identidad propia.",
  },
  {
    question: "¿Qué otras marcas puedo encontrar en PEREZ?",
    answer:
      "Nuestra selección de marcas se renueva según la temporada, priorizando siempre la calidad, el diseño y el estilo. Descubre las referencias disponibles en nuestra boutique o catálogo online.",
  },
  {
    question: "¿Puedo comprar únicamente productos de la marca PEREZ?",
    answer:
      "Por supuesto. Nuestra línea exclusiva PEREZ EST. 2020 está disponible en nuestra boutique. También puedes combinar nuestras colecciones con una selección de prendas y accesorios de otras marcas.",
  },
  {
    question: "¿Realizan envíos o solo venden en tienda?",
    answer:
      "Puedes comprar directamente en nuestra boutique o contactarnos por WhatsApp para consultar disponibilidad, reservar productos y coordinar envíos de manera fácil y segura.",
  },
  {
    question: "¿Cómo puedo comprar desde la página web?",
    answer:
      "Explora nuestro catálogo, selecciona tus productos favoritos y agrégalos al carrito. Luego, haz clic en «Comprar por WhatsApp» para enviarnos tu pedido y recibir atención personalizada.",
  },
];
