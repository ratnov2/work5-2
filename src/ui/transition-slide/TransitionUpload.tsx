import React, { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Location, useLocation } from "react-router-dom";

export const TransitionUpload: FC<{
  children: ReactNode;
  locate: {
    prevLocate: string | null;
    currLocate: string | null;
  };
}> = ({ children, locate }) => {
  //console.log( locate.currLocate === "upload" && locate.prevLocate === "/");

  return (
    <motion.div
      className="page"
      initial={
        locate.currLocate === "/upload" &&
        (locate.prevLocate === "/" || locate.prevLocate === "/main-auth")
          ? { translateX: "100%" }
          : {}
      }
      animate={
        locate.currLocate === "/upload" &&
        (locate.prevLocate === "/" || locate.prevLocate === "/main-auth")
          ? { translateX: "0%", transition: { duration: 0.2 } }
          : {}
      }
      exit={
        locate.currLocate === "/" && locate.prevLocate === "/upload"
          ? { translateX: "50%", transition: { duration: 0.3 } }
          : {}
      }
    >
      {children}
    </motion.div>
  );
};
