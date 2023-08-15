import { combineReducers } from '@reduxjs/toolkit';
import PostsReducer from './posts/posts.slice';
import UsersReducer from './users/users.slice';

const rootReducers = combineReducers({
	users: UsersReducer,
	posts: PostsReducer,
});

export default rootReducers;
