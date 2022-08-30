import React from "react";
import { Emoji } from "../EmojiRow";
import { emojis } from "../../data/emojis";
import style from "../EmojiRow/style.module.css";

export const Emojis = () => {
  return (
    <ul className={style.emoji__list}>
      {emojis.map((emoji, index) => (
        <Emoji emoji={emoji} key={index} />
      ))}
    </ul>
  );
};
