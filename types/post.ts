import { IBase } from './base';
import { IComment } from './comment';
import { ITag } from './tag';
import { IUser } from './user';

export interface IPost extends IBase {
	preview?: string;
	title: string;
	slug: string;
	text: string;
	tags: ITag[];
	author: IUser;
	comments: IComment[];
}
