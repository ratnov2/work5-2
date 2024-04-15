import { Button } from "../../ui/button/Button";
import style from "./Upload.module.css";
import img from "../../assets/img1.png";
import { GallerySvg } from "../../svg-components/GallerySvg";
import { Frame } from "./ui/Frame";
import { CameraSvg } from "../../svg-components/CameraSvg";
import img3 from "../../assets/img3.png";
import { motion } from "framer-motion";
import { FC, useContext } from "react";
import { LocateContext } from "../../App";

export const Upload: FC = () => {
  const { onLocateChange } = useContext(LocateContext);
  const onLink = () => {
    onLocateChange("/");
  };
  return (
    <div className={style.section}>
      <Button
        onClick={onLink}
        styleType="result"
        style={{ padding: "8px 21px" }}
      >
        <div className={style.button}>
          <div className={style.arrow} />
          Go Back
        </div>
      </Button>

      <div className={style.upload}>
        <motion.div className={style.imgList}>
          <motion.div
            className={style.wrapper}
            initial={{ translateX: 0 }}
            animate={{ translateX: [0, -315, 0, 0] }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          >
            <motion.img src={img} />
            <motion.img src={img3} />
          </motion.div>
        </motion.div>
        <div className={style.frameList}>
          {data.map((item) => (
            <Frame SvgComponent={item.svg} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    svg: <GallerySvg />,
    title: "Choose photo from gallery",
  },
  {
    svg: <CameraSvg />,
    title: "Take photo with camera",
  },
];
