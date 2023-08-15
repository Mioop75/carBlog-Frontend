import postService from '@/services/post.service';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const index: NextPage<{ params: { slug: string } }> = async ({ params }) => {
	const post = await postService.getOne(params.slug);
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
					<div className="ms-2">{post.author.username}</div>
				</Link>
				<Image
					src="https://images.unsplash.com/photo-1690046793092-f8d634523264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
					alt=""
					width={300}
					height={300}
					className="mb-3"
				/>
				<div className="mb-3">{post.created_at}</div>
				<h2 className="mb-3">{post.title}</h2>
				<div className="mb-3">{post.text}</div>
				{post.tags && (
					<ul className="list-group mb-3">
						{post.tags.map(tag => (
							<li className="list-group-item">{tag.name}</li>
						))}
					</ul>
				)}
			</div>
			<div className="container mt-4 border rounded p-3">
				<h2 className="mb-2">Comments</h2>
				<form className="mb-3">
					<div className="mb-3 form-floating">
						<textarea
							className="form-control"
							placeholder="Leave a comment here"
							id="floatingTextarea2"
							style={{ height: '100px' }}
						></textarea>
						<label htmlFor="floatingTextarea2">Comments</label>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
				<div>
					{post.comments &&
						post.comments.map(comment => (
							<div className="d-flex justify-content-between align-items-center border rounded p-2">
								<div className="me-3">{comment.text}</div>
								<Link
									href="/"
									className="d-flex align-items-center text-decoration-none"
								>
									<Image
										src="https://images.unsplash.com/photo-1690046793092-f8d634523264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
										alt=""
										width={50}
										height={50}
										className="rounded-circle"
									/>
									<div className="ms-2">{comment.author.username}</div>
								</Link>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default index;
