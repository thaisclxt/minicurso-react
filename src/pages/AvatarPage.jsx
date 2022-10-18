import { Title, Select, TextInput, Button, Image } from "@mantine/core";
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
		<>
			<Title color="pink">Criar Avatar</Title>

			<Select
				label="Escolha o sprite:"
				searchable
				nothingFound="Nenhuma opção"
				data={sprites}
				value={sprite}
				onChange={setSprite}
			/>

			<TextInput
				label="Entre com a seed:"
				value={seed}
				onChange={(event) => setSeed(event.currentTarget.value)}
			/>

			<Button
				variant="gradient"
				gradient={{ from: "orange", to: "pink" }}
				onClick={() => setAvatar(`${avatarAPI}${sprite}/${seed}.svg`)}
			>
				Enviar
			</Button>

			<Image
				src={avatar}
				height={300}
				width={300}
				alt="Avatar gerado"
				caption="Avatar gerado"
				withPlaceholder
			/>
		</>
	);
};

export default AvatarPage;
