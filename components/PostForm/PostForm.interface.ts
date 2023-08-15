import { IPost } from '@/types/post';

export interface IPostForm extends Pick<IPost, 'preview' | 'title' | 'text'> {}
