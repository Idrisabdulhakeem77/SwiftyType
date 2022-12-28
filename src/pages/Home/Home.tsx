import Styled from "./Home.styles";
import { AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Loading from "../../components/Loading/Loading";

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

  const { isTyping, isFinished, isTestPopupOpen, testLanguage } =
    useAppSelector(({ type }) => type);

  return (
    <Styled.Home>
      <AnimatePresence exitBeforeEnter>
        {!testLanguage.words.length ? (
          <Loading />
        ) : isFinished ? (
          <Styled.Wrapper key="results"></Styled.Wrapper>
        ) : (
          <Styled.Wrapper></Styled.Wrapper>
        )}
      </AnimatePresence>
    </Styled.Home>
  );
};

export default Home;
