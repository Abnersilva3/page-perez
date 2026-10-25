"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Disclosure, Transition, TransitionChild } from "@headlessui/react";
import { PerezLogo } from "./PerezLogo";
import { CartButton } from "./CartButton";
import ThemeChanger from "./DarkSwitch";
import { WHATSAPP_NUMBER } from "@/config/tienda";

const visitUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

export const Navbar = () => {
  const navigation = [
    { label: "Inicio", href: "/" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Marca propia", href: "/#marca-propia" },
    { label: "FAQ", href: "/#faq" },
    { label: "Escríbenos", href: visitUrl, external: true },
  ];

  return (
    <Disclosure as="div" className="relative z-50">
      {({ open, close }) => (
        <>
          <BodyLock active={open} />
          <div className="sticky top-0 z-50 w-full border-b border-perez-negro/10 bg-perez-marfil/90 backdrop-blur dark:border-white/10 dark:bg-perez-negro/90">
          <nav className="container relative flex items-center justify-between px-5 py-3 mx-auto sm:px-8">
            <Link href="/" aria-label="PEREZ inicio" className="shrink-0">
              <PerezLogo markOnly height={28} />
            </Link>

            <div className="hidden text-center lg:flex lg:items-center">
              <ul className="flex items-center justify-end flex-1 list-none">
                {navigation
                  .filter((item) => !item.external)
                  .map((menu) => (
                    <li key={menu.href}>
                      <Link
                        href={menu.href}
                        className="inline-block px-4 py-1 text-sm text-perez-negro no-underline rounded-md hover:text-perez-terracota dark:text-perez-marfil"
                      >
                        {menu.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <ThemeChanger />
              <CartButton />
              <a
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden px-4 py-1.5 text-sm text-white bg-perez-terracota rounded-md lg:inline-flex hover:bg-perez-oliva transition-colors"
              >
                Escríbenos
              </a>
              <Disclosure.Button
                aria-label="Abrir menú"
                className={`h-11 w-11 items-center justify-center text-perez-negro rounded-md hover:text-perez-terracota focus:outline-none dark:text-perez-marfil ${
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
                  <PerezLogo markOnly height={28} />
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
                        className="flex min-h-12 items-center rounded-xl px-4 text-perez-negro hover:bg-perez-champagne/30 hover:text-perez-terracota dark:text-perez-marfil dark:hover:bg-white/5"
                      >
                        {item.label}
                      </Disclosure.Button>
                    ) : (
                      <Disclosure.Button
                        key={item.href}
                        as={Link}
                        href={item.href}
                        className="flex min-h-12 items-center rounded-xl px-4 text-perez-negro hover:bg-perez-champagne/30 hover:text-perez-terracota dark:text-perez-marfil dark:hover:bg-white/5"
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
