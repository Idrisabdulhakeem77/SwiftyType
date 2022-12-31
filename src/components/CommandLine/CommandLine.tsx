import { Popup } from "../ui";
import Styled from "./CommandLine.styles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useDebouncedCallback } from "use-debounce";
import { useIsPresent } from "framer-motion";
import { setCommandLine, setTheme } from "../../slice/app";
import {
  RiTerminalLine,
  RiSettingsLine,
  RiCheckLine,
  RiStarLine,
  RiStarFill,
} from "react-icons/ri";
import React, { FormEvent, useRef, useState } from "react";
import configList from "../../config/_list";
import { Button } from "../ui";

const CommandLine = () => {
  const dispatch = useAppDispatch();

  const { commandLine } = useAppSelector(({ app }) => app);

  const config = useAppSelector(({ config }) => config);

  const [configItems, setConfigItems] = useState(Object.entries(configList));
  const [selected, setSelected] = useState(commandLine.initial);
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(
    configList[selected]?.options || []
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUsingKeyboard, setIsUsingKeyboard] = useState(true);

  const IsPresent = useIsPresent()


  const setThemeDebounced = useDebouncedCallback(
     (async( themeName) => {
         if(!IsPresent) return

         dispatch(setTheme(( await import(`../../themes/${themeName}`)).ts))
     }
      
      ) 
   , 25)

  const input = useRef<HTMLInputElement>(null);

  const selectedValue =
    config[selected as keyof Omit<typeof config, "favoriteThemes">];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Convert undefined to false
    const isCustom = Boolean(
      configItems.find(([key]) => key === selected)?.[1].custom
    );

    const maxIndex = selected
      ? selected.length + +isCustom
      : configItems.length;

    if (e.key === "ArrowDown" || e.key === "Tab") {
      e.preventDefault();
      setActiveIndex((index) => (index + 1) % maxIndex);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((index) => (index - 1 < 0 ? maxIndex - 1 : index - 1));
    } else if (e.key === "Backspace" && !inputValue) {
      // deleteCommand();
    }

    setIsUsingKeyboard(true)
  };

  return (
    <Popup
      top
      maxWidth={700}
      close={() => dispatch(setCommandLine({ isOpen: false }))}
    >
      <Styled.SearchBox onKeyDown={handleKeyDown}>
        <RiTerminalLine />
        {selected && (
          <Styled.Command>{configList[selected].command}</Styled.Command>
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

      <Styled.List>
        {selected ? (
          <>
            {selectedOptions.map((option, index) => (
              <Styled.Item
                key={index}
                style={{
                  fontFamily:
                    selected === "fontFamily" ? option.toString() : undefined,
                }}
                $active={index === activeIndex}
                $selected={selectedValue === option}
              >
                {option}

                {selectedValue === option && <RiCheckLine />}

                {/* {(selected === "themeName" &&
                  config.favoriteThemes.includes(option as string) && (
                    <span>
                      <RiStarFill />
                    </span>
                  )) ||
                  (activeIndex === index && (
                    <span>
                      <RiStarLine />
                    </span>
                  ))} */}
              </Styled.Item>
            ))}

            {configList[selected].command && (
              <Styled.Item
                key="custom"
                $active={selectedOptions.length === activeIndex}
                $selected={
                  !configList[selected].options?.includes(selectedValue)
                }
              >
                custom
                {!configList[selected].options?.includes(selectedValue) && (
                  <span>{selectedValue}</span>
                )}
              </Styled.Item>
            )}
          </>
        ) : (
          configItems.map(([key, { command }], index) => (
            <Styled.Item key={key} $active={index === activeIndex}>
              {command}
              {/* {(configItems.length === 1 || filterValue(inputValue) === command) && (
              <Key id="key">space</Key>
            )} */}
            </Styled.Item>
          ))
        )}
      </Styled.List>
    </Popup>
  );
};

export default CommandLine;
