import { Card } from "../Card";
import { cards } from "../../data/cards";

export const Cards = () => {
  return (
    <ul className="card__list">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </ul>
  );
};
