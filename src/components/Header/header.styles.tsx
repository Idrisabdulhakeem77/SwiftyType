import styled from "styled-components";
import {m} from 'framer-motion'
 
const Header = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  user-select: none;
`;

const Logo = styled.div`
  width: fit-content;
  align-items: center;
  gap: 8px;
  font-family: 'Lexend Deca';
  cursor: pointer;
`;


const Text = styled(m.div).attrs( () => ( {
    initial : { opacity : 0} ,
    animate : { opacity : 1 , transition : { duration :  0.75} }
 
}) )<{$typing : boolean}>``


const TopText = styled(m.div).attrs(() => ( {}))`` 

const Styled = { Header , Logo , Text , TopText };

export default Styled;
