import { FC, ReactNode, useContext } from "react";
import style from "./Frame.module.css";
import { Link } from "react-router-dom";
import { LocateContext } from "../../../App";

interface IFrame {
  SvgComponent: ReactNode;
  title: string;
}

export const Frame: FC<IFrame> = ({ SvgComponent, title }) => {
  const { onLocateChange } = useContext(LocateContext);
  const onLink = () => {
    onLocateChange("/result");
  };
  return (
    <div onClick={onLink} className={style.frame}>
      <div className={style.svgƒ}>{SvgComponent}</div>
      <p>{title}</p>
    </div>
  );
};
