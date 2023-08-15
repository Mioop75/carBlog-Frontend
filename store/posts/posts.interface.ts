import { IPost } from '@/types/post';

export interface IPosts {
	posts: IPost[] | null;
	isLoading: boolean;
	error: any;
}
