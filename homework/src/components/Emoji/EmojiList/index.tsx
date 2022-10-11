import React from "react";
import { EmojiRow } from "../EmojiRow";
import { emojis } from "../../../data/emojis";
import style from "../EmojiRow/style.module.css";
import { Input } from "../../Input";
import { useInput } from "../../../hooks/useInput";

export const EmojiList = () => {
  const text = useInput();

  const filteredEmojis = emojis.filter((item) => {
    if (
      item.title.toLowerCase().includes(text.value.toLowerCase()) ||
      item.keywords.toLowerCase().includes(text.value.toLowerCase())
    ) {
      return true;
    }

    return false;
  });

  return (
    <div className="container">
      <Input {...text} className={style.input__emoji} />
      <ul className={style.emoji__list}>
        {filteredEmojis.map((item, index) => (
          <EmojiRow emoji={item} key={index} />
        ))}
      </ul>
    </div>
  );
};
