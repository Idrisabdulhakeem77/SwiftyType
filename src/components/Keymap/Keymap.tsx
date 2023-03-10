import { useEffect, useRef, useState } from 'react';
import useEventListener from 'use-typed-event-listener';
import { useAppSelector } from '../../app/hooks';
import Styled from './keymap.styles';
import { useCurrentViewPort } from '../../hooks/useCurrentViewPort';

interface Key {
  char: string;
  isActive: boolean;
}

function Keymap() {
  const {
    mode,
    keymap,
    keymapLayout,
    keymapStyle,
    keymapLegendStyle,
  } = useAppSelector(({ config }) => config);
  const { testWords, wordIndex } = useAppSelector(({ type }) => type);
  const [keys, setKeys] = useState<Key[]>();
  const [isUppercase, setIsUppercase] = useState(false);
  const [shift, setShift] = useState(false);
  const lastLetter = useRef('null');


  const { isMobile } = useCurrentViewPort()

  const getLegend = (char: string) => {
    switch (keymapLegendStyle) {
      case 'lowercase':
      case 'uppercase':
        return char[0];
      case 'dynamic':
        return specialChars.includes(char) ? char[+shift] : char[0];
      default:
        return null;
    }
  };


  const toggleActive = (e: KeyboardEvent) => {
    const keyIndex = keys?.findIndex((k) => k.char.includes(e.key));

    if (!keys || !keyIndex || keyIndex === -1) return;

    const newKeys = [...keys];

    newKeys[keyIndex].isActive = e.type === 'keydown';
    
    setKeys(newKeys);
  };

  const handleCapsLockShift = (e: KeyboardEvent) => {
    if (e.key === 'CapsLock') {
      setIsUppercase(e.getModifierState('CapsLock'));
    } else if (e.key === 'Shift') {

      // check if capsLoc
      setIsUppercase(e.getModifierState('CapsLock') !== e.getModifierState('Shift'));


      setShift(e.getModifierState('Shift'));
    }
  };
 

 useEffect(() => {
    const characters = [...layouts[keymapLayout]]
     

     if (keymapStyle.match(/matrix/g)) {
      characters.splice(10, 2, '', '');
      characters.splice(22, 1, '');
    } 

    setKeys(characters.map((character) => ( { char : character , isActive : character.includes(lastLetter.current)} )))


 } , [keymapLayout , keymapStyle]) 



  useEffect(() => {
    if (mode !== 'zen' && keymap === 'next') {
      const nextLetter = testWords[wordIndex]?.letters.find((letter) => !letter.typed)?.original || ' ';
      if (keys && nextLetter !== lastLetter.current) {
        const newKeys = [...keys];
        newKeys.forEach((k) => {
          k.isActive = k.char.includes(nextLetter);
        });
        setKeys(newKeys);
        lastLetter.current = nextLetter;
      }
    } else if (keymap !== 'next' && lastLetter.current !== 'null') {
      lastLetter.current = 'null';
      if (keys) {
        const newKeys = [...keys];
        newKeys.forEach((k) => {
          k.isActive = false;
        });
        setKeys(newKeys);
      }
    }
  }, [mode, keymap, testWords, wordIndex, keys]);

 

  useEventListener(keymap === 'react' ? window : null, 'keydown', toggleActive);

  useEventListener(keymap === 'react' ? window : null, 'keyup', toggleActive);


  useEventListener(
    keymapLegendStyle === 'dynamic' ? window : null,
    'keydown',
    handleCapsLockShift,
  );


  useEventListener(
    keymapLegendStyle === 'dynamic' ? window : null,
    'keyup',
    handleCapsLockShift,
  );

  return (
    <Styled.Keymap
      style={{
        textTransform: isUppercase || keymapLegendStyle === 'uppercase'
          ? 'uppercase' : 'lowercase',
      }}
      $split={keymapStyle.includes('split')}
      $isMobile={ isMobile }
    >
      {Array(rows.length).fill(0).map((_, i) => (
        <Styled.Row key={i}>
          {keys?.slice(...rows[i]).map(({ char, isActive }) => char && (
            <Styled.Key key={char} $active={isActive} $isMobile={isMobile}>
              {getLegend(char)}
            </Styled.Key>
          ))}
        </Styled.Row>
      ))}

      <Styled.Row>
        {Array(keymapStyle.includes('split') ? 2 : 1).fill(0).map((_, i) => (
          <Styled.Key
          $isMobile={isMobile}
            key={i}
            id="spacebar"
            $active={!!keys?.at(-1)?.isActive}
          />
        ))}
      </Styled.Row>

      
    </Styled.Keymap>
  );
}

const layouts = {
  qwerty: [
    'Qq', 'Ww', 'Ee', 'Rr', 'Tt', 'Yy', 'Uu', 'Ii', 'Oo', 'Pp', '[{', ']}',
    'Aa', 'Ss', 'Dd', 'Ff', 'Gg', 'Hh', 'Jj', 'Kk', 'Ll', ';:', '\'"',
    'Zz', 'Xx', 'Cc', 'Vv', 'Bb', 'Nn', 'Mm', ',<', '.>', '/?', ' ',
  ],
  dvorak: [
    '\'"', ',<', '.>', 'Pp', 'Yy', 'Ff', 'Gg', 'Cc', 'Rr', 'Ll', '/?', '=+',
    'Aa', 'Oo', 'Ee', 'Ii', 'Uu', 'Dd', 'Hh', 'Tt', 'Nn', 'Ss', '-_',
    ';:', 'Qq', 'Jj', 'Kk', 'Xx', 'Bb', 'Mm', 'Ww', 'Vv', 'Zz', ' ',
  ],
  colemak: [
    'Qq', 'Ww', 'Ff', 'Pp', 'Gg', 'Jj', 'Ll', 'Uu', 'Yy', ';:', '[{', ']}',
    'Aa', 'Rr', 'Ss', 'Tt', 'Dd', 'Hh', 'Nn', 'Ee', 'Ii', 'Oo', '\'"',
    'Zz', 'Xx', 'Cc', 'Vv', 'Bb', 'Kk', 'Mm', ',<', '.>', '/?', ' ',
  ],
  workman: [
    'Qq', 'Dd', 'Rr', 'Ww', 'Bb', 'Jj', 'Ff', 'Uu', 'Pp', ';:', '[{', ']}',
    'Aa', 'Ss', 'Hh', 'Tt', 'Gg', 'Yy', 'Nn', 'Ee', 'Oo', 'Ii', '\'"',
    'Zz', 'Xx', 'Mm', 'Cc', 'Vv', 'Kk', 'Ll', ',<', '.>', '/?', ' ',
  ],
};
const specialChars = ['[{', ']}', ';:', '\'"', ',<', '.>', '/?', '=+', '-_'];

const rows = [[0, 12], [12, 23], [23, 33]];


export default Keymap;
