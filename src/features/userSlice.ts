import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // 他のファイルでディスパッチされたアクションを受け取る
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
