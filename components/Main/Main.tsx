'use client';

import { useAppDispatch } from '@/hooks/useSelector';
import { getMe } from '@/store/users/users.action';
import { FC, PropsWithChildren, useEffect } from 'react';

const Main: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			dispatch(getMe());
		}
	}, []);
	return <>{children}</>;
};

export default Main;
