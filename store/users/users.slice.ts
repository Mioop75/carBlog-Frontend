import { createSlice } from '@reduxjs/toolkit';
import { getMe, login, registration } from './users.action';
import { IInitilaState } from './users.interface';

const initialState: IInitilaState = {
	isLoading: false,
	user: null,
	error: null,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		logout() {
			localStorage.removeItem('accessToken');
			localStorage.removeItem('refreshToken');
		},
	},
	extraReducers(builder) {
		builder.addCase(registration.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(registration.fulfilled, (state, action) => {
			state.isLoading = true;
			state.user = action.payload;
		});
		builder.addCase(registration.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(login.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.isLoading = true;
			state.user = action.payload;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(getMe.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getMe.fulfilled, (state, action) => {
			state.user = action.payload;
			state.isLoading = false;
		});
		builder.addCase(getMe.rejected, state => {
			state.isLoading = false;
			state.error = 'Error';
		});
	},
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
