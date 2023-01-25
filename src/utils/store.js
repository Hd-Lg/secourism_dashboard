import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import navbarReducer from "../features/navbarSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		navbar: navbarReducer,
	},
});
