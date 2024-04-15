import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

export const TransitionGallery: FC<{
  children: ReactNode;
  locate: {
    prevLocate: string | null;
    currLocate: string | null;
  };
}> = ({ children, locate }) => {

  return (
    <motion.div
      className="page"
      initial={
        (locate.currLocate === "/" || locate.currLocate === "/main-auth") &&
        (locate.prevLocate === "/upload" || locate.prevLocate === "/main-auth")
          ? { translateX: "-100%" }
          : locate.currLocate === "/main-auth" &&
            locate.prevLocate === "/result"
          ? { opacity: 0 }
          : {}
      }
      animate={
        (locate.currLocate === "/" ||
          locate.currLocate === "/main-auth" ||
          locate.currLocate === "/upload") &&
        locate.prevLocate === "/upload"
          ? { translateX: "0%", transition: { duration: 0.2 } }
          : locate.currLocate === "/main-auth" &&
            locate.prevLocate === "/result"
          ? { opacity: 1, transition: { duration: 0.3 } }
          : {}
      }
      exit={
        locate.currLocate === "/upload" &&
        (locate.prevLocate === "/" || locate.prevLocate === "/main-auth")
          ? { translateX: "-50%", transition: { duration: 0.3 } }
          : {}
      }
    >
      {children}
    </motion.div>
  );
};
