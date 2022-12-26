import { useAppDispatch, useAppSelector } from "./hooks";
import { ThemeProvider } from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages";
import { useCallback } from "react";

const App = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { theme, commandLine } = useAppSelector(({ app }) => app);
  const config = useAppSelector(({ config }) => config);

  const {
    quickRestart,
    language,
    fontFamily,
    pageWidth,
    transitionSpeed,
    themeName,
    randomTheme,
    favoriteThemes,
  } = config;

  const setRandomTheme = useCallback(
     async() => {
       if(randomTheme === "off") return
      //  let filteredThemes = 
     },
    [ ],
  )

  return (
    <ThemeProvider theme={{ ...theme }}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home setRandomTheme={setRandomTheme} />}>
          
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
