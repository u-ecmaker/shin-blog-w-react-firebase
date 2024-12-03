import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import channelReducer from "../features/channelSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        channel: channelReducer
    }
});

export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>; // OLD
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>