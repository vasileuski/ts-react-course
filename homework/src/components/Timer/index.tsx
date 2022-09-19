import React, { useEffect, useState } from "react";
import style from "./style.module.css";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval: any = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className={style.timer}>
      <div className={style.timer__digits}>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!timerOn && time === 0 && (
          <button
            type="button"
            className={style.timer__start}
            onClick={() => {
              setTimerOn(true);
            }}
          >
            Start
          </button>
        )}
        {timerOn && (
          <button
            type="button"
            className={style.timer__stop}
            onClick={() => {
              setTimerOn(false);
            }}
          >
            Stop
          </button>
        )}
        {!timerOn && time !== 0 && (
          <button
            type="button"
            className={style.timer__resume}
            onClick={() => {
              setTimerOn(true);
            }}
          >
            Resume
          </button>
        )}
        {!timerOn && time > 0 && (
          <button
            type="button"
            className={style.timer__reset}
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};
