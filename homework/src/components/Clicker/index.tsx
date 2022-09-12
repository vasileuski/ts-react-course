import React, { useState } from "react";
import style from "./styles.module.css";

export const Clicker = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={style.clicker}>
      {value < 10 ? (
        <button
          className={style.clicker__button}
          onClick={() => setValue(value + 1)}
        >
          +1
        </button>
      ) : null}
      {value > 0 ? (
        <button
          className={style.clicker__button}
          onClick={() => setValue(value - 1)}
        >
          -1
        </button>
      ) : null}
      <p className={style.clicker__value}>{value}</p>
    </div>
  );
};
