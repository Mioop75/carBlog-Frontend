import { IBase } from './base';
import { IComment } from './comment';
import { IPost } from './post';

export interface IUser extends IBase {
	avatar?: string;
	email: string;
	username: string;
	password: string;
	posts: IPost[];
	comments: IComment[];
}
