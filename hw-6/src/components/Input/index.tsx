import React, { ChangeEventHandler, useState } from "react";
import style from "./style.module.css";
import { emojis } from "../../data/emojis";

interface Input {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = (props: Input) => {
  const [text, setText] = useState("");

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  const filteredEmojis = emojis.filter((emoji) => {
    return emoji.keywords.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <input
      className={style.input}
      value={text}
      placeholder={props.placeholder}
      onChange={handleOnChange}
    />
  );
};
