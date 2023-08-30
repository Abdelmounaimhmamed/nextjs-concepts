import {configureStore} from "@reduxjs/toolkit"
import AuthReducer from "./authSlice/authSlice";


const store = configureStore({
    reducer :{
        authReducer : AuthReducer
    }
})


export  default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

