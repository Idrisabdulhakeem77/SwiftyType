import { AnimatePresence } from "framer-motion";
import Styled from "./footer.styles";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Button } from "../ui";
import { RiGithubLine, RiPaletteFill } from "react-icons/ri";
import { setCommandLine } from "../../slice/app";

const Footer = () => {
  const dispatch = useAppDispatch();

  const { isTyping } = useAppSelector(({ type }) => type);
  const { themeName } = useAppSelector(({ config }) => config);

  const openCommandLine = () => {
    dispatch(setCommandLine({ isOpen: true, initial: "themeName" }));
  };

  return (
    <Styled.Footer>
      <AnimatePresence>
        {!isTyping && (
          <>
            <Styled.Buttons key="left">
              <Button text href="https://github.com/Idrisabdulhakeem77">
                <RiGithubLine /> Idris
              </Button>
            </Styled.Buttons>

            <Styled.Buttons>
              <Button text onClick={openCommandLine}>
                <RiPaletteFill /> {themeName}
              </Button>
            </Styled.Buttons>
          </>
        )}
      </AnimatePresence>
    </Styled.Footer>
  );
};

export default Footer;
