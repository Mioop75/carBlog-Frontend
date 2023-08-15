import { IPostForm } from '@/components/PostForm/PostForm.interface';
import postService from '@/services/post.service';
import { IPost } from '@/types/post';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAll = createAsyncThunk<IPost[], null>('posts', async () => {
	return await postService.getAll();
});

export const createPost = createAsyncThunk<IPost, IPostForm>(
	'posts/create',
	async (body, thunkAPI) => {
		const post = await postService.create(body);
		return post;
	}
);

export const updatePost = createAsyncThunk<
	IPost,
	Pick<IPost, 'id' | 'title' | 'text'>
>('posts/update', async ({ text, title, id }, thunkAPI) => {
	const post = await postService.update(String(id), { title, text });
	return post;
});

export const deletePost = createAsyncThunk<IPost, { id: string }>(
	'posts/delete',
	async ({ id }, thunkAPI) => {
		const post = await postService.delete(id);
		return post;
	}
);
