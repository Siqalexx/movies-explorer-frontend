import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

const initialState = {
	email: 'ss',
	name: '',
};

const toolkitSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setUser(state, action) {
			state.email = action.payload.email;
			state.name = action.payload.name;
		},
		removeUser(state) {
			state.email = '';
			state.name = '';
		},
	},
});

export default toolkitSlice.reducer;
export const { setUser, removeUser } = toolkitSlice.actions;
