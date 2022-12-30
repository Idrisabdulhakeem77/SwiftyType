import { m } from "framer-motion";
import styled from "styled-components";




const Wrapper = styled(m.div).attrs(() => ({
     initial : { opacity :0} ,
     animate : {opacity : 1} ,
     exit : {opacity : 0}
}))< {$top ?: boolean }>``


const Popup = styled.div< {$maxWidth ?: number } >``



const Styled = { Wrapper , Popup}


export default Styled