import React, { ChangeEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./styles.module.css";

export const LoginForm = () => {
  const [usernameEmailText, setUsernameEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const usernameEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUsernameEmailText(event.target.value);
  };

  const passwordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPasswordText(event.target.value);
  };

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
          <Input
            value={usernameEmailText}
            onChange={usernameEmailChange}
            className={styles["login__input"]}
          />
        </div>

        <div className={styles.login__element}>
          <p className={styles["login__title"]}>Password</p>
          <Input
            type="password"
            value={passwordText}
            onChange={passwordChange}
            className={styles["login__input"]}
          />
        </div>

        <Button type="primary" text="Login" onClick={() => {}} />
      </div>
    </div>
  );
};
