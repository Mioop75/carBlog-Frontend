import { IUser } from '@/types/user';

export interface IInitilaState {
	isLoading: boolean;
	user: IUser | null;
	error?: any;
}
