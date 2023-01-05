import { useState, useEffect, useRef } from "react";
import Styled from "./keymap.styles";
import useEventListener from "use-typed-event-listener";
import { useAppSelector } from "../../app/hooks";

interface Key {
  char: string;
  isActive: boolean;
}

const Keymap = () => {
  const { keymap, keymapLayout, keymapLegendStyle, keymapStyle, mode } =
    useAppSelector(({ config }) => config);

  const { testWords, wordIndex } = useAppSelector(({ type }) => type);

  const [shift, setShift] = useState(false);
  const [keys, setKeys] = useState<Key[]>([]);
  const [isUpperCase , setIsUpperCase] = useState(false)
  

  const getLegend = (char: string) => {
    switch (keymapLegendStyle) {
      case "lowercase":
      case "uppercase":
        return char[0];

      case "dynamic":
        return specialChars.includes(char) ? char[+shift] : char[0];

      default:
        return null;
    }
  };
  

  const toggleActive = ( e : KeyboardEvent) => {
    const keyIndex = keys?.findIndex((k) => k.char.includes(e.key))

    if(!keys || !keyIndex || keyIndex === -1) return 

    const newkeys = [...keys]
     

     // No idea what this code is doing yet
    newkeys[keyIndex].isActive = e.type === "keydown"

    setKeys(newkeys)
  }


  const handleCapsLockShift = ( e : KeyboardEvent) => {
     
    if(e.key === "CapsLock") {
         setIsUpperCase(e.getModifierState('CapsLock'))
    }  else if ( e.key === 'Shift') {
          setIsUpperCase(e.getModifierState('CapsLock') !== e.getModifierState('Shift') )

          setShift(e.getModifierState('Shift'))
    }



  }




  useEventListener( keymap === 'react' ? window : null , 'keyup' , toggleActive )


  useEventListener( keymap === 'react' ? window : null , 'keydown' , toggleActive )


  useEventListener( keymapLegendStyle === 'dynamic' ? window : null , 'keyup' , toggleActive )


  useEventListener( keymapLegendStyle === 'dynamic' ? window : null , 'keydown' , toggleActive )






  return <Styled.Keymap>KeyMap bitches</Styled.Keymap>;
};

const specialChars = ["[{", "]}", ";:", "'\"", ",<", ".>", "/?", "=+", "-_"];
export default Keymap;
