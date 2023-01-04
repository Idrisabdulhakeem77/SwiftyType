import styled from "styled-components";
import { m } from "framer-motion";
import { Button } from "../ui";

const TypingTest = styled(m.div).attrs(() => ({
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  animate: { opacity: 1 },
}))<{ $fontSize: SwiftTypes.Config["fontSize"] }>`
  height: ${(p) => (p.$fontSize * 16 + 6) * 4 + 8}px;
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
  font-size: ${(p) => p.$fontSize * 16}px;
  line-height: ${(p) => p.$fontSize * 16}px;
  user-select: none;
`;

const Input = styled.input`
  z-index: -1;
  opacity: 0;
  position: absolute;
`;

const Wrapper = styled.div<{ $blurred: boolean }>`
  padding: 4px 2px;
  position: relative;
  display: flex;
  flex: 1 1;
  opacity: ${(p) => (p.$blurred ? "0.4" : "1")};
  filter: ${(p) => (p.$blurred ? "blur(5px)" : "none")};
  cursor: ${(p) => (p.$blurred ? "pointer" : "auto")};
  overflow: hidden;
  transition: opacity 0.4s, filter 0.4s;
`;

const Caret = styled(m.div)<{ $style: string }>`
  height: ${(p) =>
    p.$style === "underline" ? "0.125em" : "calc(1.2em + 6px)"};
  width: ${(p) => (p.$style === "default" ? 0.125 : 0.7)}em;
  margin-top: ${(p) => (p.$style === "underline" ? "calc(1em + 6px)" : 0)};
  position: absolute;
  border-radius: 0.1em;
  background-color: ${(p) =>
    p.$style !== "outline" ? p.theme.caret : "transparent"};
  border: ${(p) =>
    p.$style === "outline" ? "2px solid " + p.theme.caret : "none"};
  transition-property: background-color, border-color;
`;

const Words = styled(m.div).attrs(() => ({
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  initial: { opacity: 0 },
}))`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const Word = styled.div<{ $error: boolean }>`
  margin-block: 2px;
  display: flex;
  border-bottom: 2px solid
    ${(p) => (p.$error ? p.theme.colorfulError : "transparent")};
  transition: border-color 0.1s ease-out;
`;

const Letter = styled.span<{
  $flipColors: boolean;
  $colorful: boolean;
  $status: SwiftTypes.Letter["status"];
  $hidden: boolean;
}>`
  width: ${(p) => (p.$hidden ? 0 : "auto")};
  position: relative;
  display: inline-block;
  visibility: ${(p) => (p.$hidden ? "hidden" : "visible")};
  color: ${(p) => {
    const {
      main,
      sub,
      text,
      error,
      errorExtra,
      colorfulError,
      colorfulErrorExtra,
    } = p.theme;
    switch (p.$status) {
      case "correct":
        if (p.$flipColors) return sub;
        return p.$colorful ? main : text;
      case "incorrect":
        return p.$colorful ? colorfulError : error;
      case "extra":
        return p.$colorful ? colorfulErrorExtra : errorExtra;
      default:
        if (p.$flipColors) return p.$colorful ? main : text;
        return sub;
    }
  }};
  transition: color 0.1s ease-out;
`;

const Typo = styled.div``;

const CapLock = styled(Button).attrs(() => ({ active: true }))`
  position: absolute;
  left: 0;
  right: 0;
  top: -200px;
  margin-inline: auto;
  padding: 12px 14px;
  width: fit-content;
`;

const OutOfFocus = styled(m.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}))`
  font-size: 1rem;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  pointer-events: none;
  transition-property: color;
  color: ${(p) => p.theme.text};
`;

const Styled = {
  TypingTest,
  Input,
  Wrapper,
  Caret,
  Words,
  Word,
  Letter,
  Typo,
  OutOfFocus,
  CapLock,
};

export default Styled;
