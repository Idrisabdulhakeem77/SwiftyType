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
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, useIsPresent } from "framer-motion";

const TypingTest = () => {
  const { commandLine, capsLock } = useAppSelector(({ app }) => app);
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
  const sprite = sounds[soundOnClick]?.sprite;



  const [playClickSound, { sound: clickSound }] = useSound(
    `${process.env.PUBLIC_URL}/assets/sounds/${url ?? "click.wav"}` ,
    {sprite}
  );

  const [playErrorSound, { sound: clickError }] = useSound(
    `${process.env.PUBLIC_URL}/assets/sounds/${url ?? "error.wav"}` ,
    {sprite}
  );

  const isPresent = useIsPresent();
  const input = useRef<HTMLInputElement>(null);
  const currentWord = useRef<HTMLDivElement>(null);
  const currentLetter = useRef<HTMLSpanElement>(null);
  const blurTimeOut = useRef<NodeJS.Timer>();
  const typingTimeOut = useRef<NodeJS.Timer>();
  const highestWordIndex = useRef(0);

  // const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!isReady) return;

    

  //   const { value } = e.target;

  //   if (!isRunning) {
  //     dispatch(startTest(performance.now()));
  //   }

  //   /// Checks if the value is the same as the correct
  //   dispatch(checkInput({ value, config }));
  //   dispatch(setIsTyping(true));

  //   clearTimeout(typingTimeOut.current);

  //   typingTimeOut.current = setTimeout(() => {
  //     setIsTyping(false);
  //   }, 1000);
  // };




  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isReady) return;
    const { value } = e.target;
    
    if (!isRunning) {
      dispatch(startTest(performance.now()));
    }
    dispatch(checkInput({ value, config }));
    dispatch(setIsTyping(true));

    clearTimeout(typingTimeOut.current);

    typingTimeOut.current = setTimeout(() => dispatch(setIsTyping(false)), 1000);
  };

  const blurWords = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    clearTimeout(blurTimeOut.current);

    blurTimeOut.current = setTimeout(() => {
      setIsBlurred(true);
    }, 1000);

    setIsFocused(true);
  };

  const focusWords = () => {
    clearTimeout(blurTimeOut.current);
    input.current?.focus();
    setIsFocused(true);
    setIsBlurred(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (["Tab", "Escape", "Enter"].includes(e.key) || e.key.match(/F\d*/))
      return;
    e.preventDefault();
    focusWords();
  };


  const playKeySound = () => {

    const randomIndex = Math.floor(Math.random() * Object.keys(sprite).length);

    // console.log(randomIndex)

    playClickSound({ id: randomIndex.toString() });
  };

  const generateWords = (words: number) => {
    const newWords = [];

    while (newWords.length < words) {
      const randomIndex = Math.floor(Math.random() * testLanguage.words.length);

      const word = testLanguage.words[randomIndex];

      newWords.push(word);
    }

    dispatch(addTestWords(newWords));
  };

  useEffect(() => {
    dispatch(resetTest());
    dispatch(setIsReady(true));

    if (mode === "words" && words > 0) {
      generateWords(Math.min(100, words));
    } else if (mode === "time" || (mode === "words" && !words)) {
      generateWords(100);
    } else if (mode === "zen") {
      dispatch(setIsReady(true));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (!isPresent) {
      dispatch(setIsReady(false));
    }
  }, [dispatch, isPresent]);

  useEffect(() => {
    if (!commandLine.isOpen && !isTestPopupOpen) {
      focusWords();
    }
  }, [isTestPopupOpen, commandLine.isOpen]);

  useEffect(() => {
    clickSound?.volume(soundVolume);
    clickError?.volume(soundVolume);
  }, [soundVolume, clickError, clickSound]);

  useEffect(() => {
    const top = currentWord.current?.offsetTop || 0;
    const left = currentLetter.current
      ? currentLetter.current?.offsetLeft + currentLetter.current?.offsetWidth
      : currentWord.current?.offsetLeft || 0;

    currentWord.current?.scrollIntoView({
      behavior: smoothLineScroll === "on" ? "smooth" : "auto",
      block: "center",
    });

    setCaretPosition({ x: left, y: top });
  }, [smoothLineScroll, fontSize, inputValue, wordIndex]);

  useEventListener(
    !isFocused && !commandLine.isOpen && !isTestPopupOpen ? window : null,
    "keydown",
    handleKeyDown
  );


  useEventListener(
    soundOnClick !== 'off' && isFocused ? window : null, 
     'keydown' ,
     playKeySound
  )

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
                        {blindMode === "off" && indicateTypos === "replace"
                          ? letter.typed || letter.original
                          : letter.original}
                        {indicateTypos === "below" &&
                          letter.status === "incorrect" && (
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

      {capsLockWarning === "show" && isReady && capsLock && (
        <Styled.CapLock
          onClick={() =>
            dispatch(
              setCommandLine({ isOpen: true, initial: "capsLockWarning" })
            )
          }
        >
          <RiLockFill />
          Caps Lock
        </Styled.CapLock>
      )}

      {/* When the Windows is blurred */}

      {outOfFocusWarning === "show" && isReady && isBlurred && (
        <Styled.OutOfFocus>
          <RiCursorFill />
          Click or press any key to focus
        </Styled.OutOfFocus>
      )}
    </Styled.TypingTest>
  );
};

export default TypingTest;
