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
import { AnimatePresence, useIsPresent } from "framer-motion";

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

  const dispatch = useAppDispatch();

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
  const currentWord = useRef<HTMLDivElement>(null);
  const currentLetter = useRef<HTMLSpanElement>(null);
  const blurTimeOut = useRef<NodeJS.Timer>();
  const typingTimeOut = useRef<NodeJS.Timer>();
  const highestWordIndex = useRef(0);
 


  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isReady) return;

    const { value } = e.target;

    if (!isRunning) {
      dispatch(startTest(performance.now()));
    }

    /// Checks if the value is the same as the correct
    dispatch(checkInput({ value, config }));
    dispatch(setIsTyping(true));

    clearTimeout(typingTimeOut.current);

    typingTimeOut.current = setTimeout(() => {
      setIsTyping(false);
    }, 1000);

  };

  const blurWords = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    clearTimeout(blurTimeOut.current);

    blurTimeOut.current = setTimeout(() => {
      setIsBlurred(true);
    }, 1000);

    setIsFocused(true);
  };

  const focusWords = () => {};

  return (
    <Styled.TypingTest $fontSize={fontSize}>
      <Styled.Input
        ref={input}
        value={inputValue}
        onChange={inputHandler}
        onBlur={blurWords}
      />
      <AnimatePresence>
        {isReady && (
          <Styled.Wrapper
            onClick={focusWords}
            $blurred={outOfFocusWarning === "show" && isBlurred}
          >
            {isFocused && caretStyle !== "off" && (
              <Styled.Caret
                animate={{
                  opacity: [1, isTyping ? 1 : 0, 1],
                  top: caretPosition.x,
                  left: caretPosition.y,

                  transition: {
                    opacity: {
                      repeat: Infinity,
                      ease:
                        smoothCaret === "on" ? "easeInOut" : [1, -10, 0, 10],
                      duration: 1,
                    },
                  },
                }}
                $style={caretStyle}
              />
            )}
            <Styled.Words>
              {testWords.map(
                ({ isCorrect, typed, original, letters }, index) => (
                  <Styled.Word
                    ref={wordIndex === index ? currentWord : null}
                    key={`${original}-${index}`}
                    $error={
                      blindMode === "off" && wordIndex > index && !isCorrect
                    }
                  >
                    {letters.map((letter, i) => (
                      <Styled.Letter
                        ref={
                          wordIndex === index && (typed?.length || 0) - 1 === i
                            ? currentLetter
                            : null
                        }
                        key={i}
                        $flipColors={flipTestColors === "on"}
                        $colorful={colorfulMode === "on"}
                        $status={
                          blindMode === "on" &&
                          (letter.status === "incorrect" ||
                            letter.status === "missed")
                            ? "correct"
                            : letter.status
                        }
                        $hidden={
                          (hideExtraLetters === "on" || blindMode === "on") &&
                          letter.status === "extra"
                        }
                      >
                         {blindMode === 'off' && indicateTypos === 'replace'
                        ? letter.typed || letter.original : letter.original}
                      {indicateTypos === 'below' && letter.status === 'incorrect' && (
                        <Styled.Typo>{letter.typed}</Styled.Typo>
                      )}
                      </Styled.Letter>
                    ))}
                  </Styled.Word>
                )
              )}
            </Styled.Words>
          </Styled.Wrapper>
        )}
      </AnimatePresence>
    </Styled.TypingTest>
  );
};

export default TypingTest;
