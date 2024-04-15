import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export const MyPortal: FC<{ children: ReactNode; showPortal: boolean }> = ({
  children,
  showPortal,
}) => {
  const portalElement = document.querySelector(".portal-auth");
  if (!portalElement) return null;

  return ReactDOM.createPortal(
    <AnimatePresence mode="wait">
      {showPortal && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          style={{
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    portalElement
  );
};
