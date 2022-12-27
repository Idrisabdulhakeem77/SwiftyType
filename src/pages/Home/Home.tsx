import Styled from "./Home.styles";
import { AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

interface HomeProps {
  setRandomTheme: () => void;
}

const Home = ({ setRandomTheme }: HomeProps) => {
  const { commandLine } = useAppSelector(({ app }) => app);

  const {
    mode,
    time,
    words,
    quickRestart,
    language,
    transitionSpeed,
    keymap,
    keyTips,
  } = useAppSelector(({ config }) => config);


  const {isTyping , isFinished , isTestPopupOpen , testLanguage } = useAppSelector(({type}) => type)

  return (
    <Styled.Home>
      <AnimatePresence exitBeforeEnter></AnimatePresence>
    </Styled.Home>
  );
};

export default Home;
