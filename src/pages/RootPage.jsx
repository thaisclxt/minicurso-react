import { Container, Title, Group, Button } from "@mantine/core";
import { Link } from "react-router-dom";

function RootPage() {
	return (
		<Container>
			<Title color="pink">Página Inicial</Title>

			<Group position="center" spacing="xl" grow>
				<Button
					variant="gradient"
					gradient={{ from: "orange", to: "pink" }}
					component={Link}
					to="/avatar"
				>
					Criar avatar
				</Button>
				<Button
					variant="gradient"
					gradient={{ from: "orange", to: "pink" }}
					component={Link}
					to="/quote"
				>
					Gerar citação
				</Button>
			</Group>
		</Container>
	);
}

export default RootPage;
