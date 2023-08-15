import { NextPage } from 'next';

const index: NextPage = () => {
	return (
		<div className="py-5 bg-body-tertiary">
			<div className="container">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					{/* <div className="col">
				<Card
					key={1}
					title="title"
					text="text"
					author="author"
					tags="tags"
				/>
			</div> */}
				</div>
			</div>
		</div>
	);
};

export default index;
