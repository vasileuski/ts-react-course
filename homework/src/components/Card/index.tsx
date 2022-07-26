import React from "react";
import style from "./styles.module.css";
import { ICard } from "../../models";

interface CardProps {
  card: ICard;
}

export const Card = ({ card }: CardProps) => {
  return (
    <li className={style.card}>
      <img className={style.card__img} src={card.image} alt={card.title} />
      <h3 className={style.card__title}>{card.title}</h3>
      <p className={style.card__text}>{card.description}</p>
      <p className={style.card__date}>{card.price}$</p>
    </li>
  );
};
