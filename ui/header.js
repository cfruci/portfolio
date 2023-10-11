import Link from "next/link";
import classes from "./header.module.css";

function Header() {
	return (
		<>
			<div>Logo</div>
			<ul>
				<Link href="/">Home</Link>
			</ul>
		</>
	);
}

export default Header;
