import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitSlice from './rootReducer';

const mainReducer = combineReducers({
	user: toolkitSlice,
});

export const store = configureStore({
	reducer: mainReducer,
});
