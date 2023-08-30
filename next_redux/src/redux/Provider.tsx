

"use client";
import React from "react";
import store from "./store";
import { Provider } from "react-redux";

type childrenType = {
    children: React.ReactNode
}


export const ReduxProvider = ({children}: childrenType ) => {
    return <Provider store={store} >{children}</Provider>
}