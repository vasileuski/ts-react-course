import React, { ChangeEventHandler, useState } from "react";
import { Input } from "../Input";
import style from "./styles.module.css";

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

  const onClick = () => {
    setResultDollar("");
    setResultBelki("");
  };

  return (
    <div className={style.converter}>
      <h1 className={style.converter__title}>Live Currency Converter</h1>
      <div className={style.converter__item}>
        <p className={style.converter__text}>Enter currency in $, USD</p>
        <Input
          value={resultDollar}
          onChange={handleDollarChange}
          className={style.converter__input}
          onClick={onClick}
        />
      </div>
      <div className="converter__item">
        <p className={style.converter__text}>Enter currency in BYN</p>
        <Input
          value={resultBelki}
          onChange={handleBelkiChange}
          className={style.converter__input}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
