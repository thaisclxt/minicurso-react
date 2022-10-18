import { Link } from "react-router-dom";

function RootPage() {
	return (
		<div className="App">
			<p>Página Inicial</p>
			<Link to="/avatar">Criar avatar</Link>
		</div>
	);
}

export default RootPage;
