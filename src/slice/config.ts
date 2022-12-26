import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const defaultConfig = {
    mode: 'time',
    time: 15,
    words: 10,
    quickRestart: 'tab',
    blindMode: 'off',
    language: 'english',
    freedomMode: 'off',
    confidenceMode: 'off',
    quickEnd: 'on',
    indicateTypos: 'replace',
    hideExtraLetters: 'off',
    soundVolume: 0.6,
    soundOnClick: 'nk creams',
    soundOnError: 'on',
    smoothCaret: 'on',
    caretStyle: 'default',
    timerProgressStyle: 'both',
    statsColor: 'main',
    statsOpacity: 0.5,
    smoothLineScroll: 'on',
    showDecimalPlaces: 'off',
    fontSize: 1.5,
    fontFamily: 'Lexend Deca',
    pageWidth: '1250px',
    transitionSpeed: 0.25,
    keymap: 'react',
    keymapLayout: 'qwerty',
    keymapStyle: 'staggered',
    keymapLegendStyle: 'blank',
    themeName: '',
    flipTestColors: 'off',
    colorfulMode: 'on',
    favoriteThemes: [],
    randomTheme: 'on',
    timerProgress: 'show',
    liveWpm: 'show',
    liveAccuracy: 'show',
    keyTips: 'show',
    outOfFocusWarning: 'show',
    capsLockWarning: 'show',
};


const savedConfig = localStorage.getItem("config")

const initialState: ApeTypes.Config = savedConfig
    ? { ...defaultConfig, ...JSON.parse(savedConfig) }
    : defaultConfig;
const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {

    }
})


export const { } = configSlice.actions


export default configSlice.reducer