import React, { ChangeEventHandler, useState } from "react";
import { EmojiRow } from "../EmojiRow";
import { emojis } from "../../../data/emojis";
import style from "../EmojiRow/style.module.css";
import { Input } from "../../Input";

export const EmojiList = () => {
  const [text, setText] = useState("");

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  const filteredEmojis = emojis.filter((item) => {
    if (
      item.title.toLowerCase().includes(text.toLowerCase()) ||
      item.keywords.toLowerCase().includes(text.toLowerCase())
    ) {
      return true;
    }

    return false;
  });

  return (
    <div className="container">
      <Input
        value={text}
        onChange={handleOnChange}
        className={style.input__emoji}
      />
      <ul className={style.emoji__list}>
        {filteredEmojis.map((item, index) => (
          <EmojiRow emoji={item} key={index} />
        ))}
      </ul>
    </div>
  );
};
