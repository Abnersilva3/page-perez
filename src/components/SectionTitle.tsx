import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  id?: string;
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      id={props.id}
      className={`flex w-full flex-col mt-4 scroll-mt-24 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.preTitle && (
        <div className="text-[10px] font-medium tracking-[0.2em] text-perez-terracota uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-2xl font-semibold leading-snug tracking-tight text-perez-marfil sm:text-3xl lg:leading-tight lg:text-4xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-3 text-base leading-normal text-perez-champagne sm:py-4 sm:text-lg lg:text-xl">
          {props.children}
        </p>
      )}
    </Container>
  );
}

