import Link from "next/link";
import { Container } from "@/components/Container";
import { PerezLogo } from "./PerezLogo";
import { WHATSAPP_NUMBER } from "@/config/tienda";

const visitUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

export function Footer() {
  return (
    <footer className="mt-10 border-t border-perez-negro/10 dark:border-white/10">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-12 pt-14 mx-auto md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" aria-label="PEREZ inicio">
              <PerezLogo height={56} />
            </Link>
            <p className="max-w-xs mt-5 text-sm leading-relaxed text-perez-oliva dark:text-perez-champagne">
              Boutique EST. 2020. Marca propia y otras firmas seleccionadas.
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-perez-negro dark:text-perez-marfil">
              Explorar
            </p>
            <div className="flex flex-col mt-4">
              <Link href="/" className="flex min-h-11 items-center text-perez-oliva hover:text-perez-terracota dark:text-perez-champagne">
                Inicio
              </Link>
              <Link
                href="/catalogo"
                className="flex min-h-11 items-center text-perez-oliva hover:text-perez-terracota dark:text-perez-champagne"
              >
                Catálogo
              </Link>
              <Link
                href="/#marca-propia"
                className="flex min-h-11 items-center text-perez-oliva hover:text-perez-terracota dark:text-perez-champagne"
              >
                Marca propia
              </Link>
              <Link
                href="/#faq"
                className="flex min-h-11 items-center text-perez-oliva hover:text-perez-terracota dark:text-perez-champagne"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-perez-negro dark:text-perez-marfil">
              Contacto
            </p>
            <div className="flex flex-col mt-4 gap-2 text-perez-oliva dark:text-perez-champagne">
              <p>Pedidos y visitas por WhatsApp.</p>
              <a
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-perez-terracota"
              >
                Escribir por WhatsApp
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-perez-terracota"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-perez-negro dark:text-perez-marfil">
              Comprar
            </p>
            <p className="mt-4 text-sm text-perez-oliva dark:text-perez-champagne">
              Elige en el catálogo y cierra el pedido por chat.
            </p>
            <Link
              href="/catalogo"
              className="inline-flex mt-5 px-4 py-2 text-sm text-white bg-perez-terracota rounded-md hover:bg-perez-oliva transition-colors"
            >
              Ver catálogo
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-8 mt-12 text-sm border-t border-perez-negro/10 text-perez-oliva/80 dark:border-white/10 dark:text-perez-champagne/80 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} PEREZ · EST. 2020</span>
          <span>Envíos y reservas por WhatsApp</span>
        </div>
      </Container>
    </footer>
  );
}
