import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../slice/app'
import configReducer from '../slice/config'
import typeTestingReducer from '../slice/typingTest'

 


const store = configureStore({
    reducer: {
        app: appReducer,
        config: configReducer,
        type: typeTestingReducer
    }
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store