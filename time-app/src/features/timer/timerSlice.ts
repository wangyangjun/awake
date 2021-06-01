import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchTime } from "./timerAPI";

export interface TimerState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: TimerState = {
  value: 0,
  status: "idle"
};

export const fetchAsync = createAsyncThunk("timer/fetchTimer", async () => {
  return fetchTime();
});

export const counterSlice = createSlice({
  name: "timer",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAsync.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  }
});

export const selectTime = (state: RootState) => state.timer.value;

export default counterSlice.reducer;
