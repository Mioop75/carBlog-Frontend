import { IUser } from '@/types/user';

export interface IAuthForm
	extends Pick<IUser, 'email' | 'username' | 'password'> {
	isCheckbox: boolean;
}
