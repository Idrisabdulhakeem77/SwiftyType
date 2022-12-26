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

const initialState: SwiftTypes.Config = savedConfig
    ? { ...defaultConfig, ...JSON.parse(savedConfig) }
    : defaultConfig;



const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<SwiftTypes.Config['mode']>) => {
            state.mode = action.payload
        },
        setTime: (state, action: PayloadAction<SwiftTypes.Config["time"]>) => {
            const time = +action.payload
            if (!isNaN(time) && time < 3600) {
                state.time = time
            }

        },

        setWords: (state, action: PayloadAction<SwiftTypes.Config['words']>) => {
            const words = +action.payload
            if (!isNaN(words) && words < 5000) {
                state.words = words
            }
        },

        setQuickRestart: (state, action: PayloadAction<SwiftTypes.Config['quickRestart']>) => {
            state.quickRestart = action.payload
        },

        setBlindMode: (state, action: PayloadAction<SwiftTypes.Config['blindMode']>) => {
            state.blindMode = action.payload
        },

        setLanguage: (state, action: PayloadAction<SwiftTypes.Config['language']>) => {
            state.language = action.payload;
        },
        setFreedomMode: (state, action: PayloadAction<SwiftTypes.Config['freedomMode']>) => {
            state.freedomMode = action.payload;
        },
        setConfidenceMode: (state, action: PayloadAction<SwiftTypes.Config['confidenceMode']>) => {
            state.confidenceMode = action.payload;
        },
        setQuickEnd: (state, action: PayloadAction<SwiftTypes.Config['quickEnd']>) => {
            state.quickEnd = action.payload;
        },
        setIndicateTypos: (state, action: PayloadAction<SwiftTypes.Config['indicateTypos']>) => {
            state.indicateTypos = action.payload;
        },
        setHideExtraLetters: (state, action: PayloadAction<SwiftTypes.Config['hideExtraLetters']>) => {
            state.hideExtraLetters = action.payload;
        },
        setSoundVolume: (state, action: PayloadAction<SwiftTypes.Config['soundVolume']>) => {
            state.soundVolume = action.payload;
        },
        setSoundOnClick: (state, action: PayloadAction<SwiftTypes.Config['soundOnClick']>) => {
            state.soundOnClick = action.payload;
        },
        setSoundOnError: (state, action: PayloadAction<SwiftTypes.Config['soundOnError']>) => {
            state.soundOnError = action.payload;
        },
        setSmoothCaret: (state, action: PayloadAction<SwiftTypes.Config['smoothCaret']>) => {
            state.smoothCaret = action.payload;
        },
        setCaretStyle: (state, action: PayloadAction<SwiftTypes.Config['caretStyle']>) => {
            state.caretStyle = action.payload;
        },
        setTimerProgressStyle: (state, action: PayloadAction<SwiftTypes.Config['timerProgressStyle']>) => {
            state.timerProgressStyle = action.payload;
        },
        setStatsColor: (state, action: PayloadAction<SwiftTypes.Config['statsColor']>) => {
            state.statsColor = action.payload;
        },
        setStatsOpacity: (state, action: PayloadAction<SwiftTypes.Config['statsOpacity']>) => {
            state.statsOpacity = action.payload;
        },
        setSmoothLineScroll: (state, action: PayloadAction<SwiftTypes.Config['smoothLineScroll']>) => {
            state.smoothLineScroll = action.payload;
        },
        setShowDecimalPlaces: (state, action: PayloadAction<SwiftTypes.Config['showDecimalPlaces']>) => {
            state.showDecimalPlaces = action.payload;
        },
        setFontSize: (state, action: PayloadAction<SwiftTypes.Config['fontSize']>) => {
            state.fontSize = action.payload;
        },
        setFontFamily: (state, action: PayloadAction<SwiftTypes.Config['fontFamily']>) => {
            state.fontFamily = action.payload;
        },
        setPageWidth: (state, action: PayloadAction<SwiftTypes.Config['pageWidth']>) => {
            state.pageWidth = action.payload;
        },
        setTransitionSpeed: (state, action: PayloadAction<SwiftTypes.Config['transitionSpeed']>) => {
            state.transitionSpeed = action.payload;
        },
        setKeymap: (state, action: PayloadAction<SwiftTypes.Config['keymap']>) => {
            state.keymap = action.payload;
        },
        setKeymapLayout: (state, action: PayloadAction<SwiftTypes.Config['keymapLayout']>) => {
            state.keymapLayout = action.payload;
        },
        setKeymapStyle: (state, action: PayloadAction<SwiftTypes.Config['keymapStyle']>) => {
            state.keymapStyle = action.payload;
        },
        setKeymapLegendStyle: (state, action: PayloadAction<SwiftTypes.Config['keymapLegendStyle']>) => {
            state.keymapLegendStyle = action.payload;
        },
        setThemeName: (state, action: PayloadAction<SwiftTypes.Config['themeName']>) => {
            state.themeName = action.payload;
        },
        setFlipTestColors: (state, action: PayloadAction<SwiftTypes.Config['flipTestColors']>) => {
            state.flipTestColors = action.payload;
        },
        setColorfulMode: (state, action: PayloadAction<SwiftTypes.Config['colorfulMode']>) => {
            state.colorfulMode = action.payload;
        },
        addFavoriteTheme: (state, action: PayloadAction<SwiftTypes.Config['themeName']>) => {
            state.favoriteThemes = [...state.favoriteThemes, action.payload];
        },
        removeFavoriteTheme: (state, action: PayloadAction<SwiftTypes.Config['themeName']>) => {
            state.favoriteThemes = state.favoriteThemes.filter((theme) => theme !== action.payload);
        },
        setRandomTheme: (state, action: PayloadAction<SwiftTypes.Config['randomTheme']>) => {
            state.randomTheme = action.payload;
        },
        setTimerProgress: (state, action: PayloadAction<SwiftTypes.Config['timerProgress']>) => {
            state.timerProgress = action.payload;
        },
        setLiveWpm: (state, action: PayloadAction<SwiftTypes.Config['liveWpm']>) => {
            state.liveWpm = action.payload;
        },
        setLiveAccuracy: (state, action: PayloadAction<SwiftTypes.Config['liveAccuracy']>) => {
            state.liveAccuracy = action.payload;
        },
        setKeyTips: (state, action: PayloadAction<SwiftTypes.Config['keyTips']>) => {
            state.keyTips = action.payload;
        },
        setOutOfFocusWarning: (state, action: PayloadAction<SwiftTypes.Config['outOfFocusWarning']>) => {
            state.outOfFocusWarning = action.payload;
        },
        setCapsLockWarning: (state, action: PayloadAction<SwiftTypes.Config['capsLockWarning']>) => {
            state.capsLockWarning = action.payload;
        },





    }
})


export const { addFavoriteTheme, removeFavoriteTheme, setBlindMode, setCapsLockWarning, setCaretStyle, setColorfulMode, setConfidenceMode, setFlipTestColors, setFontFamily, setFontSize, setFreedomMode, setHideExtraLetters, setIndicateTypos, setKeyTips, setKeymap, setKeymapLayout, setKeymapLegendStyle, setKeymapStyle, setLanguage, setLiveAccuracy, setLiveWpm, setMode, setOutOfFocusWarning, setPageWidth, setQuickEnd, setQuickRestart, setRandomTheme, setShowDecimalPlaces, setSmoothCaret, setSmoothLineScroll, setSoundOnClick, setSoundOnError, setSoundVolume, setStatsColor, setStatsOpacity, setThemeName, setTime, setTimerProgress, setTimerProgressStyle, setTransitionSpeed, setWords } = configSlice.actions


export default configSlice.reducer