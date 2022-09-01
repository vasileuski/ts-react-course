import React from "react";
import style from "./style.module.css";

interface IProps {
  text: string;
}

export const Title = (props: IProps) => {
  return <button className={style.title}>{props.text}</button>;
};
