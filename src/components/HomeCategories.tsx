import Link from "next/link";

const categories = [
  {
    label: "Hombres",
    desc: "Estilo atemporal, para cada ocasión.",
    img: "/img/cat-hombres.jpg",
  },
  {
    label: "Mujeres",
    desc: "Elegancia en cada detalle.",
    img: "/img/cat-mujeres.jpg",
  },
  {
    label: "Kids",
    desc: "La misma esencia, para los más grandes.",
    img: "/img/cat-kids.jpg",
  },
  {
    label: "Accesorios",
    desc: "Complementa tu estilo.",
    img: "/img/cat-accesorios.jpg",
  },
];

export function HomeCategories() {
  return (
    <section className="bg-[#0E0C0B] py-8 text-[#F2EFE7] sm:py-9">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-5 xl:gap-7">
        {categories.map((item) => (
          <Link
            key={item.label}
            href={`/catalogo?cat=${encodeURIComponent(item.label)}`}
            className="group flex items-center gap-3.5 xl:gap-4"
          >
            <img
              src={item.img}
              alt={item.label}
              className="h-[128px] w-[100px] shrink-0 object-cover sm:h-[140px] sm:w-[110px] xl:h-[152px] xl:w-[120px]"
            />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white">
                {item.label}
              </p>
              <p className="mt-1.5 text-[12px] leading-snug text-perez-champagne">
                {item.desc}
              </p>
              <p className="mt-2.5 text-[10px] uppercase tracking-[0.18em] text-perez-champagne transition-colors group-hover:text-white">
                Comprar →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
