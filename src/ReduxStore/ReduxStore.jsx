import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice"
import tourReducer from "../Slices/TourSlice"


const store = configureStore({
    reducer: {
        auth: authReducer,
        tour:tourReducer
    }
})

export default store;