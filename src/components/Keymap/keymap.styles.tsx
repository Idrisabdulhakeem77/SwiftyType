import styled from "styled-components";


const Key = styled.div<{ $active: boolean  ,  $isMobile : boolean  }>`
  height: ${p => p.$isMobile ? '1rem' : '2rem'};
  width:${p => p.$isMobile ? '1rem' : '2rem'};;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => (p.$active ? p.theme.main : "transparent")};


  color: ${(p) => (p.$active ? p.theme.bg : p.theme.sub)};


  border: 1px solid ${(p) => p.theme.sub};
  border-radius:${p => p.$isMobile ? '0.2rem' : '0.5rem'};
  user-select: none;
  transition-property: background-color, border-color;
  transition-duration: ${(p) => (p.$active ? "0s" : "inherit")};
`;

const Row = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Keymap = styled.div<{ $split: boolean ,  $isMobile : boolean  }>`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: solid 1px red;

  > ${Row} > ${Key}:nth-child(5) {
    margin-right: ${(p) => (p.$split ? 36 : 0)}px;
  }

  #spacebar {
    width : ${p => (p.$isMobile ? '8rem' : '15rem') ||  (p.$split ? "7rem" : "15rem")};
    &:first-child {
      margin-right: ${(p) => (p.$split ? 36 : 0)}px;
    }
  }
`;


const Styled = { Keymap, Key, Row };

export default Styled;
