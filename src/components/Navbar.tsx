"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import { PerezLogo } from "./PerezLogo";
import { CartButton } from "./CartButton";

export const Navbar = () => {
  const navigation = [
    { label: "Boutique", href: "/#boutique" },
    { label: "Marca propia", href: "/#marca-propia" },
    { label: "Marcas", href: "/#marcas" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Lookbook", href: "/#lookbook" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <div className="w-full border-b border-perez-champagne/30 bg-perez-marfil/90 backdrop-blur dark:border-white/10 dark:bg-perez-negro/90">
      <nav className="container relative flex flex-wrap items-center justify-between px-4 py-2 mx-auto lg:flex-nowrap xl:px-1">
        <Link href="/" aria-label="PEREZ inicio" className="shrink-0">
          <PerezLogo markOnly height={28} />
        </Link>

        <div className="flex items-center gap-2 ml-auto lg:ml-0 lg:order-2">
          <CartButton />
          <ThemeChanger />
          <Link
            href="/#contacto"
            className="hidden px-4 py-1.5 text-sm text-white bg-perez-terracota rounded-md lg:inline-flex tracking-wide hover:bg-perez-oliva transition-colors"
          >
            Visítanos
          </Link>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Abrir menú"
                className="px-2 py-1 text-perez-oliva rounded-md lg:hidden hover:text-perez-terracota focus:outline-none dark:text-perez-marfil"
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
                <>
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="w-full px-4 py-2 -ml-4 text-perez-oliva rounded-md dark:text-perez-marfil hover:text-perez-terracota"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/#contacto"
                    className="w-full px-4 py-2 mt-2 text-sm text-center text-white bg-perez-terracota rounded-md"
                  >
                    Visítanos
                  </Link>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex items-center justify-end flex-1 list-none">
            {navigation.map((menu) => (
              <li className="nav__item" key={menu.href}>
                <Link
                  href={menu.href}
                  className="inline-block px-3 py-1 text-sm tracking-wide text-perez-noche no-underline rounded-md dark:text-perez-marfil hover:text-perez-terracota"
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
