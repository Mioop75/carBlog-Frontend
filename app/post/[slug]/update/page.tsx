import PostForm from '@/components/PostForm/PostForm';
import postService from '@/services/post.service';
import { NextPage } from 'next';

const index: NextPage<{ params: { slug: string } }> = async ({ params }) => {
	const post = await postService.getOne(params.slug);

	return <PostForm post={post} />;
};

export default index;
