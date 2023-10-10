import Link from "next/link";

function Writing() {
	const blogs = [
		{
			id: "crockpot",
			title: "How A Crockpot Changed My Life",
		},
		{
			id: "twenties",
			title: "No, You Didn't Waste Your Twenties",
		},
		{
			id: "upwork",
			title: "How to Win Clients On Upwork",
		},
	];

	return (
		<>
			<h1>Writing</h1>
			<ul>
				{blogs.map((post) => {
					return (
						<li key={post.id}>
							<Link href={`/writing/${post.id}`}>{post.title}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default Writing;
