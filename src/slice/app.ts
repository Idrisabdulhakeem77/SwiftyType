import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DefaultTheme } from 'styled-components'
import defaultTheme from '../themes/dark'



interface State {
    theme: DefaultTheme
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

        },

        setCommandLine: (state, action: PayloadAction<{ isOpen: boolean, initial?: string }>) => {

        },

        setCapsLock: (state, action: PayloadAction<boolean>) => { }

    }
})


export const { setCapsLock, setCommandLine, setTheme } = slice.actions

export default slice.reducer