import { Container, Title, Group, Button, Center, Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
import { avatarAPI } from "../service/api";

import sprites from "../constants/sprites";
import BlockQuote from "../components/BlockQuote";

function RootPage() {
	return (
		<Container>
			<Title color="pink">Página Inicial</Title>

			{[...Array(5)].map((_, key) => (
				<Center key={key}>
					<Avatar
						radius="xl"
						size="lg"
						src={`${avatarAPI}${sprites[Math.floor(Math.random() * 10)]}/.svg`}
					/>
					<BlockQuote />
				</Center>
			))}

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
