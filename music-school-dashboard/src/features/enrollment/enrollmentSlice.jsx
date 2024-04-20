import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [],
};

export const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
  },
});

export const { setEnrollments } = enrollmentSlice.actions;

export const selectEnrollments = (state) => state.enrollment.enrollments;

const enrollmentReducer = enrollmentSlice.reducer;

export default enrollmentReducer;
