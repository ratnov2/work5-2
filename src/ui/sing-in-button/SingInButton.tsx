import { FC } from "react";
import style from "./SignInButton.module.css";

interface ISignInButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SingInButton: FC<ISignInButton> = ({ ...rest }) => {
  return (
    <button className={style.button} {...rest}>
      Sign in
    </button>
  );
};
