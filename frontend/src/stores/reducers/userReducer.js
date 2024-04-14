import { createSlice } from "@reduxjs/toolkit";

const userInitialState = { userInfo: null };

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    serUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

const userAction = userSlice.actions;

const userReducer = userSlice.reducer;

export { userAction, userReducer };