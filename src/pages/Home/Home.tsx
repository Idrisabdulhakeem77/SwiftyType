import Styled from "./Home.styles";
import { AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Loading , TestResults } from "../../components";
import { Button , Popup } from "../../components/ui";
import {RiGlobeFill} from 'react-icons/ri'


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

  
  } = useAppSelector(state => state.config);

  const { isTyping, isFinished, isTestPopupOpen, testLanguage } =
    useAppSelector(({ type }) => type);
  
  return (
    <Styled.Home>
     
      <AnimatePresence exitBeforeEnter>
        {!testLanguage.words.length ? (
          <Loading />
        ) : isFinished ? (
          <Styled.Wrapper key="results">
           
             {/* <TestResults/> */}
          </Styled.Wrapper>
        ) : (
          <Styled.Wrapper> 
             {/* {Added Test Id here } */}
             <AnimatePresence>
                <Styled.TestButtons>
                   <Button>
                      <RiGlobeFill/> {  testLanguage.name}
                   </Button>
                </Styled.TestButtons>
             </AnimatePresence>
          </Styled.Wrapper>
        )}
      </AnimatePresence>
       <AnimatePresence>
          { isTestPopupOpen && (
                <Popup >
                   
                  </Popup>
          )}
       </AnimatePresence>
    </Styled.Home>
  
  );
};

export default Home;
