import React from "react";
import style from "./style.module.css";

interface User {
  username: string;
}

export const User = (props: User) => {
  const fullName = props.username.split(" ");
  const firstLastName = fullName[0][0].concat(fullName[1][0]);

  return (
    <div className={style.card}>
      <p className={style.card__letters}>{firstLastName}</p>
      <p className={style.card__fullname}>{props.username}</p>
    </div>
  );
};
