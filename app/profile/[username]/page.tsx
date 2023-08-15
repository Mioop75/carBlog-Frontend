import Card from '@/components/Card/Card';
import userService from '@/services/user.service';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const index: NextPage<{ params: { username: string } }> = async ({
	params,
}) => {
	const user = await userService.getProfile(params.username);

	return (
		<div>
			<div className="container mt-4 border rounded p-3">
				<Link
					href="/"
					className="d-flex align-items-center mb-4 text-decoration-none"
				>
					<Image
						src="https://images.unsplash.com/photo-1690046793092-f8d634523264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
						alt=""
						width={50}
						height={50}
						className="rounded-circle"
					/>
					<div className="ms-2">{user.username}</div>
				</Link>
				<Image
					src="https://images.unsplash.com/photo-1690046793092-f8d634523264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
					alt=""
					width={300}
					height={300}
					className="mb-3"
				/>
				<div className="mb-3">Дата регистрации:{user.created_at}</div>
			</div>
			{user.posts && (
				<div className="container mt-4 border rounded p-3">
					<h2 className="mb-2">Posts</h2>
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
						{user.posts?.map((post, i) => (
							<div className="col">
								<Card key={post.id} {...post} />
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default index;
