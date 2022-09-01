import React, { ChangeEventHandler, useState } from "react";
import style from "./style.module.css";
import { emojis } from "../../data/emojis";

interface Input {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = (props: Input) => {
  return (
    <input
      className={style.input}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};
