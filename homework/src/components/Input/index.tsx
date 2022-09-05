import React, { ChangeEventHandler, useState } from "react";

interface Input {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export const Input = (props: Input) => {
  return (
    <input
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};
