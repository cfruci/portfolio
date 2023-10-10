import { useRouter } from "next/router";

function BlogPost() {
	const router = useRouter();
	const blogTitle = router.query.blogId;

	return (
		<>
			<h1>Blog Title</h1>
			{blogTitle}
		</>
	);
}

export default BlogPost;
