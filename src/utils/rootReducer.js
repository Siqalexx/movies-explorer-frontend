import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	email: '',
	name: '',
};

const toolkitSlice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		setUser(state, action) {
			state.email = action.payload.email;
			state.name = action.payload.name;
		},
		removeUser(state) {
			return (state = {});
		},
	},
});

export default toolkitSlice.reducer;
export const { setUser, removeUser } = toolkitSlice.actions;
