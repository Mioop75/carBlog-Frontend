import { IPostForm } from '@/components/PostForm/PostForm.interface';
import { api } from '@/config/api';
import { IPost } from '@/types/post';

class PostService {
	constructor() {}

	async getAll(): Promise<IPost[]> {
		return await api({ url: 'posts' });
	}

	async getOne(slug: string): Promise<IPost> {
		const post = await api({ url: `posts/${slug}` });

		return post;
	}

	async create(body: IPostForm): Promise<IPost> {
		const post = await api({
			url: 'posts',
			method: 'POST',
			body,
			contentType: 'multipart/form-data',
			isAuth: true,
		});
		return post;
	}

	async update(id: string, body: IPostForm): Promise<IPost> {
		const post = await api({
			url: `posts/${id}`,
			method: 'PUT',
			body,
			contentType: 'multipart/form-data',
			isAuth: true,
		});
		return post;
	}

	async delete(id: string): Promise<IPost> {
		const post = await api({ url: `posts/${id}`, method: 'DELETE' });
		return post;
	}
}

export default new PostService();
