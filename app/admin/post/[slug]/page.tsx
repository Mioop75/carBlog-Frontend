import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const index: NextPage<{ params: { slug: string } }> = ({ params }) => {
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
					<div className="ms-2">Matvey</div>
				</Link>
				<Image
					src="https://images.unsplash.com/photo-1690046793092-f8d634523264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
					alt=""
					width={300}
					height={300}
					className="mb-3"
				/>
				<div className="mb-3">15.05.2023</div>
				<h2 className="mb-3">Hello world</h2>
				<div className="mb-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit
					alias veniam laborum eos ducimus nobis ipsa molestias hic quos?
				</div>
				<ul className="list-group mb-3">
					<li className="list-group-item">An item</li>
					<li className="list-group-item">A second item</li>
					<li className="list-group-item">A third item</li>
					<li className="list-group-item">A fourth item</li>
					<li className="list-group-item">And a fifth one</li>
				</ul>
			</div>
			<div className="container mt-4 border rounded p-3">
				<h2 className="mb-2">Comments</h2>
				<form className="mb-3">
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
						<div id="emailHelp" className="form-text">
							We'll never share your email with anyone else.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
						/>
					</div>
					<div className="mb-3 form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" htmlFor="exampleCheck1">
							Check me out
						</label>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
				<div>
					<div className="d-flex justify-content-between align-items-center border rounded p-2">
						<div className="me-3">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
							ea voluptatum deserunt enim sit odit dicta laboriosam accusamus
							quaerat adipisci nisi veniam sed neque saepe rem nesciunt libero,
							aperiam est non eveniet consequuntur cum magnam? Rem, reiciendis
							cupiditate? Commodi praesentium, veniam voluptatibus nesciunt esse
							doloribus ipsum facere aut laborum nam.
						</div>
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
							<div className="ms-2">Matvey</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
