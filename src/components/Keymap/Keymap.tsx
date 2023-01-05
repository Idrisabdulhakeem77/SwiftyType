import { useState , useEffect , useRef } from "react"
import Styled from "./keymap.styles"
import useEventListener from "use-typed-event-listener"
import { useAppSelector } from "../../app/hooks"


const Keymap = () => {
    
    const { keymap , keymapLayout , keymapLegendStyle , keymapStyle , mode } = useAppSelector(({config}) => config)
   
    const { testWords , wordIndex } = useAppSelector(( {type}) => type)

   const [ shift , setShift] = useState(false)


    const getLegend = (char : string) => {
        switch(keymapLegendStyle) {
             case 'lowercase':
             case 'uppercase' :
                 return char[0] ;
             
             case 'dynamic' : 
               return specialChars.includes(char) ? char[+shift] : char[0] ;

            default : 
               return null
        }
    }
 
     return (
         <Styled.Keymap>
               KeyMap bitches
         </Styled.Keymap>
     )
}





const specialChars = ['[{', ']}', ';:', '\'"', ',<', '.>', '/?', '=+', '-_'];
export default Keymap