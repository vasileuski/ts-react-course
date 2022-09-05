import React, { useState } from "react";
import { Input } from "../Input";
import "./style.css";

export const Converter = () => {
  const [resultDollar, setResultDollar] = useState("");
  const [resultBelki, setResultBelki] = useState("");

  const handleChange = () => {};

  return (
    <div className="converter">
      <h1 className="converter__title">Live Currency Converter</h1>
      <div className="converter__item">
        <p className="converter__text">Enter currency in $, USD</p>
        <Input
          value={resultDollar}
          onChange={handleChange}
          className="converter__input"
        />
      </div>
      <div className="converter__item">
        <p className="converter__text">Enter currency in BYN</p>
        <Input
          value={resultBelki}
          onChange={handleChange}
          className="converter__input"
        />
      </div>
    </div>
  );
};
