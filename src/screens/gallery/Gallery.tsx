import img from "../../assets/img1.png";
import style from "./Gallery.module.css";
import { GalleryLayout } from "../../layout/GalleryLayout";
import { ImageSection } from "./ui/ImageSection";
import { FC } from "react";

export const Gallery: FC<{ isAuth?: boolean }> = ({ isAuth = false }) => {
  return (
    <GalleryLayout isAuth={isAuth}>
      <div className={style.section}>
        {data.map((item, index) => {
          return (
            <ImageSection
              src={item.src}
              title={item.title}
              key={index}
              isEnd={index === data.length - 1}
            />
          );
        })}
      </div>
    </GalleryLayout>
  );
};

const data = [
  { src: img, title: "logo1" },
  { src: img, title: "logo2" },
];
