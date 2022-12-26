import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../slice/app'
import configReducer from '../slice/config'



const store = configureStore({
    reducer: {
        app: appReducer,
        config: configReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store