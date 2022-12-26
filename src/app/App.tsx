import { useAppDispatch , useAppSelector } from "./hooks";
import { ThemeProvider} from 'styled-components'
import { Routes , Route, useLocation} from 'react-router-dom'




const App = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
 

  const { theme , commandLine   } = useAppSelector( ( { app} ) => app )


  return (
     <ThemeProvider theme={{...theme}}>
           
     </ThemeProvider>
  );
};

export default App;
