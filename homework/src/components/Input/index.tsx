import React, { ChangeEventHandler, useState } from "react";

interface Input {
  value: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  onClick?: () => void;
  type?: string;
}

export const Input = (props: Input) => {
  return (
    <input
      type={props.type}
      onClick={props.onClick}
      className={props.className}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};
