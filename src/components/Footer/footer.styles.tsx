import { m} from 'framer-motion'

import styled from 'styled-components'


const Footer = styled.footer``


const Buttons = styled(m.div).attrs(() => ( {
    initial : { opacity : 0 } ,
    animate : { opacity : 1} ,
    exit : { opacity :  0 }
     
} ))``



const Styled = { Footer , Buttons}

export default Styled