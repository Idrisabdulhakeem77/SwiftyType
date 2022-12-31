import { Popup } from "../ui";
import Styled from "./CommandLine.styles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCommandLine } from "../../slice/app";
import { RiTerminalLine, RiSettingsLine } from "react-icons/ri";
import { useRef, useState } from "react";
import config from "../../config/_list";
import { Button } from "../ui";

const CommandLine = () => {
  const dispatch = useAppDispatch();

  const { commandLine } = useAppSelector(({ app }) => app);

  const [selected, setSelected] = useState(commandLine.initial);
  const [inputValue, setInputValue] = useState("");
  const input = useRef<HTMLInputElement>(null);

  return (
    <Popup
      top
      maxWidth={700}
      close={() => dispatch(setCommandLine({ isOpen: false }))}
    >
      <Styled.SearchBox>
        <RiTerminalLine />
        {selected && (
          <Styled.Command>{config[selected].command}</Styled.Command>
        )}
        <form>
          <Styled.Input
            ref={input}
            placeholder={selected ? "type value" : "type command"}
            value={inputValue}
            onChange={({ target: { value } }) => setInputValue(value)}
            autoFocus
          />
          <Button
            text
            title="Settings"
            onClick={() => dispatch(setCommandLine({ isOpen: false }))}
            navigate="/settings"
          >
            <RiSettingsLine />
          </Button>
        </form>
      </Styled.SearchBox>
    </Popup>
  );
};

export default CommandLine;
