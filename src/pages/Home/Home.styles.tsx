import { m } from "framer-motion";
import styled from "styled-components";

const Home = styled(m.div).attrs({
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  animate: { opacity: 1 },
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding-bottom: 70px;
`;

const Styled = { Home };

export default Styled;
