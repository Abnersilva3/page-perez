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
      <Container className="flex flex-wrap mb-20 overflow-hidden lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div className="w-full max-w-md overflow-hidden rounded-2xl">
            <Image
              src={data.image}
              width={521}
              height={780}
              alt={data.title}
              className="object-cover w-full h-auto rounded-2xl"
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-semibold leading-snug tracking-tight text-perez-negro lg:leading-tight lg:text-4xl dark:text-perez-marfil">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-perez-oliva lg:text-xl xl:text-xl dark:text-perez-champagne">
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
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-perez-oliva rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-perez-marfil",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-perez-negro dark:text-perez-marfil">
            {props.title}
          </h4>
          <p className="mt-1 text-perez-oliva dark:text-perez-champagne/80">
            {props.children}
          </p>
        </div>
      </div>
  );
}
