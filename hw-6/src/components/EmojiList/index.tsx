import React from "react";
import { EmojiRow } from "../EmojiRow";
import { emojis } from "../../data/emojis";
import style from "../EmojiRow/style.module.css";

export const EmojiList = () => {
  return (
    <ul className={style.emoji__list}>
      {emojis.map((emoji, index) => (
        <EmojiRow emoji={emoji} key={index} />
      ))}
    </ul>
  );
};
