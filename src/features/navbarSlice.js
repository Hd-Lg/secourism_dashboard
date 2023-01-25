import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: true,
};

export const navbarSlice = createSlice({
	name: "navbar",
	initialState,
	reducers: {
		openNavbar: (state) => {
			state.isOpen = true;
		},
		closeNavbar: (state) => {
			state.isOpen = false;
		},
	},
});

export const { openNavbar, closeNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
