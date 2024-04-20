import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bestStudents: [],
};

const bestStudentSlice = createSlice({
  name: "bestStudent",
  initialState,
  reducers: {
    setBestStudents(state, action) {
      state.bestStudents = action.payload;
    },
  },
});

export const { setBestStudents } = bestStudentSlice.actions;

export const selectBestStudents = (state) => state.bestStudent.bestStudents;

const bestStudentReducer = bestStudentSlice.reducer;

export default bestStudentReducer;
