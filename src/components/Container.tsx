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
      className={`container px-5 py-6 mx-auto sm:p-8 xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

