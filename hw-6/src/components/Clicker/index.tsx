import React, { useState } from "react";
import style from "./style.module.css";

export const Clicker = () => {
  const [value, setValue] = useState(0);

  const valueClassName =
    value <= 10 ? style.clicker__value : style.clicker__value__gray;

  return (
    <div className={style.clicker}>
      <button
        className={style.clicker__button}
        onClick={() => setValue(value + 1)}
      >
        +1
      </button>
      <button
        className={style.clicker__button}
        onClick={() => setValue(value - 1)}
      >
        -1
      </button>
      <p className={valueClassName}>{value}</p>
    </div>
  );
};
