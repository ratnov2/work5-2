import  { FC, ReactNode } from "react";
import { motion } from "framer-motion";

export const TransitionResult: FC<{
  children: ReactNode;
  locate: {
    prevLocate: string | null;
    currLocate: string | null;
  };
}> = ({ children, locate }) => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
};
