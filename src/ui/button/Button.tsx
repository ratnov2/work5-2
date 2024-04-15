import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: keyof typeof stylesList;
}

const stylesList = {
  auth: styles.auth,
  result: styles.result,
  "": "",
};

export const Button: FC<IButton> = ({ children, styleType = "", ...rest }) => (
  <button className={`${styles.default} ${stylesList[styleType]}`} {...rest}>
    {children}
  </button>
);
