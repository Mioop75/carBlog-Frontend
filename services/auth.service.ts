import { IAuthForm } from '@/components/AuthForm/AuthForm.interface';
import { api } from '@/config/api';

class AuthService {
	async register(data: IAuthForm) {
		const res = await api({ url: 'auth/register', body: data, method: 'POST' });

		localStorage.setItem('accessToken', res.accessToken);
		localStorage.setItem('refreshToken', res.refreshToken);
		return res;
	}

	async login(data: IAuthForm) {
		const res = await api({ url: 'auth/login', body: data, method: 'POST' });

		localStorage.setItem('accessToken', res.accessToken);
		localStorage.setItem('refreshToken', res.refreshToken);

		return res;
	}

	async getMe() {
		const res = await api({
			url: 'auth/getMe',
			isAuth: true,
		});

		localStorage.setItem('accessToken', res.accessToken);
		localStorage.setItem('refreshToken', res.refreshToken);
		return res;
	}
}

export default new AuthService();
