import React, { ChangeEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./styles.module.css";

export const LoginForm = () => {
  const usernameEmail = useInput();
  const passwordText = useInput();

  return (
    <div className={styles.login}>
      <div className="container">
        <div className={styles.login__head}>
          <Link to="/login" className={styles["login__head-button"]}>
            <h2 className={styles["login__head-text-active"]}>Login</h2>
          </Link>
          <p className={styles["login__head-line"]}>|</p>
          <Link to="/registration" className={styles["login__head-button"]}>
            <h2 className={styles["login__head-text"]}>Registration</h2>
          </Link>
        </div>
        <div className={styles.login__element}>
          <p className={styles["login__title"]}>Username / Email</p>
          <Input {...usernameEmail} className={styles["login__input"]} />
        </div>

        <div className={styles.login__element}>
          <p className={styles["login__title"]}>Password</p>
          <Input
            type="password"
            {...passwordText}
            className={styles["login__input"]}
          />
        </div>

        <Button type="primary" text="Login" onClick={() => {}} />
      </div>
    </div>
  );
};
