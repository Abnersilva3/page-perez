"use client";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { PerezLogo } from "./PerezLogo";
import { CartButton } from "./CartButton";
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
    <div className="sticky top-0 z-40 w-full border-b border-white/10 bg-perez-negro/90 backdrop-blur">
      <nav className="container relative flex flex-wrap items-center justify-between px-4 py-3 mx-auto lg:flex-nowrap xl:px-1">
        <Link href="/" aria-label="PEREZ inicio" className="shrink-0">
          <PerezLogo markOnly height={28} />
        </Link>

        <div className="flex items-center gap-2 ml-auto lg:ml-0 lg:order-2">
          <CartButton />
          <a
            href={visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden px-4 py-1.5 text-sm text-white bg-perez-terracota rounded-md lg:inline-flex hover:bg-perez-oliva transition-colors"
          >
            Escríbenos
          </a>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Abrir menú"
                className="flex h-11 w-11 items-center justify-center text-perez-marfil rounded-md lg:hidden hover:text-perez-terracota focus:outline-none"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-3 lg:hidden">
                {navigation.map((item) =>
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-11 px-4 py-3 -ml-4 text-perez-marfil rounded-md hover:text-perez-terracota"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="w-full min-h-11 px-4 py-3 -ml-4 text-perez-marfil rounded-md hover:text-perez-terracota"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex items-center justify-end flex-1 list-none">
            {navigation
              .filter((item) => !item.external)
              .map((menu) => (
                <li key={menu.href}>
                  <Link
                    href={menu.href}
                    className="inline-block px-4 py-1 text-sm text-perez-marfil no-underline rounded-md hover:text-perez-terracota"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
