import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import http from "../../helpers/http";

export const login = createAsyncThunk("profile/login", async (request) => {
  const results = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post("/login", send, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    console.log(data);
    return results;
  } catch (e) {
    results.errormsg = e.response.data.massage;
    return results;
  }
});

export const register = createAsyncThunk(
  "profile/register",
  async (request) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      const { data } = await http().post("/register", send, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      console.log(data);
      return results;
    } catch (e) {
      const error = e.response.data.result;
      const errormsg = error.map((e) => {
        window.alert(e.msg);
        return e.msg;
      });
      results.errormsg = errormsg;
      return results;
    }
  }
);
