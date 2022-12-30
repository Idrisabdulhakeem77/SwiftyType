import Styled from "./Home.styles";
import { AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Loading, TestResults } from "../../components";
import { Button, Popup, Input, Key } from "../../components/ui";
import { RiGlobeFill  , RiTerminalLine  } from "react-icons/ri";
import { setIsTestPopupOpen  } from "../../slice/typingTest";
import {setCommandLine} from '../../slice/app'
import { useState } from "react";

interface HomeProps {
  setRandomTheme: () => void;
}

const Home = ({ setRandomTheme }: HomeProps) => {
  const { commandLine } = useAppSelector(({ app }) => app);

  const [customAmount, setCustomAmount] = useState(0);

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
          // <Loading />
          <div> Loading i guess </div>
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
                <Input
                  type="number"
                  min="0"
                  max={mode === "time" ? "3600" : "5000"}
                  value={customAmount}
                  // this is the same as e.target.value just destructed from e directly
                  onChange={({ target: { value } }) =>
                    setCustomAmount(+customAmount)
                  }
                  autoFocus
                />
                <div>
                  You can start an infinite test by inputting 0. To stop the
                  test, use <Key>shift</Key> + <Key>enter</Key>
                </div>
                <Button type="submit"> ok </Button>
              </form>
            </Styled.CustomConfig>
          </Popup>
        )}
        {!isTyping && (
          <Styled.Buttom>
            {keyTips === "show" && (
              <Styled.Tips>
                {(mode === "zen" ||
                  (mode === "words" && !words) ||
                  (mode === "time" && !time)) && (
                  <div>
                    <Key>shift</Key> + <Key>enter</Key> - stop test
                  </div>
                )}
                <div>
                  <Key>{quickRestart !== "esc" ? "tab" : "esc"}</Key>
                  {quickRestart === "off" ? (
                    <>
                      {" "}
                      + <Key>enter</Key>
                    </>
                  ) : null}{" "}
                  - restart test
                </div>
                <div>
                  <Key>{quickRestart !== "esc" ? "esc" : "tab"}</Key> - command
                  line
                </div>
              </Styled.Tips>
            )}
            <Styled.CommandLineButton
              title="Command line"
              active
              onClick={() => dispatch(setCommandLine({ isOpen: true }))}
            >
              <RiTerminalLine />
            </Styled.CommandLineButton>
          </Styled.Buttom>
        )}
      </AnimatePresence>
    </Styled.Home>
  );
};

export default Home;
