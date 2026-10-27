"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Disclosure, Transition, TransitionChild } from "@headlessui/react";
import { PerezLogo } from "./PerezLogo";
import { CartButton } from "./CartButton";
import ThemeChanger from "./DarkSwitch";
import { WHATSAPP_NUMBER } from "@/config/tienda";

const visitUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopNav = [
    { label: "Hombres", href: "/catalogo?cat=Hombres" },
    { label: "Mujeres", href: "/catalogo?cat=Mujeres" },
    { label: "Kids", href: "/catalogo?cat=Kids" },
    { label: "Accesorios", href: "/catalogo?cat=Accesorios" },
  ];
  const navigation = [
    { label: "Inicio", href: "/" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Marca propia", href: "/#marca-propia" },
    { label: "FAQ", href: "/#faq" },
    { label: "Escríbenos", href: visitUrl, external: true },
  ];

  return (
    <>
    <p className="hidden bg-perez-negro px-5 py-1.5 text-center text-[9px] uppercase tracking-[0.22em] text-perez-marfil dark:bg-perez-marfil dark:text-perez-negro sm:block">
      Envíos y reservas por WhatsApp · Boutique EST. 2020
    </p>
    <Disclosure as="div" className="sticky top-0 z-50">
      {({ open, close }) => (
        <>
          <BodyLock active={open} />
          <div
            className={`w-full border-b transition-[background-color,backdrop-filter,border-color] duration-300 ${
              scrolled
                ? "border-perez-negro/[0.08] bg-perez-arena/55 backdrop-blur-2xl dark:border-white/10 dark:bg-perez-negro/55"
                : "border-perez-negro/[0.08] bg-perez-arena/95 dark:border-white/10 dark:bg-perez-negro/95"
            }`}
          >
          <nav className="relative flex w-full items-center py-3">
            <Link
              href="/"
              aria-label="PEREZ inicio"
              className="relative z-10 shrink-0 translate-y-[3px] pl-7 sm:pl-8"
            >
              <PerezLogo markOnly height={32} alt="" className="sm:hidden" />
              <PerezLogo markOnly height={40} alt="" className="hidden sm:inline-flex" />
            </Link>
            <ul className="hidden min-w-0 items-center list-none lg:ml-12 lg:flex">
              {desktopNav.map((menu) => (
                <li key={menu.label}>
                  <Link
                    href={menu.href}
                    className="inline-block px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-perez-negro no-underline transition-colors hover:text-perez-oliva dark:text-perez-marfil xl:px-3"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/"
              aria-label="PEREZ inicio"
              className="absolute left-1/2 -translate-x-1/2 font-sans text-[18px] font-medium uppercase tracking-[0.5em] text-perez-negro no-underline dark:text-perez-marfil sm:text-[22px]"
            >
              PEREZ
            </Link>

            <div className="ml-auto flex items-center justify-end gap-0 pr-5 sm:gap-2 sm:pr-8">
              <ThemeChanger />
              <CartButton />
              <a
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-perez-negro no-underline transition-colors lg:inline-flex hover:text-perez-oliva dark:text-perez-marfil"
              >
                Escríbenos
              </a>
              <Disclosure.Button
                aria-label="Abrir menú"
                className={`h-11 w-11 items-center justify-center rounded-md text-perez-negro hover:text-perez-oliva focus:outline-none dark:text-perez-marfil ${
                  open ? "hidden" : "flex lg:hidden"
                }`}
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </Disclosure.Button>
            </div>
          </nav>
          </div>

          <Transition show={open} as="div" className="lg:hidden">
            <TransitionChild
              as="div"
              enter="transition-opacity ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <button
                type="button"
                aria-label="Cerrar menú"
                className="fixed inset-0 z-40 bg-black/50"
                onClick={() => close()}
              />
            </TransitionChild>
            <TransitionChild
              as="div"
              className="fixed inset-y-0 left-0 z-50 w-[80%] max-w-sm"
              enter="transition-transform ease-out duration-300"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition-transform ease-in duration-200"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Disclosure.Panel
                static
                className="flex h-full flex-col bg-perez-marfil shadow-2xl dark:bg-[#1c1c1c]"
              >
                <div className="flex items-center justify-between border-b border-perez-negro/10 px-5 py-4 dark:border-white/10">
                  <Link
                    href="/"
                    onClick={() => close()}
                    aria-label="PEREZ inicio"
                    className="inline-flex items-center gap-2.5 no-underline"
                  >
                    <PerezLogo markOnly height={24} alt="" />
                    <span className="font-sans text-[15px] font-medium uppercase tracking-[0.4em] text-perez-negro dark:text-perez-marfil">
                      PEREZ
                    </span>
                  </Link>
                  <button
                    type="button"
                    aria-label="Cerrar menú"
                    onClick={() => close()}
                    className="flex h-11 w-11 items-center justify-center text-perez-negro dark:text-perez-marfil"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-1 flex-col p-3">
                  {navigation.map((item) =>
                    item.external ? (
                      <Disclosure.Button
                        key={item.href}
                        as="a"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-12 items-center px-4 text-[13px] uppercase tracking-[0.16em] text-perez-negro hover:bg-perez-champagne/25 hover:text-perez-oliva dark:text-perez-marfil dark:hover:bg-white/5"
                      >
                        {item.label}
                      </Disclosure.Button>
                    ) : (
                      <Disclosure.Button
                        key={item.href}
                        as={Link}
                        href={item.href}
                        className="flex min-h-12 items-center px-4 text-[13px] uppercase tracking-[0.16em] text-perez-negro hover:bg-perez-champagne/25 hover:text-perez-oliva dark:text-perez-marfil dark:hover:bg-white/5"
                      >
                        {item.label}
                      </Disclosure.Button>
                    )
                  )}
                </div>
              </Disclosure.Panel>
            </TransitionChild>
          </Transition>
        </>
      )}
    </Disclosure>
    </>
  );
};

function BodyLock({ active }: { active: boolean }) {
  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [active]);
  return null;
}
