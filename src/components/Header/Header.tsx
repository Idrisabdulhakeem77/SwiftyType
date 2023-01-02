import Styled from "./header.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RiKeyboardBoxFill } from "react-icons/ri";
import { LogoIcon } from "../ui";
import { AnimatePresence } from "framer-motion";
import { useCurrentViewPort } from "../../hooks/useCurrentViewPort";

const Header = () => {
  const { isTyping } = useAppSelector(({ type }) => type);
  const { mode, time, words } = useAppSelector(({ config }) => config);

  const navigate = useNavigate();
  const location = useLocation();

  const menuButtons = [
    { title: "Home", to: "/", icon: <RiKeyboardBoxFill /> },
    { title: "Settings", to: "/setting", icon: <RiKeyboardBoxFill /> },
  ];

 
  const { isMobile } =  useCurrentViewPort() 
 
  return (
    <Styled.Header>
      <Styled.Logo>
        <LogoIcon />
      </Styled.Logo>
      <Styled.Text $typing={isTyping}>
        <AnimatePresence>
          {!isTyping && <Styled.TopText> swift see</Styled.TopText>}
        </AnimatePresence>
        swift type
      </Styled.Text>
    </Styled.Header>
  );
};

export default Header;
