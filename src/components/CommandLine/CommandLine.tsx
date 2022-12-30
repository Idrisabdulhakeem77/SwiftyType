import { Popup } from "../ui";
import Styled from "./CommandLine.styles";
import { useAppDispatch , useAppSelector } from "../../app/hooks";
import { setCommandLine } from "../../slice/app";
import { RiTerminalLine } from "react-icons/ri";
import { useState } from "react";

const CommandLine = () => {
  const dispatch = useAppDispatch();
    
  const {commandLine} = useAppSelector(({app}) => app)
 

  const [selected , setSelected] = useState(commandLine.initial)

  return (
    <Popup
      top
      maxWidth={700}
      close={() => dispatch(setCommandLine({ isOpen: false }))}
    >
      <Styled.SearchBox>
        <RiTerminalLine />
      </Styled.SearchBox>
    </Popup>
  );
};

export default CommandLine;
