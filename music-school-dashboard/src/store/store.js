import bestStudentReducer from "@/features/bestStudent/bestStudentSlice";
import enrollmentReducer from "@/features/enrollment/enrollmentSlice";
import courseReducer from "@/features/course/courseSlice";
import authReducer from "@/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        enrollment: enrollmentReducer,
        bestStudent: bestStudentReducer,
        course: courseReducer,
        auth: authReducer,
    }
});

export default store;