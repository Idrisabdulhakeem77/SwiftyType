import styled from "styled-components";

const Button = styled.button<{ $active: boolean }>`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  user-select: none;
  gap: 6px;
  font-size: 16px;
  border-radius: 8px;
  cursor : pointer ;
  background: ${(p) => (p.$active ? p.theme.main : p.theme.subAlt)};
  color : ${(p) => (p.$active ? p.theme.bg : p.theme.text)} ;
  transition: : background 0.2s, color 0.2s, transform  0.15s;
`;

const TextButton = styled(Button)<{ $active: boolean }>``;

const AltButton = styled(TextButton)``;

const Styled = { Button, TextButton, AltButton };

export default Styled;
