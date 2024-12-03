import { createSlice } from "@reduxjs/toolkit";
import { InitialUserState } from "../Types";

const initialState: InitialUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // 他のファイルでディスパッチされたアクションを受け取る
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// console.log(userSlice);

export const { login, logout } = userSlice.actions; // 分割代入: loginとlogoutにactionsを格納
export default userSlice.reducer;
