import Styled from "./Home.styles";
import { AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Loading, TestResults } from "../../components";
import { Button, Popup } from "../../components/ui";
import { RiGlobeFill } from "react-icons/ri";
import { setIsTestPopupOpen } from "../../slice/typingTest";

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
  } = useAppSelector((state) => state.config);

  const { isTyping, isFinished, isTestPopupOpen, testLanguage } =
    useAppSelector(({ type }) => type);

  const dispatch = useAppDispatch();

  return (
    <Styled.Home>
      <AnimatePresence exitBeforeEnter>
        {!testLanguage.words.length ? (
          <Loading />
        ) : isFinished ? (
          <Styled.Wrapper key="results">{/* <TestResults/> */}</Styled.Wrapper>
        ) : (
          <Styled.Wrapper>
            {/* {Added Test Id here } */}
            <AnimatePresence>
              <Styled.TestButtons>
                <Button>
                  <RiGlobeFill /> {testLanguage.name}
                </Button>
              </Styled.TestButtons>
            </AnimatePresence>
          </Styled.Wrapper>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isTestPopupOpen && (
          <Popup close={() => dispatch(setIsTestPopupOpen(false))}>
            <Styled.CustomConfig>
              <h4>{mode === "time" ? "Test duration" : "Word amount"}</h4>
              {/* A condition to check if the mode is time is supposed to here */}

              <form>
                 
              </form>

            </Styled.CustomConfig>
          </Popup>
        )}
      </AnimatePresence>
    </Styled.Home>
  );
};

export default Home;
