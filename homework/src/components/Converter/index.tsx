import React, { ChangeEventHandler, useState } from "react";
import { Input } from "../Input";
import "./style.css";

export const Converter = () => {
  const [resultDollar, setResultDollar] = useState("");
  const [resultBelki, setResultBelki] = useState("");

  const handleDollarChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const valueDollar = event.target.value;
    if (!Number(valueDollar) && valueDollar) {
      return;
    }
    setResultDollar(valueDollar);
    setResultBelki("" + Number(valueDollar) * 2.54);
  };

  const handleBelkiChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const valueBelki = event.target.value;
    if (!Number(valueBelki) && valueBelki) {
      return;
    }
    setResultBelki(valueBelki);
    setResultDollar("" + Number(valueBelki) * 0.39);
  };

  return (
    <div className="converter">
      <h1 className="converter__title">Live Currency Converter</h1>
      <div className="converter__item">
        <p className="converter__text">Enter currency in $, USD</p>
        <Input
          value={resultDollar}
          onChange={handleDollarChange}
          className="converter__input"
        />
      </div>
      <div className="converter__item">
        <p className="converter__text">Enter currency in BYN</p>
        <Input
          value={resultBelki}
          onChange={handleBelkiChange}
          className="converter__input"
        />
      </div>
    </div>
  );
};
