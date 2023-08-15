import { createSlice } from '@reduxjs/toolkit';
import { createPost, deletePost, getAll, updatePost } from './posts.action';
import { IPosts } from './posts.interface';

const initialState: IPosts = {
	posts: null,
	isLoading: false,
	error: null,
};

export const postsSlice = createSlice({
	name: 'psots',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getAll.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getAll.fulfilled, (state, action) => {
			state.isLoading = false;
			state.posts = action.payload;
		});
		builder.addCase(getAll.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(createPost.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(createPost.fulfilled, (state, action) => {
			state.isLoading = false;
			state.posts = [action.payload];
		});
		builder.addCase(createPost.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(updatePost.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(updatePost.fulfilled, (state, action) => {
			state.isLoading = false;
			state.posts = [action.payload];
		});
		builder.addCase(updatePost.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(deletePost.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(deletePost.fulfilled, (state, action) => {
			state.isLoading = false;
			state.posts = null;
		});
		builder.addCase(deletePost.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export default postsSlice.reducer;
