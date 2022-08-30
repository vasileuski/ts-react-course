import { Card } from "../Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { ICard } from "../../models";
import style from "../Card/style.module.css";

export const Cards = () => {
  const [cards, setCards] = useState<ICard[]>();

  async function fetchCards() {
    const response = await axios.get<ICard[]>(
      "https://fakestoreapi.com/products"
    );
    setCards(response.data);
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <ul className={style.card__list}>
      {cards?.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </ul>
  );
};
