import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DefaultTheme } from 'styled-components'
import defaultTheme from '../themes/dark'



interface State {
    theme: Omit<DefaultTheme, "fontFamily">
    commandLine: {
        isOpen: boolean,
        initial: string
    }
    capsLock: boolean
}


const initialState: State = {
    theme: defaultTheme,
    commandLine: {
        isOpen: false,
        initial: ""
    },
    capsLock: false

}


const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<DefaultTheme>) => {
            state.theme = action.payload
        },

        setCommandLine: (state, action: PayloadAction<{ isOpen: boolean, initial?: string }>) => {
            const { isOpen, initial } = action.payload
            state.commandLine = {
                initial: initial || "",
                isOpen,
            }
        },

        setCapsLock: (state, action: PayloadAction<boolean>) => {
            state.capsLock = action.payload
        }

    }
})


export const { setCapsLock, setCommandLine, setTheme } = slice.actions

export default slice.reducer