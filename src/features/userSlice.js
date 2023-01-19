import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "Jean",
	isConnected: false,
	isAdmin: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		connected: (state) => (state.isConnected = true),
		admin: (state) => (state.isAdmin = true),
	},
});

export const { connected, admin } = userSlice.actions;

export default userSlice.reducer;
