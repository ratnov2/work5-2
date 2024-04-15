import { FC, ReactNode, useState } from "react";
import style from "./GalleryLayout.module.css";
import { SingInButton } from "../ui/sing-in-button/SingInButton";
import { Link } from "react-router-dom";
import { MyPortal } from "../ui/portal/Portal";
import { Auth } from "../screens/auth/Auth";
import { AnimatePresence } from "framer-motion";

interface GalleryLayout {
  children: ReactNode;
  isAuth?: boolean;
}

export const GalleryLayout: FC<GalleryLayout> = ({
  children,
  isAuth = false,
}) => {
  const [showPortal, setShowPortal] = useState(false);
  const onSetPortal = (isShow: boolean) => {
    if (isShow) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    setShowPortal(isShow);
  };
  return (
    <div className={style.layout}>
      <div className={style.header}>
        <h1>OneAi</h1>
        {!isAuth && <SingInButton onClick={() => onSetPortal(true)} />}
      </div>
      {children}
      <div className={style.footer}>
        <h4>Get help at support@avgen.me</h4>
        <p>Copyright © 2024 Mook Ltd. All rights reserved.</p>
      </div>

      <MyPortal showPortal={showPortal}>
        <Auth setShowPortal={() => onSetPortal(false)} />
      </MyPortal>
    </div>
  );
};
