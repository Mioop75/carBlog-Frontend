'use client';

import Input from '@/components/Input/Input';
import { useAppSelector } from '@/hooks/useDispatch';
import { useAppDispatch } from '@/hooks/useSelector';
import { RootState } from '@/store/store';
import { IUser } from '@/types/user';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

const index: NextPage<{ params: { username: string } }> = ({ params }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<Pick<IUser, 'avatar' | 'username' | 'password'>>();

	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state: RootState) => state.users);

	const onSubmit = (data: Pick<IUser, 'avatar' | 'username' | 'password'>) => {
		if (!isValid) return false;
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="container mt-5">
			<div className="mb-3">
				<label htmlFor="formFile" className="form-label">
					Avatar
				</label>
				<input
					className="form-control"
					type="file"
					id="formFile"
					value={user?.avatar}
					{...register('avatar')}
				/>
			</div>
			<div className="mb-3">
				<Input
					label="Username"
					value={user?.username}
					{...register('username')}
					error={errors.username}
				/>
			</div>
			<div className="mb-3">
				<Input
					type="password"
					label="Новый пароль"
					{...register('password')}
					error={errors.password}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Редактировать
			</button>
		</form>
	);
};

export default index;
