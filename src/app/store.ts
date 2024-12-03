import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export const store = configureStore({
    reducer: userReducer
});

export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>; // OLD
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>