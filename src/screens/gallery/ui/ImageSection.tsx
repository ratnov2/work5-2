import { FC, useContext } from "react";
import style from "./ImageSection.module.css";
import { Link } from "react-router-dom";
import { LocateContext } from "../../../App";

interface IImageSection {
  src: string;
  title: string;
  isEnd: boolean;
}

export const ImageSection: FC<IImageSection> = ({ src, title, isEnd }) => {
  const { onLocateChange } = useContext(LocateContext);
  const onLink = () => {
    onLocateChange("/upload");
  };
  return (
    <div className={style.section} style={isEnd ? { marginBottom: 0 } : {}}>
      <button onClick={onLink}>
        <img src={src} alt={title} />
      </button>
      <h2 className={style.title}>{title}</h2>
    </div>
  );
};
