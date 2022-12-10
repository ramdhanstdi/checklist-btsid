import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../asyncACtion/auth";

const initialState = {
  token: "",
};

export const auth = createSlice({
  name: "auth",
  initialState,
  extraReducers: (build) => {
    build.addCase(login.pending, (state) => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      const token = action.payload?.token;
      const id = action.payload?.id;
      if (token) {
        state.token = token;
        state.id = id;
      } else {
        state.errormsg = action.payload?.errormsg;
        state.successmsg = action.payload?.successmsg;
      }
    });
    build.addCase(register.pending, (state) => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(register.fulfilled, (state, action) => {
      state.errormsg = action.payload?.errormsg;
      state.successmsg = action.payload?.successmsg;
    });
  },
});

export const { costumeEmail, resetEmail, resetMsg } = auth.actions;
export default auth.reducer;
