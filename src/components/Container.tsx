import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      id={props.id}
      className={`container px-5 py-6 mx-auto sm:px-8 sm:py-8 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

