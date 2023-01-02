import styled from "styled-components";
import { m } from "framer-motion";

const Header = styled.header`
  width: 100%;
  /* display: grid;
  align-items: center;
  display : flex ;
  align-items: center;
  gap: 16px;
  user-select: none; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSideHeaderContent = styled.div`
  /* display: grid;
  align-items: center; */
  display: flex;
  align-items: center;
  gap: 14px;
  user-select: none;
`;

const RightSideHeaderContetnt = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 14px;
`;

const Logo = styled.div`
  width: fit-content;
  align-items: center;
  gap: 8px;
  font-family: "Lexend Deca";
  cursor: pointer;
`;

const Text = styled(m.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.75 } },
  exit: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
}))<{ $typing: boolean; $isMobile: boolean }>`
  display: ${(props) => (props.$isMobile ? "none" : "")};
  margin-bottom: 12px;
  position: relative;
  font-size: 32px;
  color: ${(p) => (p.$typing ? p.theme.sub : p.theme.text)};
  transition-property: color;
`;

const TopText = styled(m.div).attrs(() => ({
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.75,
      duration: 0.75,
      type: "spring",
      stiffness: 30,
      damping: 10,
    },
  },
  exit: { opacity: 0 },
}))`
  position: absolute;
  top: -8px;
  left: 12px;
  font-size: 12px;
  color: ${(p) => p.theme.sub};
  margin-bottom: 2px;
  transition-property: color;
`;

const Menu = styled(m.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.25, duration: 0.5 } },
  exit: { opacity: 0 },
}))`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Styled = {
  Header,
  Logo,
  Text,
  TopText,
  Menu,
  LeftSideHeaderContent,
  RightSideHeaderContetnt,
};

export default Styled;
