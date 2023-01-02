import Styled from "./header.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import {
  RiKeyboardBoxFill,
  RiLoginCircleFill,
  RiNotificationFill,
  RiInformationFill,
  RiVipCrownFill,
  RiSettingsFill,
} from "react-icons/ri";
import { Button, LogoIcon } from "../ui";
import { AnimatePresence, m } from "framer-motion";
import { useCurrentViewPort } from "../../hooks/useCurrentViewPort";
import {FaUser} from 'react-icons/fa'

const Header = () => {
  const { isTyping } = useAppSelector(({ type }) => type);
  const { mode, time, words } = useAppSelector(({ config }) => config);

  const navigate = useNavigate();
  const location = useLocation();

  const leftMenuButton = [
    { title: "Home", icon: <RiKeyboardBoxFill />, to: "/" },
    { title: "Leaderboards", icon: <RiVipCrownFill />, to: "/leaderboards" },
    { title: "About", icon: <RiInformationFill />, to: "/about" },
    { title: "Settings", icon: <RiSettingsFill />, to: "/settings" },
  ];

  const rightMenuButton = [
    { title: "Login", icon: <FaUser />, to: "/login" },
    {
      title: "Notification",
      icon: <RiNotificationFill />,
      to: "/notification",
    },
  ];

  const { isMobile } = useCurrentViewPort();

  return (
    <Styled.Header>
      <Styled.LeftSideHeaderContent>
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
              {leftMenuButton.map(({ title, icon, to }) => (
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
      </Styled.LeftSideHeaderContent>

      <Styled.RightSideHeaderContetnt>
        {rightMenuButton.map(({ title, icon, to }) => (
          <Button key={title} text title={title} onClick={() => navigate(to)}>
            {icon}
          </Button>
        ))}
      </Styled.RightSideHeaderContetnt>
    </Styled.Header>
  );
};

export default Header;
