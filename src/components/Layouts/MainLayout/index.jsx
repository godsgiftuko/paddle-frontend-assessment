export default function MainLayout({ children }) {
	return (
		<>
			<header>Header</header>
				{children}
			<footer>footer</footer>
		</>
	);
}