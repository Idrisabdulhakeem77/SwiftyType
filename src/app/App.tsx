import { useAppDispatch, useAppSelector } from "./hooks";
import { ThemeProvider } from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages";
import { useCallback, useEffect } from "react";
import themes from "../themes/_list";
import { setTheme } from "../slice/app";
import { setThemeName } from "../slice/config";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  MotionConfig,
} from "framer-motion";
import Styled, { GlobalStyle } from "./App.styled";

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

  // Default value for the randomTheme is "on"
  const setRandomTheme = useCallback(async () => {
    if (randomTheme === "off") return;

    // removing themeName from array of themes
    let filteredThemes = themes.filter((t) => t.name !== themeName);

    // remove themes with either light ot darkmode
    if (randomTheme === "light" || randomTheme === "dark") {
      filteredThemes = filteredThemes.filter((t) => t.mode === randomTheme);
    } else if (randomTheme === "favorite") {
      filteredThemes = filteredThemes.filter((t) =>
        favoriteThemes.includes(t.name)
      );
    }

    const newTheme =
      filteredThemes[Math.floor(Math.random() * filteredThemes.length)];

    if (newTheme) {
      dispatch(setThemeName(newTheme.name));
    }
  }, [dispatch, randomTheme, themeName, favoriteThemes]);

  return (
    <ThemeProvider theme={{ ...theme, fontFamily }}>
      <LazyMotion features={domAnimation}>
        <MotionConfig transition={{ opacity: { duration: transitionSpeed } }}>
          <GlobalStyle />
          <Styled.App>
            <Styled.Content>
           <AnimatePresence>
              {/* { commandLine.isOpen && } */}
           </AnimatePresence>

              <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                  <Route
                    path="/"
                    element={<Home setRandomTheme={setRandomTheme} />}
                  />
                </Routes>
              </AnimatePresence>
            </Styled.Content>
          </Styled.App>
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
};

export default App;
