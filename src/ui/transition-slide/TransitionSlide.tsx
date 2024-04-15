import React, { FC, useState } from "react";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import { useLocation } from "react-router-dom";

const TransitionSlide: FC<any> = ({ children, ...props }) => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  const handleExit = () => {
    // setTimeout(() => setVisible(false), 100);
  };
  return (
    <TransitionGroup>
      <CSSTransition
        {...props}
        timeout={1500} // Время анимации в миллисекундах
        key={location.key}
        classNames={"slide"}
        // mountOnEnter
        // unmountOnExit
        // in={visible}
        // onExit={handleExit}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionSlide;
