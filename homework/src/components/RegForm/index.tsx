import React, { ChangeEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./styles.module.css";

export const RegForm = () => {
  const userName = useInput();
  const email = useInput();
  const password = useInput();
  const confirmPassword = useInput();

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
          <Input {...userName} className={styles["regform__input"]} />
        </div>
        <div className={styles.regform__element}>
          <p className={styles["regform__title"]}>Email</p>
          <Input {...email} className={styles["regform__input"]} />
        </div>
        <div className={styles.regform__element}>
          <p className={styles["regform__title"]}>Password</p>
          <Input
            type="password"
            {...password}
            className={styles["regform__input"]}
          />
        </div>
        <div className={styles.regform__element}>
          <p className={styles["regform__title"]}>Confirm password</p>
          <Input
            type="password"
            {...confirmPassword}
            className={styles["regform__input"]}
          />
        </div>
        <Button type="primary" text="Login" onClick={() => {}} />
      </div>
    </div>
  );
};
