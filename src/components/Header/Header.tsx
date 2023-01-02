import Styled from "./header.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import {
  RiKeyboardBoxFill,
  RiLoginCircleFill,
  RiNotificationFill,
  RiSettingsFill,
} from "react-icons/ri";
import { Button, LogoIcon } from "../ui";
import { AnimatePresence, m } from "framer-motion";
import { useCurrentViewPort } from "../../hooks/useCurrentViewPort";

const Header = () => {
  const { isTyping } = useAppSelector(({ type }) => type);
  const { mode, time, words } = useAppSelector(({ config }) => config);

  const navigate = useNavigate();
  const location = useLocation();

  const menuButtons = [
    { title: "Home", to: "/", icon: <RiKeyboardBoxFill /> },
    { title: "Settings", to: "/setting", icon: <RiSettingsFill /> },
    { title: "Login", to: "/login", icon: <RiLoginCircleFill /> },
    { title: "Notfication", to: "/notification", icon: <RiNotificationFill /> },
  ];

  const { isMobile } = useCurrentViewPort();

  return (
    <Styled.Header>
      <Styled.Logo>
        <LogoIcon />
      </Styled.Logo>
      <Styled.Text $typing={isTyping} $isMobile={isMobile}>
        <AnimatePresence>
          {!isTyping && <Styled.TopText> swift see</Styled.TopText>}
        </AnimatePresence>
        swift type
      </Styled.Text>
      {!isTyping && (
        <>
          <Styled.Menu>
          {menuButtons.map(({ title, icon, to }) => (
              <Button
                key={title}
                text
                title={title}
                onClick={() => navigate(to)}
              >
                {icon}
              </Button>
            ))}


          </Styled.Menu>
        </>
      )}
    </Styled.Header>
  );
};

export default Header;
