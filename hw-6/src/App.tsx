import React from "react";
import "./index.css";
import { Card } from "./components/Card";
import { Clicker } from "./components/Clicker";
import { cards } from "./data/cards";

export function App() {
  return (
    <div className="container">
      <ul className="card__list">
        <Card card={cards[0]} />
        <Card card={cards[0]} />
        <Card card={cards[0]} />
        <Card card={cards[0]} />
        <Card card={cards[0]} />
        <Card card={cards[0]} />
        <Card card={cards[0]} />
      </ul>

      {/* <Clicker /> */}
    </div>
  );
}
