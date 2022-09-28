import { ReactNode, useContext } from "react";
import styles from "./styles.module.css";
import { Context } from "../../App";

interface IProps {
  children: ReactNode;
}

export const Container = ({ children }: IProps) => {
  const { isDark } = useContext(Context);

  return (
    <div className={isDark ? styles.darkContainer : styles.container}>
      {children}
    </div>
  );
};
