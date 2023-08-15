import { api } from '@/config/api';
import { IUser } from '@/types/user';

class UserService {
	async getProfile(username: string): Promise<IUser> {
		const res = await api({ url: `users/${username}` });
		return res;
	}
}

export default new UserService();
