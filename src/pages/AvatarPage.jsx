import {
	Title,
	Select,
	TextInput,
	Button,
	Image,
	Space,
	Center,
	Container,
} from "@mantine/core";
import { useState } from "react";
import { avatarAPI } from "../service/api";

const AvatarPage = () => {
	const sprites = [
		"male",
		"female",
		"human",
		"identicon",
		"initials",
		"bottts",
		"avataaars",
		"jdenticon",
		"gridy",
		"micah",
	];

	const [sprite, setSprite] = useState(sprites[0]);
	const [seed, setSeed] = useState();
	const [avatar, setAvatar] = useState();

	return (
		<Container>
			<Title color="pink">Criar Avatar</Title>

			<Space h="sm" />

			<Select
				label="Escolha o sprite:"
				searchable
				nothingFound="Nenhuma opção"
				data={sprites}
				value={sprite}
				onChange={setSprite}
			/>

			<Space h="md" />

			<TextInput
				label="Entre com a seed:"
				value={seed}
				onChange={(event) => setSeed(event.currentTarget.value)}
			/>

			<Space h="sm" />

			<Button
				variant="gradient"
				gradient={{ from: "orange", to: "pink" }}
				onClick={() => setAvatar(`${avatarAPI}${sprite}/${seed}.svg`)}
			>
				Enviar
			</Button>

			<Space h="sm" />

			<Center>
				<Image
					src={avatar}
					height={300}
					width={300}
					alt="Avatar gerado"
					caption="Avatar gerado"
					withPlaceholder
				/>
			</Center>
		</Container>
	);
};

export default AvatarPage;
