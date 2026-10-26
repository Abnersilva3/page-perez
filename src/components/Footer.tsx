import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/config/tienda";

const visitUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

export function Footer() {
  return (
    <footer className="bg-perez-negro text-perez-marfil">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-5 py-9 sm:flex-row sm:px-8">
        <p className="text-center text-[11px] uppercase tracking-[0.28em] sm:text-left">
          Hecho para quienes saben elegir
        </p>
        <Link href="/" aria-label="PEREZ inicio" className="flex items-center gap-3">
          <Image
            src="/img/mark-perez-light.png"
            alt="PEREZ"
            width={42}
            height={28}
            className="h-7 w-auto"
          />
          <span className="text-sm tracking-[0.32em]">
            PEREZ
            <span className="mt-0.5 block text-[10px] tracking-[0.28em] text-perez-champagne">
              EST. 2020
            </span>
          </span>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 border-t border-white/10 px-5 py-3.5 text-[11px] tracking-wide text-perez-champagne sm:flex-row sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} PEREZ · EST. 2020</span>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 uppercase tracking-[0.16em]">
          <Link href="/catalogo" className="transition-colors hover:text-white">
            Catálogo
          </Link>
          <Link href="/#marca-propia" className="transition-colors hover:text-white">
            Marca propia
          </Link>
          <Link href="/#faq" className="transition-colors hover:text-white">
            FAQ
          </Link>
          <a
            href={visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
