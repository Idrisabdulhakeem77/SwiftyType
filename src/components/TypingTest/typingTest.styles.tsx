import styled from "styled-components";
import { m } from "framer-motion";

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
  border: solid 2px red;
`;


const Input =  styled.input`
   z-index: -1;
   opacity : 0 ;
   position: absolute;
 `


const Wrapper = styled.div<{ $blurred : boolean}>``

const Styled = { TypingTest , Input };

export default Styled;
