import React, { ChangeEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./styles.module.css";

export const RegForm = () => {
  const [usernameText, setUsernameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [confirmPasswordText, setConfirmPasswordText] = useState("");

  const usernameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUsernameText(event.target.value);
  };

  const emailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmailText(event.target.value);
  };

  const passwordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPasswordText(event.target.value);
  };

  const confirmPasswordChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setConfirmPasswordText(event.target.value);
  };

  return (
    <div className={styles.regform}>
      <div className="container">
        <div className={styles.regform__head}>
          <Link to="/login" className={styles["regform__head-button"]}>
            <h2 className={styles["regform__head-text"]}>Login</h2>
          </Link>
          <p className={styles["regform__head-line"]}>|</p>
          <Link to="/registration" className={styles["regform__head-button"]}>
            <h2 className={styles["regform__head-text-active"]}>
              Registration
            </h2>
          </Link>
        </div>

        <div className={styles.regform__element}>
          <p className={styles["regform__title"]}>Username</p>
          <Input
            value={usernameText}
            onChange={usernameChange}
            className={styles["regform__input"]}
          />
        </div>
        <div className={styles.regform__element}>
          <p className={styles["regform__title"]}>Email</p>
          <Input
            value={emailText}
            onChange={emailChange}
            className={styles["regform__input"]}
          />
        </div>
        <div className={styles.regform__element}>
          <p className={styles["regform__title"]}>Password</p>
          <Input
            type="password"
            value={passwordText}
            onChange={passwordChange}
            className={styles["regform__input"]}
          />
        </div>
        <div className={styles.regform__element}>
          <p className={styles["regform__title"]}>Confirm password</p>
          <Input
            type="password"
            value={confirmPasswordText}
            onChange={confirmPasswordChange}
            className={styles["regform__input"]}
          />
        </div>
        <Button type="primary" text="Login" onClick={() => {}} />
      </div>
    </div>
  );
};
