import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: false,
        token: ""
    },
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
})

export const { setLogin, setToken } = authSlice.actions;
export default authSlice.reducer;