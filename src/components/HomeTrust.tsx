const items = [
  {
    title: "Envíos",
    desc: "Pedidos y reservas por WhatsApp.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.15">
        <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7" />
        <circle cx="7" cy="18" r="1.4" />
        <circle cx="18" cy="18" r="1.4" />
      </svg>
    ),
  },
  {
    title: "Boutique",
    desc: "Asesoría para armar tu look.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.15">
        <path d="M4 8h16v12H4zM8 8V6a4 4 0 0 1 8 0v2" />
      </svg>
    ),
  },
  {
    title: "Selección",
    desc: "Pocas prendas, bien elegidas.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.15">
        <circle cx="12" cy="12" r="8" />
        <path d="m8.5 12.5 2.2 2.2 4.8-5.2" />
      </svg>
    ),
  },
  {
    title: "Marca propia",
    desc: "La línea original PEREZ EST. 2020.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.15">
        <rect x="5" y="4" width="14" height="16" rx="1" />
        <path d="M9 9h6M9 13h6M9 17h3" />
      </svg>
    ),
  },
];

export function HomeTrust() {
  return (
    <section className="border-t border-perez-negro/[0.06] bg-perez-marfil dark:border-white/10 dark:bg-perez-negro">
      <div className="container mx-auto grid grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:gap-8 lg:py-16">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center px-1 text-center">
            <span className="text-perez-negro dark:text-perez-marfil">{item.icon}</span>
            <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-perez-negro dark:text-perez-marfil">
              {item.title}
            </p>
            <p className="mt-2 max-w-[12.5rem] text-[12px] leading-relaxed text-perez-oliva dark:text-perez-champagne">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
