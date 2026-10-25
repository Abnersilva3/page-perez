import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    images?: any[];
    captions?: string[];
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
      <Container className="flex flex-wrap mb-12 overflow-hidden lg:mb-20 lg:gap-10 lg:flex-nowrap">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div className="w-full max-w-xl">
            {data.images?.length === 2 ? (
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {data.images.map((photo, index) => {
                  const label = data.captions?.[index] || data.title;
                  return (
                    <figure key={photo.src || index} className="min-w-0">
                      <Image
                        src={photo}
                        alt={label}
                        className="object-cover w-full aspect-[2/3] rounded-2xl bg-perez-noche"
                        placeholder="blur"
                      />
                      {data.captions?.[index] ? (
                        <figcaption className="mt-2 text-xs tracking-[0.16em] uppercase text-perez-oliva/80 dark:text-perez-champagne/80">
                          {data.captions[index]}
                        </figcaption>
                      ) : null}
                    </figure>
                  );
                })}
              </div>
            ) : (
              <Image
                src={data.image}
                width={521}
                height={780}
                alt={data.title}
                className="object-cover w-full aspect-[4/5] sm:aspect-auto sm:h-auto max-h-[70vh] rounded-2xl"
                placeholder="blur"
                blurDataURL={data.image.src}
              />
            )}
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-2xl font-semibold leading-snug tracking-tight text-perez-negro sm:text-3xl lg:text-4xl dark:text-perez-marfil">
                {data.title}
              </h3>

              <p className="max-w-2xl py-3 text-base leading-normal text-perez-oliva sm:py-4 sm:text-lg lg:text-xl dark:text-perez-champagne">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
  );
};

function Benefit(props: any) {
  return (
      <div className="flex items-start mt-5 space-x-3 sm:mt-8">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-perez-oliva rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-perez-marfil",
          })}
        </div>
        <div>
          <h4 className="text-lg font-medium text-perez-negro sm:text-xl dark:text-perez-marfil">
            {props.title}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-perez-oliva sm:text-base dark:text-perez-champagne/80">
            {props.children}
          </p>
        </div>
      </div>
  );
}
