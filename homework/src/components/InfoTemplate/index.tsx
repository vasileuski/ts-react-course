import React from "react";
import { Link } from "react-router-dom";
import { IInfo } from "../../models";
import { Button } from "../Button";
import style from "./styles.module.css";

export const InfoTemplate = (page: IInfo) => {
  return (
    <div className={style.info}>
      <div className="container">
        <h2 className={style.info__title}>{page.title}</h2>
        <p className={style.info__text}>{page.text}</p>
        <Link to={page.link}>
          <Button text={page.text_button} type="primary" onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
};
