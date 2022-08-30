import React from "react";
import { IEmoji } from "../../models";
import style from "./style.module.css";

interface EmojiProps {
  emoji: IEmoji;
}

export const Emoji = ({ emoji }: EmojiProps) => {
  return (
    <li className={style.emoji__item} data-keywords={emoji.keywords}>
      <p className={style["emoji__item-symbol"]}>{emoji.symbol}</p>
      <p className={style["emoji__item-title"]}>{emoji.title}</p>
    </li>
  );
};
