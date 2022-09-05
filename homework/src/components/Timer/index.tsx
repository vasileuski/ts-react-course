import React, { useEffect, useState } from "react";
import style from "./style.module.css";

export const Timer = () => {
  const [timer, setTimer] = useState<number>(0);

  return <div>{timer}</div>;
};
