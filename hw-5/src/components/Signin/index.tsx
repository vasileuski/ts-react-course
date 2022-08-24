import React from "react";
import style from "./style.module.css";

interface IProps {
  text: string;
}

export const Signin = (props: IProps) => {
  return <button className={style.signin}>{props.text}</button>;
};
