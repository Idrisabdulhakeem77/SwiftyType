import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface State {
     testLanguage: {
          name: string;
          words: string[];
     },
     testWords: SwiftTypes.Word[];
     wordIndex: number;
     inputValue: string;
     raw: number;
     wpm: number;
     characterCount: number;
     errorCount: number;
     stats: {
          raw: number[];
          wpm: number[];
          characterCount: number[];
          errorCount: number[];
     };
     timer: number;
     startTime: number;
     elapsedTime: number;
     isReady: boolean;
     isRunning: boolean;
     isTyping: boolean;
     isFinished: boolean;
     isTestPopupOpen: boolean;
}

const initialState: State = {
     testLanguage: {
          name: 'english', // swap back to empty string
          words: ["idris", "abdulhakeem"], // swap back to empty array
     },
     testWords: [],
     wordIndex: 0,
     inputValue: '',
     raw: 0,
     wpm: 0,
     characterCount: 0,
     errorCount: 0,
     stats: {
          raw: [],
          wpm: [],
          characterCount: [],
          errorCount: [],
     },
     timer: Infinity,
     startTime: 0,
     elapsedTime: 0,
     isReady: false,
     isRunning: false,
     isTyping: false,
     isFinished: false,
     isTestPopupOpen: false,
}


const typingTest = createSlice({
     name: "typeTesting",
     initialState,

     reducers: {
          setTestLanguage: (state, action: PayloadAction<{ name: string, words: string[] }>) => {
               const { name, words } = action.payload
               if (name !== state.testLanguage.name) {
                    state.testLanguage = { name, words }
               }
          },
          setTimer: (state, action: PayloadAction<number>) => {
               state.timer = action.payload
               state.isRunning = true
          },

          decrementTimer: (state) => {
               state.timer--;
          },
          setIsTestPopupOpen: (state, action: PayloadAction<boolean>) => {
               state.isTestPopupOpen = action.payload
          },
          addTestWords: () => {

          },
          setIsReady: () => { },


          checkInput: (state , action : PayloadAction< { value : string , config : SwiftTypes.Config} > ) => { },


          setIsTyping: ( state , action : PayloadAction<boolean>) => {
               state.isTyping = action.payload 
           },



          startTest: (state, action: PayloadAction<number>) => {
               const timestamp = action.payload
               state.startTime = +timestamp.toFixed(2)
               state.isRunning = true

          },


          resetTest: () => { }


     }
})


export const { setTestLanguage, setTimer, decrementTimer, setIsTestPopupOpen, addTestWords, checkInput, setIsReady, setIsTyping, startTest, resetTest } = typingTest.actions


export default typingTest.reducer