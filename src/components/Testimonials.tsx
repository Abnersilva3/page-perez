import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-white/70 px-14 rounded-2xl py-14 dark:bg-perez-noche">
            <p className="text-2xl leading-normal ">
              Entré por la <Mark>marca propia</Mark>
              y salí con piezas de otras firmas que no conocía. Eso es una
              buena boutique.
            </p>

            <Avatar
              image={userOneImg}
              name="Camila Restrepo"
              title="Cliente frecuente"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-white/70 px-14 rounded-2xl py-14 dark:bg-perez-noche">
            <p className="text-2xl leading-normal ">
              Me asesoraron de verdad. No es un local de <Mark>todo</Mark>
              : es un lugar con criterio.
            </p>

            <Avatar
              image={userTwoImg}
              name="Andrés Molina"
              title="Cliente"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-white/70 px-14 rounded-2xl py-14 dark:bg-perez-noche">
            <p className="text-2xl leading-normal ">
              Vuelvo por el mix: PEREZ y <Mark>otras marcas</Mark>
              que no encuentro en cualquier parte.
            </p>

            <Avatar
              image={userThreeImg}
              name="Valentina Cruz"
              title="Cliente"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-perez-oliva dark:text-perez-champagne">
          {props.title}
        </div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-perez-noche bg-perez-champagne rounded-md ring-perez-champagne ring-4 dark:ring-perez-oliva dark:bg-perez-oliva dark:text-perez-marfil">
        {props.children}
      </mark>{" "}
    </>
  );
}
