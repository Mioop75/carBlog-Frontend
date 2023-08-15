import { IPost } from '@/types/post';
import Link from 'next/link';
import { FC } from 'react';

const Card: FC<IPost> = post => {
	return (
		<div className="card shadow-sm">
			{/* <img src="..." className="card-img-top" alt="..."> */}
			<div className="card-body">
				<h5 className="card-title">{post.title}</h5>
				<p className="card-text">Author: {post.author.username}</p>
				<p className="card-text">{post.text}</p>
			</div>
			{post.tags && (
				<div className="list-group">
					{post.tags.map(tag => (
						<a href="#" className="list-group-item list-group-item-action">
							{tag.name}
						</a>
					))}
				</div>
			)}
			<div className="card-body">
				<Link href={`/post/${post.slug}`} className="btn btn-primary">
					Go somewhere
				</Link>
			</div>
		</div>
	);
};

export default Card;
