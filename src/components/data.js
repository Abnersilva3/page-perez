import {
  SparklesIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  TagIcon,
  HeartIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";

import collectionImg from "../../public/img/nuevafoto1.PNG";
import hombresImg from "../../public/img/cat-hombres.jpg";

const benefitOne = {
  title: "La boutique",
  desc: "PEREZ es una boutique multimarca que reúne una cuidadosa selección de prendas, calzado y accesorios de diferentes marcas. Además, contamos con nuestra propia línea de ropa, diseñada bajo una identidad que refleja elegancia, autenticidad y atención al detalle.",
  image: collectionImg,
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
  image: hombresImg,
  images: [hombresImg, collectionImg],
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
