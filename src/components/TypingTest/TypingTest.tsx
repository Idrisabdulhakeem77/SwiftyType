import Styled from "./typingTest.styles";
import sounds from "../../sounds/_lists";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import useEventListener from "use-typed-event-listener";
import useSound from "use-sound";
import { RiLockFill, RiCursorFill } from "react-icons/ri";
import { setCommandLine } from "../../slice/app";

import {
  addTestWords,
  checkInput,
  setIsReady,
  setIsTyping,
  startTest,
  resetTest,
} from "../../slice/typingTest";
import React, { useRef, useState } from "react";
import { useIsPresent } from "framer-motion";

const TypingTest = () => {
  const config = useAppSelector(({ config }) => config);
  const {
    mode,
    words,
    blindMode,
    indicateTypos,
    hideExtraLetters,
    soundVolume,
    soundOnClick,
    soundOnError,
    smoothCaret,
    caretStyle,
    smoothLineScroll,
    fontSize,
    flipTestColors,
    colorfulMode,
    outOfFocusWarning,
    capsLockWarning,
  } = config;
  const {
    testLanguage,
    testWords,
    wordIndex,
    inputValue,
    errorCount,
    isReady,
    isRunning,
    isTyping,
    isTestPopupOpen,
  } = useAppSelector(({ type }) => type);

  const dispatch = useAppDispatch()

  const inputHandler = ( e : React.ChangeEvent<HTMLInputElement>) => {
     if(!isReady) return 

     const {value} = e.target

     if(!isRunning) {
         dispatch(startTest(performance.now()))
     }

  };

  // const blurWords = () => {}

  const [isFocused, setIsFocused] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true);
  const [caretPosition, setCaretPosition] = useState({ x: 0, y: 0 });

  const url = sounds[soundOnClick]?.url;
  const sprite = sounds[soundOnClick]?.spirite;

  const [playClickSound, { sound: clickSound }] = useSound(
    `${process.env.PUBLIC_URL}/assets/sounds/${url ?? "click.wav"}`
  );

  const [playErrorSound, { sound: clickError }] = useSound(
    `${process.env.PUBLIC_URL}/assets/sounds/${url ?? "error.wav"}`
  );

  const isPresent = useIsPresent();
  const input = useRef<HTMLInputElement>(null);
  const word = useRef<HTMLDivElement>(null);
  const currentLetter = useRef<HTMLSpanElement>(null);
  const blurTimeOut = useRef<NodeJS.Timer>();
  const typingTimeOut = useRef<NodeJS.Timer>();
  const highestWordIndex = useRef(0);

  return (
    <Styled.TypingTest $fontSize={fontSize}>
      <Styled.Input ref={input} value={inputValue} onChange={inputHandler} />
    </Styled.TypingTest>
  );
};

export default TypingTest;
