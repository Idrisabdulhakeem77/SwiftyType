import Styled from "./header.styles"
import { useNavigate , useLocation  } from 'react-router-dom'
import { useAppSelector } from "../../app/hooks"
import {RiKeyboardBoxFill} from 'react-icons/ri'
import { LogoIcon } from "../ui"



const Header = () => {

     const {  isTyping } = useAppSelector(({type}) => type )
     const {  mode , time , words  } = useAppSelector(({config}) => config )
   
    const navigate = useNavigate()
    const location  = useLocation()
    
    const menuButtons  =  [
         { title : "Home" , to :'/' , icon : <RiKeyboardBoxFill/> } ,
         { title : "Settings" , to :'/setting' , icon : <RiKeyboardBoxFill/> } 
        ]

     return (
        <Styled.Header>
          <Styled.Logo>
              <LogoIcon/>
          </Styled.Logo>
              Am the header component
        </Styled.Header>
     )
}


export default Header