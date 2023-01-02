import { m, useAnimation } from "framer-motion";
import { useTheme } from "styled-components";
import { useEffect } from "react";
import { useAppSelector } from "../../../app/hooks";
import { useThrottledCallback } from "use-debounce";

const LogoIcon = () => {
  const theme = useTheme();

  const { isTyping, isReady } = useAppSelector(({ type }) => type);

  const rectControl = useAnimation();

  const animateRect = useThrottledCallback(
    () => {
      rectControl.start({
        opacity: 1,
        pathOffset: [0 ,1 ,2],
        transition: { duration: 1 },
      });
    },
    1000,
    { trailing: false }
  );


  const variants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { delay: 0.1, duration: 1 },
    },
  };
  const props = {
    variants,
    initial: 'hidden',
    animate: 'visible',
  };

  // Find out ehat props and varients do it an animation

  return <div>Logo icon</div>;
};

export default LogoIcon;
