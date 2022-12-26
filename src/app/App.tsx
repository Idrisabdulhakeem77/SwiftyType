import { useAppDispatch, useAppSelector } from "./hooks";
import { ThemeProvider } from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages";

const App = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { theme, commandLine } = useAppSelector(({ app }) => app);



  const setRandomTheme = () => {
     
  }
 
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Routes location={location} key={location.pathname}>
         <Route path="/" element={<Home setRandomTheme={setRandomTheme}/>}>  </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
