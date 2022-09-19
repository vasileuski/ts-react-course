import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const Time = () => {
  const [clock, setClock] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className={styles.clock}>{clock}</div>;
};
