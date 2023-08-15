import { IBase } from './base';
import { IPost } from './post';

export interface ITag extends IBase {
	name: string;
	posts: IPost[];
}
