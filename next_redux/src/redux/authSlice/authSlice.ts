import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AuthType = {
    isAuthenticated: boolean;
    username: string;
    uid: string;
    isModerator: boolean
}

export  type InitialStateType = {
    value: AuthType
}


const initilState = {
    value : {
        isAuthenticated : false,
        username: "",
        uid: "",
        isModerator: false
    } as AuthType
} as InitialStateType;

export const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState : initilState,
    reducers: {
        logOut : (state, action:any) => {
            return initilState;
        },
        logIn : (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuthenticated: true,
                    username: action.payload,
                    uid: Math.random().toString(),
                    isModerator: false
                }
            }
        }
    }  
})

export const {logOut,logIn} = AuthSlice.actions;
export default AuthSlice.reducer;