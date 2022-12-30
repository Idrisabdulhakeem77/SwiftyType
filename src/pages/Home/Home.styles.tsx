import { m } from "framer-motion";
import styled from "styled-components";
import { Button } from "../../components/ui";

const Home = styled(m.div).attrs({
  initial: { opacity: 1 },
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

const Wrapper = styled(m.div).attrs((props) => ({
  initial: { opacity: 1 }, //Swap back initial opacity back to Zero
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const TestButtons = styled(m.div).attrs(() => ({
  initial: { opacity: 1 }, // Swap initial and exit back to zero when done
  exit: { opacity: 1 },
  animate: { opacity: 1 },
}))``;

const CustomConfig = styled.div``;

const CommandLineButton = styled(Button)``;

const Tips = styled.div``;

const Buttom = styled(m.div).attrs(() => ({
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  animate: { opacity: 0 },
}))``;

const Buttons = styled.div``;

const Styled = {
  Home,
  Wrapper,
  TestButtons,
  CustomConfig,
  CommandLineButton,
  Tips,
  Buttom,
  Buttons,
};

export default Styled;
