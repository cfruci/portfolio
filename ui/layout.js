import Header from "./header";
import classes from "./layout.module.css";

function Layout(props) {
	return (
		<>
			<Header />
			<main>{props.children}</main>
		</>
	);
}

export default Layout;
