'use client';

import { useAppSelector } from '@/hooks/useDispatch';
import { RootState } from '@/store/store';
import { logout } from '@/store/users/users.slice';
import Link from 'next/link';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

const Header: FC = () => {
	const user = useAppSelector((state: RootState) => state.users.user);

	const dispatch = useDispatch();

	const logoutHandle = () => {
		dispatch(logout());
	};

	return (
		<nav
			className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-white border-bottom border-bottom-dark"
			data-bs-theme="dark"
		>
			<div className="container">
				<a className="navbar-brand" href="#">
					Blog
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" href="/">
								Главная
							</Link>
						</li>
						{user ? (
							<>
								<li className="nav-item">
									<Link className="nav-link" href={`/profile/${user.username}`}>
										Мой профиль
									</Link>
								</li>
								<button className="btn btn-primary" onClick={logoutHandle}>
									Выйти
								</button>
							</>
						) : (
							<li className="nav-item">
								<Link className="nav-link" href="/auth">
									Авторизация
								</Link>
							</li>
						)}
					</ul>
					<div className="d-flex items-center">
						{/* {user && (
							<Link href="/post/create" className="btn btn-primary">
								Создать пост
							</Link>
						)} */}
						<form className="d-flex ms-3" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success" type="submit">
								Искать
							</button>
						</form>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
