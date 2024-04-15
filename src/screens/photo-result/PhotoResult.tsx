import style from "./PhotoResult.module.css";
import img1 from "../../assets/img2.png";
import { Button } from "../../ui/button/Button";
import { useContext } from "react";
import { LocateContext } from "../../App";

export const PhotoResult = () => {
  const { onLocateChange } = useContext(LocateContext);
  const onLink = () => {
    onLocateChange("/main-auth");
  };
  return (
    <div className={style.section}>
      <img src={img1} alt=""/>
      <Button
        onClick={onLink}
        styleType="auth"
        style={{ width: "100%", marginTop: 35, fontSize: 27, fontWeight: 900 }}
      >
        Save
      </Button>
      <Button
        onClick={onLink}
        title="More pics"
        style={{ margin: "auto", marginTop: 35, display: "flex", fontSize: 27 }}
        styleType="result"
      >
        More pics
      </Button>
    </div>
  );
};
