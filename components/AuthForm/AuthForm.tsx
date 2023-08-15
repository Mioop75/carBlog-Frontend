'use client';

import { useAppSelector } from '@/hooks/useDispatch';
import { useAppDispatch } from '@/hooks/useSelector';
import { RootState } from '@/store/store';
import { login, registration } from '@/store/users/users.action';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input/Input';
import { IAuthForm } from './AuthForm.interface';

const AuthForm: FC = () => {
	const [isRegistration, setIsRegistration] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IAuthForm>();

	const dispatch = useAppDispatch();
	const { error } = useAppSelector((state: RootState) => state.users);

	const { push } = useRouter();

	const onSubmit = (data: IAuthForm) => {
		if (!isValid) return false;

		if (isRegistration) {
			dispatch(registration(data));
		} else {
			dispatch(login(data));
		}

		// push('/');
	};

	return (
		<form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
			{isRegistration ? (
				<div className="container">
					<h2 className="text-center mb-5">Регистрация</h2>
					<div className="mb-3">
						<Input
							type="email"
							label="Email"
							{...register('email', {
								required: { message: 'Это поле обязательное', value: true },
							})}
							error={errors.email}
						/>
					</div>
					<div className="mb-3">
						<Input
							label="Username"
							{...register('username', {
								required: { message: 'Это поле обязательное', value: true },
							})}
							error={errors.username}
						/>
					</div>
					<div className="mb-3">
						<Input
							label="Password"
							type="password"
							{...register('password', {
								required: { message: 'Это поле обязательное', value: true },
							})}
							error={errors.password}
						/>
					</div>
					<div className="mb-3 form-check">
						<input
							type="checkbox"
							className={`form-check-input ${
								errors.isCheckbox && 'is-invalid'
							}`}
							id="check"
							{...register('isCheckbox', { required: true })}
						/>
						<label className="form-check-label" htmlFor="check">
							Подтвердить
						</label>
						{errors.isCheckbox && (
							<div id="check" className="invalid-feedback">
								Это обязательно
							</div>
						)}
					</div>
					<button type="submit" className="btn btn-primary">
						Зарегистрироваться
					</button>
					<div className="mt-3">
						Есть аккаунт?{' '}
						<button
							type="button"
							onClick={() => setIsRegistration(false)}
							className="border-0 bg-white text-primary"
						>
							Войти
						</button>
					</div>
				</div>
			) : (
				<div className="container">
					<h2 className="text-center mb-5">Войти</h2>
					<div className="mb-3">
						<Input
							label="Username"
							{...register('username', {
								required: { message: 'Это поле обязательное', value: true },
							})}
							error={errors.username}
						/>
					</div>
					<div className="mb-3">
						<Input
							label="Password"
							type="password"
							{...register('password', {
								required: { message: 'Это поле обязательное', value: true },
							})}
							error={errors.password}
						/>
					</div>
					{error && <div className="mb-3 text-danger">{error}</div>}
					<button type="submit" className="btn btn-primary">
						Войти
					</button>
					<div className="mt-3">
						Нет аккаунта?{' '}
						<button
							type="button"
							onClick={() => setIsRegistration(true)}
							className="border-0 bg-white text-primary"
						>
							Зарегистрироваться
						</button>
					</div>
				</div>
			)}
		</form>
	);
};

export default AuthForm;
