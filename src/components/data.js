import {
  SparklesIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  TagIcon,
  HeartIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";

import jeansImg from "../../public/img/benefit-jeans.jpg";
import teeImg from "../../public/img/benefit-tee.jpg";
import boutiqueDenim from "../../public/img/marcasmultiple/boutique-marcas-denim.jpg";

const benefitOne = {
  title: "La boutique",
  desc: "PEREZ es un espacio para elegir con calma. Curamos marcas y piezas que se sienten bien puestas: calidad, corte y un estilo que no grita.",
  image: boutiqueDenim,
  bullets: [
    {
      title: "Selección, no volumen",
      desc: "Pocas marcas, bien elegidas. Cada rack tiene un porqué.",
      icon: <ShoppingBagIcon />,
    },
    {
      title: "Asesoría en tienda",
      desc: "Te ayudamos a armar looks para el día a día o para una ocasión.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Varias marcas en un solo lugar",
      desc: "La línea original PEREZ y otras marcas que conviven con el mismo criterio.",
      icon: <RectangleStackIcon />,
    },
  ],
};

const benefitTwo = {
  title: "La marca propia",
  desc: "Además de las marcas que representamos, PEREZ tiene su propia línea: básicos y denim con identidad de casa, pensados para durar.",
  image: jeansImg,
  images: [jeansImg, teeImg],
  captions: ["Jean PEREZ", "Suéter PEREZ"],
  bullets: [
    {
      title: "Diseño de la casa",
      desc: "Piezas PEREZ EST. 2020: la firma original de la boutique.",
      icon: <TagIcon />,
    },
    {
      title: "Hechas con detalle",
      desc: "Materiales cuidados, siluetas contemporáneas y una etiqueta que se nota de cerca.",
      icon: <SparklesIcon />,
    },
    {
      title: "Para usar de verdad",
      desc: "Ropa de diario con carácter. Menos prendas, mejor elegidas.",
      icon: <HeartIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
