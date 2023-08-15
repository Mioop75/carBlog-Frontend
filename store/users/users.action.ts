import { IAuthForm } from '@/components/AuthForm/AuthForm.interface';
import AuthService from '@/services/auth.service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registration = createAsyncThunk(
	'auth/register',
	async (user: IAuthForm, thunkAPI) => {
		try {
			const res = await AuthService.register(user);

			if (!res.ok) {
				return thunkAPI.rejectWithValue(res.message);
			}

			return res.user;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const login = createAsyncThunk(
	'auth/login',
	async (user: IAuthForm, thunkAPI) => {
		try {
			const res = await AuthService.login(user);

			if (!res.ok) {
				return thunkAPI.rejectWithValue(res.message);
			}

			return res.user;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const getMe = createAsyncThunk('auth/getMe', async () => {
	const res = await AuthService.getMe();

	return res.user;
});
