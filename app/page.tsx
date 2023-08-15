'use client';
import Card from '@/components/Card/Card';
import Loader from '@/components/Loader/Loader';
import { useAppSelector } from '@/hooks/useDispatch';
import { useAppDispatch } from '@/hooks/useSelector';
import { getAll } from '@/store/posts/posts.action';
import { RootState } from '@/store/store';
import { useEffect } from 'react';

export default function Home() {
	const { posts, isLoading } = useAppSelector(
		(state: RootState) => state.posts
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAll(null));
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="py-5 bg-body-tertiary">
			<div className="container">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					{posts?.map((post, i) => (
						<div className="col">
							<Card key={post.id} {...post} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
