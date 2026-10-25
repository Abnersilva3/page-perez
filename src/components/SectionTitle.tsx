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
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.preTitle && (
        <div className="text-sm font-medium tracking-[0.25em] text-perez-terracota uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-semibold leading-snug tracking-tight text-perez-negro lg:leading-tight lg:text-4xl dark:text-perez-marfil">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-perez-oliva lg:text-xl xl:text-xl dark:text-perez-champagne">
          {props.children}
        </p>
      )}
    </Container>
  );
}

