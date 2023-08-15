'use client';

import { useAppDispatch } from '@/hooks/useSelector';
import { IPost } from '@/types/post';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input/Input';
import { IPostForm } from './PostForm.interface';

const PostForm: FC<{ post?: IPost }> = ({ post }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IPostForm>();

	const dispatch = useAppDispatch();

	const onSubmit = (data: IPostForm) => {
		if (!isValid) return false;
		const formData = new FormData();
		formData.append('ta', 'asf');

		// postService.create(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			method="POST"
			encType="multipart/form-data"
			className="mt-5"
		>
			<div className="container">
				<h2 className="text-center mb-5">Создание поста</h2>
				<div className="mb-3">
					<label htmlFor="formFile" className="form-label">
						Preview
					</label>
					<input
						className="form-control"
						type="file"
						id="formFile"
						{...register('preview')}
					/>
				</div>
				<div className="mb-3">
					<Input
						label="Title"
						{...register('title', {
							required: { message: 'Это поле обязательное', value: true },
						})}
						error={errors.title}
					/>
				</div>
				<div className="mb-3">
					<Input
						label="Text"
						{...register('text', {
							required: { message: 'Это поле обязательное', value: true },
						})}
						error={errors.text}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Создать пост
				</button>
			</div>
		</form>
	);
};

export default PostForm;
