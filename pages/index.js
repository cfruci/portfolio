import Link from "next/link";

function HomePage() {
	return (
		<>
			<h1>Home Page</h1>
			<ul>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/experience">Experience</Link>
				</li>
				<li>
					<Link href="/projects">Projects</Link>
				</li>
				<li>
					<Link href="/writing">Writing</Link>
				</li>
			</ul>
		</>
	);
}

export default HomePage;
